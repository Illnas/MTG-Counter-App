import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Players from "./components/Players";
import {  useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from './features/index';

function App() {
  const playerOne = useSelector((state)=> state.playerOne);
  const playerTwo = useSelector((state)=> state.playerTwo);
  const playerThree = useSelector((state)=> state.playerThree);
  const playerFour = useSelector((state)=> state.playerFour);


  const dispatch = useDispatch();
  const { addTokens } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    addTokens();
  }, []);

  return (
    <div className="bg-slate-200 h-screen relative flex flex-col">
        <NavBar />
        <Players player={playerOne}  />
        <Players player={playerTwo}  />
        <Players player={playerThree}  />
        <Players player={playerFour}  />
    </div>
  );
}

export default App;
