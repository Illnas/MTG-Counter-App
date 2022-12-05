import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../features/index";

const NavBar = () => {
  const [lifepointsOption, setLifePointsOption] = useState(20);

  const [dropdownOpen, setdropdownOpen] = useState(true);
  const [optionMenuState, setOptionMenuState] = useState(false);

  const dispatch = useDispatch();
  const { setLifepoints } = bindActionCreators(actionCreators, dispatch);

  return (
    <nav
      className={
        optionMenuState
          ? "bg-slate-700 w-full h-12 flex flex-row justify-center items-center text-white"
          : "absolute top-1 right-0"
      }
    >
      <div
        className={
          optionMenuState ? "flex flex-row justify-around mx-auto" : "hidden"
        }
      >
        <div className="relative">
          <button
            onClick={() => setdropdownOpen(!dropdownOpen)}
            className="text-white mx-10 bg-orange-500 hover:bg-orange-600 rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
          >
            Lifepoints: {lifepointsOption}
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

          <div className="bg-white w-32 rounded absolute top-10 left-12 flex justify-center items-center">
            <div
              className="divide-y divide-slate-100 rounded border-2 border-white w-full"
              hidden={dropdownOpen}
            >
              <button
                onClick={() => (setLifepoints(20), setLifePointsOption(20))}
                className={
                  lifepointsOption === 20
                    ? "w-full text-sm hover:bg-orange-00 text-white py-2 text-center bg-slate-500"
                    : "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-400"
                }
              >
                20
              </button>

              <button
                onClick={() => (setLifepoints(30), setLifePointsOption(30))}
                className={
                  lifepointsOption === 30
                    ? "w-full text-sm hover:bg-orange-00 text-white py-2 text-center bg-slate-500"
                    : "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-400"
                }
              >
                30
              </button>

              <button
                onClick={() => (setLifepoints(40), setLifePointsOption(40))}
                className={
                  lifepointsOption === 40
                    ? "w-full text-sm hover:bg-orange-00 text-white py-2 text-center bg-slate-500"
                    : "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-400"
                }
              >
                40
              </button>
            </div>
          </div>
        </div>

        <button className="px-4 py-2 bg-orange-500 rounded mx-4 hover:bg-orange-600">
          Timer
        </button>
        <button className="px-4 py-2 bg-orange-500 rounded mx-4 hover:bg-orange-600">
          Tokens
        </button>

        <button className="px-4 py-2 bg-orange-500 rounded mx-4 hover:bg-orange-600">
          Reset
        </button>
      </div>

      <button
        onClick={() => setOptionMenuState(!optionMenuState)}
        className={
          optionMenuState
            ? "bg-slate-700 rounded border-2 border-slate-200 mr-4 p-2 hover:bg-slate-500"
            : "bg-orange-500 rounded  border-2 border-slate-100 mr-4 p-2 text-white hover:bg-orange-600"
        }
      >
        Menu
      </button>
    </nav>
  );
};

export default NavBar;
