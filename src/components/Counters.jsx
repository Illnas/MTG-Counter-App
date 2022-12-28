import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../features/index";

const Counters = ({tokenId, player}) => {
  const counterData = ["+1/+1", "+0/+1", "+0/+2", "+1/+0", "+1/+2", "+2/+0", "+2/+2"]
  const [dropdownOpen, setdropdownOpen] = useState(true);

  const dispatch = useDispatch();
  const { trackCounters } = bindActionCreators(actionCreators, dispatch);

  

  return (
    <div className="border border-slate-900 w-full mt-3 p-2 flex justify-center">
      <div className="relative">
        <button
          onClick={() => (setdropdownOpen(!dropdownOpen))}
          className="text-white mx-10 bg-orange-500 hover:bg-orange-600 rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
        >
          Counters
          {dropdownOpen ? (
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37 18L25 30L13 18"
                stroke="black"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 30L25 18L37 30"
                stroke="black"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>

        <div className="bg-white w-32 rounded absolute top-10 left-8 flex justify-center items-center">
          <div
            className="divide-y divide-slate-100 rounded border-2 border-white w-full"
            hidden={dropdownOpen}
          >
            {counterData.map(e => (
                <button
                key={uuidv4()}
                value={e}
                onClick={() => (trackCounters(player.name, e, tokenId))}
                className="w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-400"
              >
                {e}
              </button>
            ))}
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counters;
