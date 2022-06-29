import { combineReducers } from "redux";
import { reducer as DiscoverReducer } from "./discover";

const reducer = combineReducers({ discover: DiscoverReducer });

export default reducer;
