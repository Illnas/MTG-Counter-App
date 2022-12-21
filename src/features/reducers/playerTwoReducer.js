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
        return { ...state, tokens: [...state.tokens, action.payload] };
    default:
      return state;
  }
};

export default reducer;
