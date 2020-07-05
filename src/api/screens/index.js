import makeApiCall from '../makeApiCall';

export const getScreens = (reqPayload = {}, reqOpts) => {
  return makeApiCall('/get-screens', {
    body: reqPayload,
    ...reqOpts,
  });
};

export const updateScreens = (reqPayload = {}, reqOpts) => {
  return makeApiCall('/update-screens', {
    method: 'POST',
    body: reqPayload,
    ...reqOpts,
  });
};

export const deleteScreen = (reqPayload = {}, reqOpts) => {
  return makeApiCall('/delete-screen', {
    method: 'POST',
    body: reqPayload,
    ...reqOpts,
  });
};

export const duplicateScreen = (reqPayload = {}, reqOpts) => {
  return makeApiCall('/duplicate-screen', {
    method: 'POST',
    body: reqPayload,
    ...reqOpts,
  });
};

export const getScreen = (reqPayload = {}, reqOpts) => {
  return makeApiCall('/get-screen', {
    body: reqPayload,
    ...reqOpts,
  });
};

export const updateScreen = (reqPayload = {}, reqOpts) => {
  return makeApiCall('/update-screen', {
    method: 'POST',
    body: reqPayload,
    ...reqOpts,
  });
};
