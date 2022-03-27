import {db} from "../firebase/firebase"

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

  return {
    getIncluded,
  };
};
