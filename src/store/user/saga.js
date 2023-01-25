import { fork, put, all, takeLatest } from "redux-saga/effects";

import * as actionTypes from "./actionTypes";
import API from "../../Config/axiosInstance";
import { stringifyErrorMessage } from "../../Utils";

function* getAllCategorySaga() {
  try {
    yield put({ type: actionTypes.SET_CATEGORY_LOADING });
    const { data } = yield API.get(
      "/api/end-user/coupon/getUniqueCategoryAndCount",
      {
        params: {
          district: true,
        },
      }
    );

    yield put({
      type: actionTypes.GET_ALL_CATEGORY_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    yield put({
      type: actionTypes.GET_ALL_CATEGORY_FAILURE,
      payload: stringifyErrorMessage(error),
    });
  }
}
function* getCouponsByCategorySaga({ payload }) {
  try {
    yield put({ type: actionTypes.SET_CATEGORY_LOADING });
    const { data } = yield API.get(
      "/api/end-user/coupon/getCouponsBasedOnCategory",
      {
        params: {
          ...payload,
        },
      }
    );

    yield put({
      type: actionTypes.GET_COUPONS_BY_CATEGORY_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    yield put({
      type: actionTypes.GET_COUPONS_BY_CATEGORY_FAILURE,
      payload: stringifyErrorMessage(error),
    });
  }
}

function* CategorySaga() {
  yield all([
    takeLatest(actionTypes.GET_ALL_CATEGORY, getAllCategorySaga),
    takeLatest(actionTypes.GET_COUPONS_BY_CATEGORY, getCouponsByCategorySaga),
  ]);
}

export default CategorySaga;