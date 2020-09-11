export const createEntity = (entity) => {
  return (dispatch, getState, getFirebase) => {
    const firestore = getFirebase().firestore();
    return firestore
      .collection('entities')
      .add({
        ...entity,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({
          type: 'CREATE_ENTITY',
          entity,
        });
      })
      .catch((err) => {
        dispatch({
          type: 'CREATE_ENTITY_ERROR',
          err,
        });
      });
  };
};
