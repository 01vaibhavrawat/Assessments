import * as actionTypes from "./actionTypes";

export const getUsersByReferAction = (payload) => ({
  type: actionTypes.GET_USERS_BY_REFER,
  payload,
});