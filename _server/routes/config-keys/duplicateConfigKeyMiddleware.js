import uuid from 'uuidv4';
import { ConfigKey } from '../../models';

export const copyConfigKey = (req, configKey) => {
  const author = (req.user || {}).id || null;

  return new Promise((resolve, reject) => {
    ConfigKey.create({
      ...configKey,
      id: uuid(),
      author,
      data: JSON.stringify(configKey.data),
      details: JSON.stringify({
        original_config_key_id: configKey.id,
        original_host: `${req.protocol}://${req.headers.host}`
      })
    })
      .then(configKey => resolve(configKey))
      .catch(err => reject(err));
  });
};

export default () => (req, res, next) => {
  const { id } = req.body;

  const done = (err, configKey) => {
    res.locals.setResponse(err, { configKey });
    next(); return null;
  };

  if (!id) return done({ msg: 'Required configKey "id" is not provided.' });

  Promise.all([
    ConfigKey.findOne({ where: { id } }),
  ])
    .then(([configKey]) => {
      if (!configKey) return done({ msg: `Could not find configKey with "id" ${id}.` });

      configKey = configKey.toJSON();

      copyConfigKey(req, configKey)
        .then(configKey => done(null, configKey))
        .catch(done);

      return null;
    })
    .catch(done);
};
