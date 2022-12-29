import { combineReducers } from "redux";
import playerOneReducer from "./playerOneReducer"
import playerTwoReducer from "./playerTwoReducer"
import playerThreeReducer from "./playerThreeReducer"
import playerFourReducer from "./playerFourReducer"
import addTokensReducer from "./tokensReducer";


const reducers = combineReducers({
    playerOne: playerOneReducer,
    playerTwo: playerTwoReducer,
    playerThree: playerThreeReducer,
    playerFour: playerFourReducer,
    tokens: addTokensReducer

})

export default reducers