import * as actionTypes from "./actionTypes";

const initialState = {
  data: [],
  loading: false,
  error: false,
  success: false,
};

const Assessment = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ASSESSMENT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.POST_ASSESSMENT_SUCCESS:
      return {
        ...state,
        loading: false,
  success: true,
        data: action.payload,
      };
    case actionTypes.POST_ASSESSMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
  success: false,
      };
    case actionTypes.RESET_ASSESSMENT:
      return {
        ...state,
        success: false,
      };
    default:
      return { ...state };
  }
};

export default Assessment;