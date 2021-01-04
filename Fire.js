import firebase from 'firebase';

class Fire {
  constructor() {
    this.init()
    this.checkAuth()
  }

  init = () => {
    if(!firebase.apps.length){
      firebase.initializeApp({
        apiKey: "AIzaSyAtPpR9UKjloIVgLr4hFMe5oQ0o8VwKtgM",
        authDomain: "awesomeproject-f06e2.firebaseapp.com",
        projectId: "awesomeproject-f06e2",
        storageBucket: "awesomeproject-f06e2.appspot.com",
        messagingSenderId: "600938573574",
        appId: "1:600938573574:web:29820bff377be5a2ef7887", 
        measurementId: "G-HL8J9T1K5V"
      });
    }
  };

  checkAuth = () => {
    firebase.auth().onAuthStateChanged(user => {
      if(!user) {
        firebase.auth().signInAnonymously();
      }
    })
  };

  send = messages => {
    messages.forEach(item => {
      const message = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user
      };

      this.db.push(message);
    });
  };

  parse = message => {
    const { user, text, timestamp } = message.val();
    const { key: _id } = message;
    const createdAt = new Date(timestamp);

    return {
      _id, 
      createdAt,
      text,
      user
    }
  };

  get = callback => {
    this.db.on('child_added', snapshot => callback(this.parse(snapshot)));
  }

  off() {
    this.db.off();
  }

  get db(){
    return firebase.database().ref("messages");
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
}

export default new Fire();