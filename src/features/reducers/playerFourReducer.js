let initialState = {
  name: "fourth",
  lifepoints: 20,
  tokens: [],
  tokenState: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "addPlayerFourth":
      return { ...state, lifepoints: state.lifepoints + 1 };
    case "subtractPlayerFourth":
      return { ...state, lifepoints: state.lifepoints - 1 };
    case "setLifepoints":
      return { ...state, lifepoints: action.payload };
    case "fourthAddTokens":
      return {
        ...state,
        tokens: [
          ...state.tokens,
          {
            token: action.payload.tokensToTrack,
            counter: [],
            id: action.payload.id,
          },
        ],
      };
    case "fourthCounters":
      let newState = { ...state };
      let filtered = newState.tokens.filter(
        (e) => e.id === action.payload.tokenId
      );
      let arr = filtered.map((e) => e.counter.push(action.payload.counters));
      return {
        ...state,
      };
    case "allowTokensFourth":
      return { ...state, tokenState: action.payload };

    case "reset":
      return initialState;
    default:
      return state;
  }
};

export default reducer;
