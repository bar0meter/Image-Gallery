import { combineReducers } from "redux";
import filter from "./filterReducer";
import paginate from "./paginateReducer";

export default combineReducers({
	filter,
	paginate
});
