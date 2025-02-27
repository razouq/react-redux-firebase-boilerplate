export const logIn = (credentionls) => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(credentionls.email, credentionls.password)
      .then(() => {
        dispatch({
          type: 'LOGIN_SUCCESS',
        });
      })
      .catch((err) => {
        dispatch({
          type: 'LOGIN_ERROR',
          err,
        });
      });
  };
};

export const logOut = () => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' });
      });
  };
};

export const signUp = (newUser) => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    const firestore = getFirebase().firestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((res) => {
        console.log('res', res);
        return firestore.collection('users').doc(res.user.uid).set({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
        });
      })
      .then(() => {
        dispatch({
          type: 'SIGNUP_SUCCESS',
        });
      })
      .catch((err) => {
        dispatch({
          type: 'SIGNUP_ERROR',
          err,
        });
      });
  };
};
