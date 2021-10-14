import apiKeyAuthenticator from './apiKeyAuthenticator';
import { Configuration, ConfigKey } from '../../database';

export default (app, router) => {
    router.get(
        '/get-configuration',
        apiKeyAuthenticator(app),
        (req, res, next) => {
            (async () => {
                const { key } = req.query;
            
                const done = (err, rslts) => {
                    res.locals.setResponse(err, { configuration: null, configKeys: [], ...rslts });
                    next();
                };
            
                let configKeys = [];
                let configuration = null;
                try {
                    configKeys = await ConfigKey.findAll({ where: { deletedAt: null }, order: [['position', 'ASC']], });
                    configuration = await Configuration.findOne({ where: { unique_key: key } });
                    if (configuration) {
                        configuration = JSON.parse(JSON.stringify(configuration));
                        configuration.data = JSON.parse(configuration.data);
                    }
                } catch (e) { return done(e); }
            
                done(null, { configuration, configKeys, });
            })();
        },
        require('../../utils/responseMiddleware')
    );

    router.post(
        '/add-configuration',
        apiKeyAuthenticator(app),
        (req, res, next) => {
            (async () => {
                const payload = req.body;
            
                const done = (err, configuration) => {
                    res.locals.setResponse(err, { configuration });
                    next();
                };
                let configuration = null;
                try {
                    configuration = await Configuration.findOne({ where: { unique_key: payload.unique_key } });
                    if (!configuration) {
                        await Configuration.create(payload);
                        configuration = await Configuration.findOne({ where: { unique_key: payload.unique_key } });
                        if (configuration) {
                            configuration = JSON.parse(JSON.stringify(configuration));
                            configuration.data = JSON.parse(configuration.data);
                        }
                    }
                } catch (e) { return done(e); }
            
                done(null, configuration);
            })();
        },
        require('../../utils/responseMiddleware')
    );

    router.post(
        '/update-configuration',
        apiKeyAuthenticator(app),
        (req, res, next) => {
            const { key, ...payload } = req.body;

            const done = (err, configuration) => {
                res.locals.setResponse(err, { configuration });
                next();
            };

            (async () => {
                if (!key) return done(new Error('Required configuration "key" is not provided.'));
            
                let configuration = null;
                try {
                    configuration = await Configuration.findOne({ where: { unique_key: key } });
                } catch (e) { return done(e); }
            
                if (!configuration) return reject(new Error(`Configuration with unique_key "${key}" not found`));
            
                try {
                    await Configuration.update(
                        {
                            data: JSON.stringify({ ...configuration.data, ...payload }),
                        },
                        { where: { unique_key: key, deletedAt: null } }
                    );
                    configuration = await Configuration.findOne({ where: { unique_key: key } });
                    if (configuration) {
                        configuration = JSON.parse(JSON.stringify(configuration));
                        configuration.data = JSON.parse(configuration.data);
                    }
                } catch (e) { return done(e); }
            
                done(null, configuration);
            })();
        },
        require('../../utils/responseMiddleware')
    );

    return router;
}
