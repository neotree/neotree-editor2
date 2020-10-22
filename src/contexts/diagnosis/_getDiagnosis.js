import * as api from '@/api/diagnoses';

export default function getDiagnosis(payload = {}) {
  this.setState({ loadingDiagnosis: true });

  const done = (e, rslts) => {
    this.setState(({ form }) => ({
      initialiseDiagnosisError: e,
      diagnosisInitialised: true,
      loadingDiagnosis: false,
      ...rslts,
      form: { ...form, ...(rslts ? rslts.diagnosis : {}), },
    }));
  };

  api.getDiagnosis(payload)
    .then(rslts => done(rslts.errors, rslts))
    .catch(done);
}
