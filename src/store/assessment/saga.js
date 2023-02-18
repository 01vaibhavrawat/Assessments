import { fork, put, all, takeLatest } from "redux-saga/effects";

import * as actionTypes from "./actionTypes";
import API from "../../services/axiosInstance";

function* postAssessmentActionSaga({ payload }) {
  try {
    yield put({ type: actionTypes.SET_ASSESSMENT_LOADING });
    const { data } = yield API.post(
      "/assessment", payload
    );
    yield put({
      type: actionTypes.POST_ASSESSMENT_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    yield put({
      type: actionTypes.POST_ASSESSMENT_FAILURE,
    });
  }
}

function* AssessmentSaga() {
  yield all([
    takeLatest(actionTypes.POST_ASSESSMENT, postAssessmentActionSaga),
  ]);
}

export default AssessmentSaga;