import { Diagnosis } from '../../models';

module.exports = app => (req, res, next) => {
  const { id, ...payload } = req.body;

  const done = (err, diagnosis) => {
    if (diagnosis) app.io.emit('update_diagnoses', { diagnoses: [{ id }] });
    res.locals.setResponse(err, { diagnosis });
    next(); return null;
  };

  if (!id) return done({ msg: 'Required diagnosis "id" is not provided.' });

  Diagnosis.update(payload, { where: { id }, individualHooks: true })
    .then(diagnosis => done(null, diagnosis))
    .catch(done);
};
