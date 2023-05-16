import * as actionTypes from "./actionTypes";

const initialState = {
  data: [],
  assessmentLoading: false,
  error: false,
  success: false,
};

const Assessment = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ASSESSMENT_LOADING:
      return {
        ...state,
        assessmentLoading: true,
      };
    case actionTypes.POST_ASSESSMENT_SUCCESS:
      return {
        ...state,
        assessmentLoading: false,
  success: true,
        data: action.payload,
      };
    case actionTypes.POST_ASSESSMENT_FAILURE:
      return {
        ...state,
        assessmentLoading: false,
        error: true,
        data: [],
  success: false,
      };
    case actionTypes.RESET_ASSESSMENT:
      return {
        ...state,
        data: [],
        assessmentLoading: false,
        error: false,
        success: false,
      };
    default:
      return { ...state };
  }
};

export default Assessment;