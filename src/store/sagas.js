import { all } from "redux-saga/effects";

import CategorySaga from "./user/saga";
import AssessmentSaga from "./assessment/saga";

export default function* rootSaga() {
  yield all([
    CategorySaga(),
    AssessmentSaga(),
  ]);
}
