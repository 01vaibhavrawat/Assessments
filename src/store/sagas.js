import { all } from "redux-saga/effects";

import CategorySaga from "./user/saga";

export default function* rootSaga() {
  yield all([
    CategorySaga(),
  ]);
}
