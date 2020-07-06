import * as api from '@/api/screens';

export default ({ setState }) => function getScreen(payload = {}) {
  setState({ loadingScreen: true });

  const done = (e, rslts) => {
    setState({
      initialiseScreenError: e,
      screenInitialised: true,
      loadingScreen: false,
      ...rslts,
      form: e ? {} : (rslts.screen ? rslts.screen.data : {}),
    });
  };

  api.getScreen(payload)
    .then(rslts => done(rslts.errors, rslts))
    .catch(done);
};
