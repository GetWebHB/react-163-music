import { Map } from "immutable";
import { CHANGE_BANNER_LIST, CHANGE_HOT_RECOMMEND_LIST } from "./constant";

interface IActionType {
  type: "CHANGE_BANNER_LIST" | "CHANGE_HOT_RECOMMEND_LIST";
  [payload: string]: any;
}

const initialState = Map({
  bannerList: [],
  hotRecommendList: [],
});

function reducer(state = initialState, action: IActionType) {
  switch (action.type) {
    case CHANGE_BANNER_LIST:
      return state.set("bannerList", action.bannerList);
    case CHANGE_HOT_RECOMMEND_LIST:
      return state.set("hotRecommendList", action.hotRecommendList);
    default:
      return state;
  }
}

export default reducer;
