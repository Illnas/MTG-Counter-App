import React from "react";
import Tokens from "./Tokens";
import {  useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from '../features/index';

const Players = ({player}) => {

  const dispatch = useDispatch();
  const { addLifepoints, subtractLifepoints} = bindActionCreators(actionCreators, dispatch)

  return (
    <div className="flex-1 border-2 border-slate-900 flex flex-col justify-center items-center">
      <div className="flex flex-row">
        <button  onClick={()=> subtractLifepoints(player.name)} className="p-2 w-10 bg-orange-500 hover:bg-orange-600 text-white text-3xl h-16 rounded-l-full">
          -
        </button>
        <div className="flex flex-row h-16">
          <div className="bg-slate-800 text-white p-4 w-24 flex justify-center items-center text-3xl">
            <h2>{player.lifepoints}</h2>
          </div>
        </div>
        <button onClick={()=> addLifepoints(player.name)} className="p-2 w-10 bg-orange-500 hover:bg-orange-600 text-white text-3xl h-16 rounded-r-full">
          +
        </button>

      </div>
      <Tokens player={player} />
    </div>
  );
};

export default Players;
