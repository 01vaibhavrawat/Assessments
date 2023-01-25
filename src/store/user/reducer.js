import * as actionTypes from "./actionTypes";

const initialState = {
  categoryList: [],
  couponsList: [],
  error: null,
  errorMessage: "",
  success: false,
  successMessage: "",
  loading: false,
  totalRecords:0,
  totalPages:0,
};

const Category = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CATEGORY_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: "",
      };
    case actionTypes.GET_ALL_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categoryList: action.payload,
      };
    case actionTypes.GET_ALL_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload,
        categoryList: [],
      };
    case actionTypes.GET_COUPONS_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        couponsList: action.payload,
        totalRecords:action.payload.total_records,
        totalPages:action.payload.total_pages
      };
    case actionTypes.GET_COUPONS_BY_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload,
        couponsList: [],
      };
    case actionTypes.RESET_CATEGORY_STATUS:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: "",
        successMessage: "",
        success: false,
      };
    case actionTypes.RESET_COUPONS_LIST:
      return { ...state, couponsList: [] };
    default:
      return { ...state };
  }
};

export default Category;