import { CATEGORIES } from "../../constants/data/categories";
import { categoryTypes } from "../types/index";

const { LOAD_CATEGORIES, SELECT_CATEGORY } = categoryTypes;

const initialState = {
  categories: CATEGORIES,
  selectedCategory: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      const indexCategory = state.categories.findIndex(
        (category) => category.id === action.categoryId
      );
      if (indexCategory === -1) return state;
      return {
        ...state,
        selectedCategory: state.categories[indexCategory],
      };
    case LOAD_CATEGORIES:
      return {
        ...state,
        categories: action.cats,
      };
    default:
      return state;
  }
};

export default categoryReducer;
