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
          type: 'CLEAR_ERRORS',
          payload: entity,
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

export const fetchEntity = (id) => (dispatch, getState, getFirebase) => {
  const firestore = getFirebase().firestore();
  return firestore
    .collection('entities')
    .doc(id)
    .get()
    .then((doc) =>
      dispatch({
        type: 'FETCH_ENTITY',
        payload: doc.data(),
      }),
    );
};
