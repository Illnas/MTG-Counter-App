const initialState = {
  name: "second",
  lifepoints: 20,
  tokens: [],
  tokenState: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "addPlayerTwo":
      return { ...state, lifepoints: state.lifepoints + 1 };
    case "subtractPlayerTwo":
      return { ...state, lifepoints: state.lifepoints - 1 };
    case "setLifepoints":
      return { ...state, lifepoints: action.payload };
    case "secondAddTokens":
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
    case "secondCounters":
      let newState = { ...state };
      let filtered = newState.tokens.filter(
        (e) => e.id === action.payload.tokenId
      );
      let arr = filtered.map((e) => e.counter.push(action.payload.counters));
      return {
        ...state,
      };

      case "removeSecondTokens":
        return {
          ...state,
          tokens: [...state.tokens].filter((token) => !token.id.includes(action.payload))
       };

       case "removeSecondCounters":
        let removedCountersState = { ...state };
        let removedCounterFilter = removedCountersState.tokens.filter(
          (e) => e.id === action.payload.tokenId
        )
        const index = removedCounterFilter.map(e => e.counter.indexOf(action.payload.counter))
        if (index > -1) { // only splice array when item is found
          removedCounterFilter.map(e => e.counter.splice(index, 1)); // 2nd parameter means remove one item only
        }
        return {
          ...state
        };

    case "allowTokensSecond":
      return { ...state, tokenState: action.payload };
      case "reset":
        return initialState  
    default:
      return state;
  }
};

export default reducer;
