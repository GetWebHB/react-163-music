import { combineReducers } from "redux";

import {
  recommendReducer,
  topListReducer,
  albumReducer,
  djRadioReducer,
  playListReducer,
  artistReducer,
} from "./discover";

const reducer = combineReducers({
  recommend: recommendReducer,
  topList: topListReducer,
  album: albumReducer,
  djRadio: djRadioReducer,
  playList: playListReducer,
  artistReducer: artistReducer,
});

export default reducer;
