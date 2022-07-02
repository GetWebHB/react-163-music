import { Map } from "immutable";
const initialState = Map({});

function reducer(state = initialState, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;
