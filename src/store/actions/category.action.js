import { categoryTypes } from "../types/category.types";

const { LOAD_CATEGORIES, SELECT_CATEGORY } = categoryTypes;

export const selectCategory = (id) => ({
  type: SELECT_CATEGORY,
  categoryId: id,
});

export const loadCategory = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php",
        {
          method: "GET",
        }
      );
      const data = await response.json();

      const categories = Object.keys(data).map((key) => ({
        ...data[key],
        id: key,
      }));
      dispatch({
        type: LOAD_CATEGORIES,
        cats: categories,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
