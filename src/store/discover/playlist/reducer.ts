import { Map } from "immutable";

const initialState = Map({
  playList: [],
});

function reducer(state = initialState, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;
