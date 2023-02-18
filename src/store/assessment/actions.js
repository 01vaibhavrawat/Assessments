import * as actionTypes from "./actionTypes";

export const postAssessmentAction = (payload) => ({
  type: actionTypes.POST_ASSESSMENT,
  payload,
});
export const resetAssessmentAction = (payload) => ({
  type: actionTypes.RESET_ASSESSMENT,
  payload,
});