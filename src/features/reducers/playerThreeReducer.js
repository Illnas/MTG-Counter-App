
let initialState = {
    name: "third",
    lifepoints: 20,
    tokens: [],
    tokenState: false,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "addPlayerThree":
        return { ...state, lifepoints: state.lifepoints + 1 };
      case "subtractPlayerThree":
        return { ...state, lifepoints: state.lifepoints - 1 };
      case "setLifepoints":
        return { ...state, lifepoints: action.payload };
      case "thirdAddTokens":
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
      case "thirdCounters":
        let newState = { ...state };
        let filtered = newState.tokens.filter(
          (e) => e.id === action.payload.tokenId
        );
        let arr = filtered.map((e) => e.counter.push(action.payload.counters));
        return {
          ...state,
        };
      case "allowTokensThird":
        return { ...state, tokenState: action.payload };
  
      case "reset":
        return initialState  
      default:
        return state;
    }
  };
  
  export default reducer;
  