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
    default:
      return state;
  }
};

export default reducer;
