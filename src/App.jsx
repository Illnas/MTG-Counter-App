import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Players from "./components/Players";
import {  useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from './features/index';

function App() {
  const playerOne = useSelector((state)=> state.playerOne);
  const playerTwo = useSelector((state)=> state.playerTwo);

  const dispatch = useDispatch();
  const { addTokens } = bindActionCreators(actionCreators, dispatch);
  const { addLifepointsPlayerOne, subtractLifepointsPlayerOne, addLifepointsPlayerTwo, subtractLifepointsPlayerTwo} = bindActionCreators(actionCreators, dispatch)

  useEffect(() => {
    addTokens();
  }, []);

  return (
    <div className="bg-slate-200 h-screen relative flex flex-col">
        <NavBar />
        <Players player={playerOne} add={addLifepointsPlayerOne} subtract={subtractLifepointsPlayerOne} />
        <Players player={playerTwo} add={addLifepointsPlayerTwo} subtract={subtractLifepointsPlayerTwo}  />
    </div>
  );
}

export default App;
