import { db } from '../firebase/firebase';
import firebase from 'firebase/compat/app';

export const useUpdateHooks = () => {
  const fieldValueRef = firebase.firestore.FieldValue;

  // Add ingredient to includeIngredients
  const addToInclude = async (userId, ingredient) => {
    if (userId && ingredient) {
      try {
        await db
          .collection('includeIngredients')
          .doc(userId)
          .update({
            ingredients: fieldValueRef.arrayUnion(ingredient),
            updatedAt: Date.now(),
          });
      } catch (error) {
        console.log("Something went wrong, here's an error:", error);
      }
    } else {
      console.log('User is not authenticated');
    }
  };

  // Remove ingredient from includeIngredients
  const removeFromInclude = async (userId, ingredient) => {
    if (userId && ingredient) {
      try {
        await db
          .collection('includeIngredients')
          .doc(userId)
          .update({
            ingredients: fieldValueRef.arrayRemove(ingredient),
            updatedAt: Date.now(),
          });
      } catch (error) {
        console.log("Something went wrong, here's an error:", error);
      }
    } else {
      console.log('User is not authenticated');
    }
  };

  // Add ingredient to excludeIngredients
  const addToExclude = async (userId, ingredient) => {
    if (userId && ingredient) {
      try {
        await db
          .collection('excludeIngredients')
          .doc(userId)
          .update({
            ingredients: fieldValueRef.arrayUnion(ingredient),
            updatedAt: Date.now(),
          });
      } catch (error) {
        console.log("Something went wrong, here's an error:", error);
      }
    } else {
      console.log('User is not authenticated');
    }
  };

  // Remove ingredient from excludeIngredients
  const removeFromExclude = async (userId, ingredient) => {
    if (userId && ingredient) {
      try {
        await db
          .collection('excludeIngredients')
          .doc(userId)
          .update({
            ingredients: fieldValueRef.arrayRemove(ingredient),
            updatedAt: Date.now(),
          });
      } catch (error) {
        console.log("Something went wrong, here's an error:", error);
      }
    } else {
      console.log('User is not authenticated');
    }
  };

  // Update health array
  const updateHealth = async (userId, fields) => {
    if (userId && fields) {
      try {
        await db.collection('health').doc(userId).update({
          health: fields,
          updatedAt: Date.now(),
        });
      } catch (error) {
        console.log("Something went wrong, here's an error:", error);
      }
    } else {
      console.log('User is not authenticated');
    }
  };

  // Update health array
  const updateDiet = async (userId, fields) => {
    if (userId && fields) {
      try {
        await db.collection('diet').doc(userId).update({
          diet: fields,
          updatedAt: Date.now(),
        });
      } catch (error) {
        console.log("Something went wrong, here's an error:", error);
      }
    } else {
      console.log('User is not authenticated');
    }
  };

  // Save recipe to history
  const saveToHistory = async (userId, recipeLink) => {
    if (userId && recipeLink) {
      try {
        await db
          .collection('history')
          .doc(userId)
          .update({
            links: fieldValueRef.arrayUnion(recipeLink),
            updatedAt: Date.now(),
          });
      } catch (error) {
        console.log("Something went wrong, here's an error:", error);
      }
    } else {
      console.log('User is not authenticated');
    }
  };

  // Clear history
  const clearHistory = async (userId) => {
    if (userId) {
      try {
        await db.collection('history').doc(userId).update({
          links: [],
          updatedAt: Date.now(),
        });
      } catch (error) {
        console.log("Something went wrong, here's an error:", error);
      }
    } else {
      console.log('User is not authenticated');
    }
  };

  // Save recipe to favorite
  const saveToFavorite = async (userId, recipeLink) => {
    if (userId && recipeLink) {
      try {
        await db
          .collection('favorite')
          .doc(userId)
          .update({
            links: fieldValueRef.arrayUnion(recipeLink),
            updatedAt: Date.now(),
          });
      } catch (error) {
        console.log("Something went wrong, here's an error:", error);
      }
    } else {
      console.log('User is not authenticated');
    }
  };

  // Remove recipe from favorite
  const removeFromFavorite = async (userId, recipeLink) => {
    if (userId && recipeLink) {
      try {
        await db
          .collection('favorite')
          .doc(userId)
          .update({
            links: fieldValueRef.arrayRemove(recipeLink),
            updatedAt: Date.now(),
          });
      } catch (error) {
        console.log("Something went wrong, here's an error:", error);
      }
    } else {
      console.log('User is not authenticated');
    }
  };

  return {
    addToInclude,
    removeFromInclude,
    addToExclude,
    removeFromExclude,
    updateHealth,
    updateDiet,
    saveToHistory,
    clearHistory,
    saveToFavorite,
    removeFromFavorite,
  };
};
