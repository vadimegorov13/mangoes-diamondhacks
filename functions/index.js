const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

// Create a document for the user when user creates an account
exports.createUserDocuments = functions.auth.user().onCreate((user) => {
  const history = [];
  const favorite = [];

  db.collection('users')
    .doc(user.uid)
    .set(JSON.parse(JSON.stringify(user)));
  db.collection('history').doc(user.uid).set(history);
  db.collection('favorite').doc(user.uid).set(favorite);
});
