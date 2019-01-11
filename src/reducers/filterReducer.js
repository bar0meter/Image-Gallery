import { FILTER_DATA } from "../actions/types";
import DATA from "../Components/data";

const initialState = {
  data: DATA,
  categories: [
    "Animals",
    "Foods",
    "Furniture",
    "Nature",
    "Technology",
    "Transport"
  ],
  dataFilter: DATA.categories
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FILTER_DATA:
      let filterValues = action.payload;
      let dataFilter = filterValues.length > 0 ? [] : state.data.categories;
      if (filterValues.length > 0) {
        for (let value of filterValues) {
          const index = state.categories.findIndex(
            x => x.toLowerCase() === value
          );
          dataFilter.push(state.data.categories[index]);
        }
      }
      console.log(dataFilter);
      return { ...state, dataFilter };
    default:
      return state;
  }
}
