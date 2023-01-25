import * as actionTypes from "./actionTypes";

export const getAllCategoryAction = () => ({
  type: actionTypes.GET_ALL_CATEGORY,
});

export const getCouponsByCategoryAction = (payload) => ({
  type: actionTypes.GET_COUPONS_BY_CATEGORY,
  payload,
});

export const resetCouponsByCategoryAction = () => ({
  type: actionTypes.RESET_COUPONS_LIST,
});