import { db } from '../firebase/firebase';

export const useGetHooks = () => {
  const getIncluded = async (userId, setIngredients) => {
    if (userId) {
      try {
        await db
          .collection('includeIngredients')
          .doc(userId)
          .get()
          .then((response) => {
            const data = response.data();
            setIngredients(data.ingredients);
          });
      } catch (error) {
        console.log("Something went wrong, here's an error:", error);
      }
    } else {
      console.log('User is not authenticated');
    }
  };

  const getExcluded = async (userId, setIngredients) => {
    if (userId) {
      try {
        await db
          .collection('excludedIngredients')
          .doc(userId)
          .get()
          .then((response) => {
            const data = response.data();
            setIngredients(data.ingredients);
          });
      } catch (error) {
        console.log("Something went wrong, here's an error:", error);
      }
    } else {
      console.log('User is not authenticated');
    }
  };

  const getHealth = async (userId, setHealth) => {
    if (userId) {
      try {
        await db
          .collection('health')
          .doc(userId)
          .get()
          .then((response) => {
            const data = response.data();
            setHealth(data.health);
          });
      } catch (error) {
        console.log("Something went wrong, here's an error:", error);
      }
    } else {
      console.log('User is not authenticated');
    }
  };

  const getDiet = async (userId, setDiet) => {
    if (userId) {
      try {
        await db
          .collection('diet')
          .doc(userId)
          .get()
          .then((response) => {
            const data = response.data();
            setDiet(data.health);
          });
      } catch (error) {
        console.log("Something went wrong, here's an error:", error);
      }
    } else {
      console.log('User is not authenticated');
    }
  };

  const getHistory = async (userId, setHistory) => {
    if (userId) {
      try {
        await db
          .collection('history')
          .doc(userId)
          .get()
          .then((response) => {
            const data = response.data();
            setHistory(data.links);
          });
      } catch (error) {
        console.log("Something went wrong, here's an error:", error);
      }
    } else {
      console.log('User is not authenticated');
    }
  };

  const getFavorite = async (userId, setFavorite) => {
    if (userId) {
      try {
        await db
          .collection('favorite')
          .doc(userId)
          .get()
          .then((response) => {
            const data = response.data();
            setFavorite(data.links);
          });
      } catch (error) {
        console.log("Something went wrong, here's an error:", error);
      }
    } else {
      console.log('User is not authenticated');
    }
  };

  return {
    getIncluded,
    getExcluded,
    getHealth,
    getDiet,
    getHistory,
    getFavorite,
  };
};
