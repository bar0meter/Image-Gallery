import axios from "axios";
import { FETCH_DATA, FILTER_DATA, GOTO_PAGE } from "./types";

export function filterData(filterValues) {
	return {
		type: FILTER_DATA,
		payload: filterValues
	};
}

export function gotoPage(activePage) {
	return {
		type: GOTO_PAGE,
		payload: activePage
	};
}
