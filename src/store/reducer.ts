import { combineReducers } from "redux-immutable";

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
  artist: artistReducer,
});

export default reducer;
