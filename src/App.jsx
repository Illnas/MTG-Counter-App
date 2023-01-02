import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Players from "./components/Players";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./features/index";

function App() {
  const playerOne = useSelector((state) => state.playerOne);
  const playerTwo = useSelector((state) => state.playerTwo);
  const playerThree = useSelector((state) => state.playerThree);
  const playerFour = useSelector((state) => state.playerFour);
  const playerAmount = useSelector((state) => state.playerAmount);

  const dispatch = useDispatch();
  const { addTokens } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    addTokens();
  }, []);

  return (
    <div className="bg-slate-200 h-screen relative flex flex-col">
      <NavBar />
      {playerAmount.players === 1 && <Players player={playerOne} bg="flex-1 flex flex-col justify-center items-center bg-slate-900" />}

      {playerAmount.players === 2 && (
        <>
          <Players player={playerOne} bg="flex-1 flex flex-col justify-center items-center bg-slate-900" />
          <Players player={playerTwo} bg="flex-1 flex flex-col justify-center items-center bg-red-900" />
        </>
      )}

      {playerAmount.players === 3 && (
        <>
          <div className="flex-1 flex  flex-row">
            <Players player={playerOne} bg="flex-1 flex flex-col justify-center items-center bg-slate-900"/>
            <Players player={playerTwo} bg="flex-1 flex flex-col justify-center items-center bg-red-900"/>
          </div>
          <div className="flex-1 flex  flex-col">
            <Players player={playerThree} bg="flex-1 flex flex-col justify-center items-center bg-blue-900"/>
          </div>
        </>
      )}

      {playerAmount.players === 4 && (
        <>
          <div className="flex-1 flex  flex-row">
            <Players player={playerOne} rotated={playerAmount.players === 4 ? "rotate-90" : ""} bg="flex-1 flex flex-col justify-center items-center bg-slate-900"/>
            <Players player={playerTwo} rotated={playerAmount.players === 4 ? "-rotate-90" : ""} bg="flex-1 flex flex-col justify-center items-center bg-red-900"/>
          </div>

          <div className=" flex-1 flex  flex-row">
            <Players player={playerThree} rotated={playerAmount.players === 4 ? "rotate-90" : ""} bg="flex-1 flex flex-col justify-center items-center bg-blue-900" />
            <Players player={playerFour} rotated={playerAmount.players === 4 ? "-rotate-90" : ""} bg="flex-1 flex flex-col justify-center items-center bg-purple-900" />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
