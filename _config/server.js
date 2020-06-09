let serverType = process.env.NEOTREE_SERVER_TYPE || '';

if (serverType) serverType = `_${serverType.toUpperCase()}`;

const firebaseConfigFileName = `NEOTREE_FIREBASE_CONFIG_FILE${serverType}`;
const serverConfigFileName = `NEOTREE_CONFIG_FILE${serverType}`;

const firebaseConfig = (function () {
  try {
    return require(firebaseConfigFileName);
  } catch (e) {
    return require('./firebase.config.json');
  }
}());

try {
  module.exports = {
    firebaseConfig,
    ...require(serverConfigFileName)
  };
} catch (e) {
  module.exports = {
    firebaseConfig,
    ...require('./server.config')
  };
}
