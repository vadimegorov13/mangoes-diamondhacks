const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

// Create a document for the user when user creates an account
exports.createUserDocuments = functions.auth.user().onCreate(async (user) => {
  const userId = user.uid;
  // Create date
  const date = {
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };

  // Declare user
  const userData = {
    id: userId,
    username: user.displayName,
    email: user.email,
    photoUrl: user.photoURL,
    ...date,
  };

  // Declare history and favorite
  const handfData = {
    links: [],
    ...date,
  };

  // Declare ingredients
  const ingredients = {
    ingredients: [],
    ...date,
  };

  // Declare health
  const health = {
    health: [],
    ...date,
  };

  // Declare health
  const diet = {
    diet: [],
    ...date,
  };

  await db.collection('users').doc(userId).set(userData);
  await db.collection('history').doc(userId).set(handfData);
  await db.collection('favorite').doc(userId).set(handfData);

  await db.collection('includeIngredients').doc(userId).set(ingredients);
  await db.collection('excludeIngredients').doc(userId).set(ingredients);
  await db.collection('health').doc(userId).set(health);
  await db.collection('diet').doc(userId).set(diet);
});
