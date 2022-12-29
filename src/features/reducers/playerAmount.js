
let initialState = {
    players: 1
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "setPlayers":
        return { players: action.payload };   
      default:
        return state;
    }
  };
  
  export default reducer;