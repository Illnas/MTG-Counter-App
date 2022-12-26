const initialState = {
  name: "second",
  lifepoints: 20,
  tokens: [],
  timerState: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "addPlayerTwo":
      return { ...initialState, lifepoints: state.lifepoints + 1 };
    case "subtractPlayerTwo":
      return { ...initialState, lifepoints: state.lifepoints - 1 };
    case "setLifepoints":
      return { ...initialState, lifepoints: action.payload };
      case "secondAddTokens":
        return { ...state, tokens: [...state.tokens, {token: action.payload.tokensToTrack, counter: [], id: action.payload.id}] };
    default:
      return state;
  }
};

export default reducer;
