import { BANNER_LIST } from "./constant";

const initialState = {
  bannerList: [],
};

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case BANNER_LIST:
      return { ...state, bannerList: action.bannerList };
    default:
      return state;
  }
}

export default reducer;
