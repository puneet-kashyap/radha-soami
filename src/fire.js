import firebase from 'firebase'
import firebaseui from 'firebaseui'

var config = {
  apiKey: "AIzaSyBSWmSjStemYQvcunlZILwiWljWtCvHiTw",
  authDomain: "radhasoami-f4ad0.firebaseapp.com",
  databaseURL: "https://radhasoami-f4ad0.firebaseio.com",
  projectId: "radhasoami-f4ad0",
  storageBucket: "radhasoami-f4ad0.appspot.com",
  messagingSenderId: "112630289070"
};
export const fire = firebase.initializeApp(config);

export const fireUI = () => {
var uiConfig = {
  signInSuccessUrl: '/Welcome',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
  ],
  tosUrl: '/',
  credentialHelper: firebaseui.auth.CredentialHelper.NONE,
  signInFlow: 'popup',
};
var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', uiConfig);
}

 firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(`${user.displayName} Signed In`);
    } else {
      console.log(`User Signed Out`);
      document.getElementById('sign-in-status').textContent = 'Sign In';
    }
  });

export const signOut = () => {
  firebase.auth().signOut().then( () => {
    localStorage.clear();
    window.location = '/SignIn'
  }, (error) => {
    console.error('Sign Out Error', error);
  });
}

export const fireLocal = () => {
  return JSON.parse(localStorage.getItem('firebase:authUser:AIzaSyBSWmSjStemYQvcunlZILwiWljWtCvHiTw:[DEFAULT]'))
}

export const signIn = () => {
  window.location = '/SignIn'
}
