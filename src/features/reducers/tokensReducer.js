const initialState = {
    tokens: [1, 2, 3],
    tokenState: true,
  };
  
  const reducer = (state = initialState, action) => {
    switch(action.type) {
      case "fetchedTokens":
        return { ...state, tokens: action.payload, tokenState: false};
      default:
        return state;
    }
  };

  export default reducer;
