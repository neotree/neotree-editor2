import firebase from '../../firebase';

export const updateScript = ({ id, ...payload }) => new Promise((resolve, reject) => {
  (async () => {
    if (!id) return reject(new Error('Required script "id" is not provided.'));

    let script = null;
    try {
      script = await new Promise((resolve) => {
        firebase.database()
          .ref(`scripts/${id}`)
          .on('value', snap => resolve(snap.val()));
      });
    } catch (e) { return reject(e); }

    if (!script) return reject(new Error(`Script with id "${id}" not found`));

    script = { ...script, ...payload, id, };

    try { await firebase.database().ref(`scripts/${id}`).set(script); } catch (e) { return reject(e); }

    resolve(script);
  })();
});

export default (app) => (req, res, next) => {
  (async () => {
    const { id } = req.body;

    const done = (err, script) => {
      if (script) app.io.emit('update_scripts', { key: app.getRandomString(), scripts: [{ id: script.id }] });
      res.locals.setResponse(err, { script });
      next();
    };

    if (!id) return done({ msg: 'Required script "id" is not provided.' });

    let script = null;
    try { script = await updateScript(req.body); } catch (e) { return done(e); }

    done(null, script);
  })();
};
