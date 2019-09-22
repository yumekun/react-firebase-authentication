import app from "firebase/app";

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
  }
}

export default Firebase;
