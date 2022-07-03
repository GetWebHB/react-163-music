import { Map } from "immutable";
import {
  CHANGE_BANNER_LIST,
  CHANGE_HOT_RECOMMEND_LIST,
  CHANGE_NEW_ALBUM_LIST,
} from "./constant";

interface IActionType {
  type:
    | "CHANGE_BANNER_LIST"
    | "CHANGE_HOT_RECOMMEND_LIST"
    | "CHANGE_NEW_ALBUM_LIST";
  [payload: string]: any;
}

const initialState = Map({
  bannerList: [],
  hotRecommendList: [],
  newAlbumList: [],
});

function reducer(state = initialState, action: IActionType) {
  switch (action.type) {
    case CHANGE_BANNER_LIST:
      return state.set("bannerList", action.bannerList);
    case CHANGE_HOT_RECOMMEND_LIST:
      return state.set("hotRecommendList", action.hotRecommendList);
    case CHANGE_NEW_ALBUM_LIST:
      return state.set("newAlbumList", action.newAlbumList);
    default:
      return state;
  }
}

export default reducer;
