let initialState = {
    lifepoints: 20,
    tokens: [],
    timerState: false
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "addPlayerOne": 
            return {...initialState, lifepoints: state.lifepoints + 1};
        case "subtractPlayerOne":
            return {...initialState, lifepoints: state.lifepoints -1};
        case "setLifepoints":
            return {...initialState, lifepoints: action.payload}    
        default:
            return state
    }
};

export default reducer;