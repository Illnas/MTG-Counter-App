import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../features/index";


const CounterList = ({ counterList, tokenId, player }) => {
  const dispatch = useDispatch();
  const { removeCounters } = bindActionCreators(actionCreators, dispatch);





  const count = {};
  for (const element of counterList) {
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  }

  return (
    <div className="w-full text-sm text-black py-2 text-center bg-slate-200 border border-slate-900">
      <h1 className="w-full text-sm p-2 border-dashed border-b-2 border-orange-600 font-semibold">
        Added Counters
      </h1>
      {counterList
        .filter(function (item, pos) {
          return counterList.indexOf(item) === pos;
        }).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
        .map((e) => (
          <div
            key={uuidv4()}
            className="w-full flex justify-between px-10 py-2"
          >
            <div className="text-sm font-semibold">{e}</div>
            <div className="text-sm font-bold text-orange-600">{count[e]}x</div>
            <button onClick={() => (removeCounters(player.name, tokenId, e), console.log(counterList))}>X</button>
          </div>
        ))}
    </div>
  );
};

export default CounterList;
