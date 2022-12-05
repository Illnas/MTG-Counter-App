
const initialState = {
    fetchedTokens: [1, 2, 3],
    addedTokens: [],
    tokenState: true,
  };
  
  const reducer = (state = initialState, action) => {
    switch(action.type) {
      case "fetchedTokens":
        return { ...state, fetchedTokens: action.payload, tokenState: false};
      case "trackTokens":
        return   { ...state, addedTokens: [...state.addedTokens, action.payload], };
      default:
        return state;
    }
  };

  export default reducer;
