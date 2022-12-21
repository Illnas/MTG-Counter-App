
const initialState = {
    fetchedTokens: [],
    addedTokens: [],
    tokenState: true,
  };
  
  const reducer = (state = initialState, action) => {
    switch(action.type) {
      case "fetchedTokens":
        return { ...state, fetchedTokens: action.payload, tokenState: false};
      default:
        return state;
    }
  };

  export default reducer;
