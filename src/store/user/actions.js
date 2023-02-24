import * as actionTypes from "./actionTypes";

export const getUsersByReferAction = (payload) => ({
  type: actionTypes.GET_USERS_BY_REFER,
  payload,
});
export const postUserAction = (payload) => ({
  type: actionTypes.POST_USER,
  payload,
});