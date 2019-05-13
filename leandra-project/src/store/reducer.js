const initialState = {
  user: null,
  events: [],
  pullStat: [],
  // merged:[],
  // stateReq:[]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_EVENTS":
      return { ...state, events: action.events };
    case "SET_STATUS":
    return {
      ...state,
      pullStat: action.pullStat
      // pullStat:state.pullStat.concat(action.pullStat)
      // merged:action.pullStat.merged,
      // stateReq: action.pullStat.state
    };
    default:
      return state;
  }
};
export default reducer;
