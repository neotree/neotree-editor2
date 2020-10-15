import { Country } from '../../database';

module.exports = app => (req, res, next) => {
  const { id, ...payload } = req.body;

  const done = (err, country) => {
    if (!err) app.io.emit('update_countries', { key: app.getRandomString(), countries: [{ id }] });
    res.locals.setResponse(err, { country });
    next(); return null;
  };

  if (!id) return done({ msg: 'Required country "id" is not provided.' });

  Country.update(payload, { where: { id }, individualHooks: true })
    .then(rslts => done(null, rslts && rslts[1] ? rslts[1][0] : null))
    .catch(done);
};
