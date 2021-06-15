import firebase from 'firebase';

import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDYq4LBeiCRC83OIqluwOaTE63mpQrpOUY",
  authDomain: "user-manager-e822b.firebaseapp.com",
  projectId: "user-manager-e822b",
  storageBucket: "user-manager-e822b.appspot.com",
  messagingSenderId: "384799278760",
  appId: "1:384799278760:web:7b721eb486b3bbe41ca49d"
};

const Firebase = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

export default  {
    firebase,
    db,
};
