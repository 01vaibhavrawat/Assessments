import * as actionTypes from "./actionTypes";

const initialState = {
  usersByRefer: [],
  userLoading: false,
  error: false,
  data: [],
};

const Category = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CATEGORY_LOADING:
      return {
        ...state,
        userLoading: true,
      };
    case actionTypes.GET_USERS_BY_REFER_SUCCESS:
      return {
        ...state,
        userLoading: false,
        usersByRefer: action.payload,
      };
    case actionTypes.GET_USERS_BY_REFER_FAILURE:
      return {
        ...state,
        userLoading: false,
        error: true,
        usersByRefer: [],
      };
      case actionTypes.POST_USER_SUCCESS:
      return {
        ...state,
        userLoading: false,
        success: true,
        data: action.payload,
      };
    case actionTypes.POST_USER_FAILURE:
      return {
        ...state,
        userLoading: false,
        error: true,
        data: [],
  success: false,
      };
    default:
      return { ...state };
  }
};

export default Category;