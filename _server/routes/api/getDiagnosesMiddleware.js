import { Diagnosis } from '../../models';

module.exports = () => (req, res, next) => {
  const {
    filters,
    ...payload
  } = JSON.parse(req.query.payload || {});

  const done = (e, payload) => {
    res.locals.setResponse(e, payload);
    next();
  };

  Diagnosis.findAll({ where: payload, order: [['position', 'ASC']], ...filters })
    .then(diagnoses => done(null, { diagnoses }))
    .catch(done);
};
