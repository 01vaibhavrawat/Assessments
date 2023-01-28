import * as actionTypes from "./actionTypes";

const initialState = {
  usersByRefer: [],
  loading: false,
  error: false,
};

const Category = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CATEGORY_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_USERS_BY_REFER_SUCCESS:
      return {
        ...state,
        loading: false,
        usersByRefer: action.payload,
      };
    case actionTypes.GET_USERS_BY_REFER_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        usersByRefer: [],
      };
    default:
      return { ...state };
  }
};

export default Category;