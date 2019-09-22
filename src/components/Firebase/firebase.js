import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBinfKeY5pCifSHPmcmc7dlqyUTvb8ltcI",
  authDomain: "refiauth-21de4.firebaseapp.com",
  databaseURL: "https://refiauth-21de4.firebaseio.com",
  projectId: "refiauth-21de4",
  storageBucket: "",
  messagingSenderId: "1021800595521"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  doSignOut = () => this.auth.signOut();
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
