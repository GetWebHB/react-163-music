import { Map } from "immutable";
import { CHANGE_BANNER_LIST } from "./constant";

interface IActionType {
  type: "CHANGE_BANNER_LIST";
  [payload: string]: any;
}

const initialState = Map({
  bannerList: [],
});

function reducer(state = initialState, action: IActionType) {
  switch (action.type) {
    case CHANGE_BANNER_LIST:
      return state.set("bannerList", action.bannerList);
    default:
      return state;
  }
}

export default reducer;
