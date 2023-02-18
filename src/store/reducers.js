import { combineReducers } from "redux";
import Category from "./user/reducer";
import Assessment from "./assessment/reducer";

const rootReducer = combineReducers({
  Category,
  Assessment,
});

export default rootReducer;