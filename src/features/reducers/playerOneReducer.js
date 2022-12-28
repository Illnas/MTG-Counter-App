let initialState = {
  name: "first",
  lifepoints: 20,
  tokens: [],
  timerState: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "addPlayerOne":
      return { ...initialState, lifepoints: state.lifepoints + 1 };
    case "subtractPlayerOne":
      return { ...initialState, lifepoints: state.lifepoints - 1 };
    case "setLifepoints":
      return { ...initialState, lifepoints: action.payload };
    case "firstAddTokens":
      return { ...state, tokens: [...state.tokens, {token: action.payload.tokensToTrack, counter: [], id: action.payload.id}] };
      case "firstCounters":
        let newState = {...state}
        let filtered = newState.tokens.filter(e => e.id === action.payload.tokenId)
        let arr = filtered.map(e => e.counter.push(action.payload.counters))
        return {
          ...state
        }
    default:
      return state;
  }
};

export default reducer;
