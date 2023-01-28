import { fork, put, all, takeLatest } from "redux-saga/effects";

import * as actionTypes from "./actionTypes";
import API from "../../services/axiosInstance";

function* getUsersByReferActionSaga({ payload }) {
  try {
    yield put({ type: actionTypes.SET_CATEGORY_LOADING });
    const { data } = yield API.get(
      "/user/refer",
      {
        params: {
          ...payload,
        },
      }
    );
    yield put({
      type: actionTypes.GET_USERS_BY_REFER_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    yield put({
      type: actionTypes.GET_USERS_BY_REFER_FAILURE,
    });
  }
}

function* CategorySaga() {
  yield all([
    takeLatest(actionTypes.GET_USERS_BY_REFER, getUsersByReferActionSaga),
  ]);
}

export default CategorySaga;