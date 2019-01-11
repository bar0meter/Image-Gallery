import { FILTER_DATA, GOTO_PAGE } from "../actions/types";

const initialState = {
  activePage: 1
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GOTO_PAGE:
      return { ...state, activePage: action.payload };
    default:
      return state;
  }
}
