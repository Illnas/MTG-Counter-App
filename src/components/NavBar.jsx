import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../features/index";

const NavBar = () => {
  const [lifepointsOption, setLifePointsOption] = useState(20);

  const [dropdownOpenLifepoints, setdropdownOpenLifepoints] = useState(true);
  const [dropdownOpenToken, setdropdownOpenToken] = useState(true);
  const [dropdownOpenPlayer, setdropdownOpenPlayer] = useState(true);
  const [optionMenuState, setOptionMenuState] = useState(false);

  const playerAmount = useSelector((state) => state.playerAmount);
  const playerOne = useSelector((state) => state.playerOne);
  const playerTwo = useSelector((state) => state.playerTwo);
  const playerThree = useSelector((state) => state.playerThree);
  const playerFour = useSelector((state) => state.playerFour);

  const dispatch = useDispatch();
  const { allowTokens, resetState, setPlayerAmount, setLifepoints } =
    bindActionCreators(actionCreators, dispatch);

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
            onClick={() => setdropdownOpenPlayer(!dropdownOpenPlayer)}
            className="text-white mx-10 bg-orange-500 hover:bg-orange-600 rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
          >
            Players: {playerAmount.players}
            {dropdownOpenPlayer ? (
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
              hidden={dropdownOpenPlayer}
            >
              <button
                onClick={() => {
                  setPlayerAmount(1);
                  setdropdownOpenPlayer(!dropdownOpenPlayer);
                }}
                className={
                  playerAmount.players === 1
                    ? "w-full text-sm hover:bg-orange-00 text-white py-2 text-center bg-slate-500"
                    : "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-400"
                }
              >
                1
              </button>

              <button
                onClick={() => {
                  setPlayerAmount(2);
                  setdropdownOpenPlayer(!dropdownOpenPlayer);
                }}
                className={
                  playerAmount.players === 2
                    ? "w-full text-sm hover:bg-orange-00 text-white py-2 text-center bg-slate-500"
                    : "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-400"
                }
              >
                2
              </button>

              <button
                onClick={() => {
                  setPlayerAmount(3);
                  setdropdownOpenPlayer(!dropdownOpenPlayer);
                }}
                className={
                  playerAmount.players === 3
                    ? "w-full text-sm hover:bg-orange-00 text-white py-2 text-center bg-slate-500"
                    : "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-400"
                }
              >
                3
              </button>

              <button
                onClick={() => {
                  setPlayerAmount(4);
                  setdropdownOpenPlayer(!dropdownOpenPlayer);
                }}
                className={
                  playerAmount.players === 4
                    ? "w-full text-sm hover:bg-orange-00 text-white py-2 text-center bg-slate-500"
                    : "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-400"
                }
              >
                4
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => setdropdownOpenLifepoints(!dropdownOpenLifepoints)}
            className="text-white mx-10 bg-orange-500 hover:bg-orange-600 rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
          >
            Lifepoints: {lifepointsOption}
            {dropdownOpenLifepoints ? (
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
              hidden={dropdownOpenLifepoints}
            >
              <button
                onClick={() => {
                  setLifepoints(20);
                  setLifePointsOption(20);
                  setdropdownOpenLifepoints(!dropdownOpenLifepoints);
                }}
                className={
                  lifepointsOption === 20
                    ? "w-full text-sm hover:bg-orange-00 text-white py-2 text-center bg-slate-500"
                    : "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-400"
                }
              >
                20
              </button>

              <button
                onClick={() => {
                  setLifepoints(30);
                  setLifePointsOption(30);
                  setdropdownOpenLifepoints(!dropdownOpenLifepoints);
                }}
                className={
                  lifepointsOption === 30
                    ? "w-full text-sm hover:bg-orange-00 text-white py-2 text-center bg-slate-500"
                    : "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-400"
                }
              >
                30
              </button>

              <button
                onClick={() => {
                  setLifepoints(40);
                  setLifePointsOption(40);
                  setdropdownOpenLifepoints(!dropdownOpenLifepoints);
                }}
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

        <div className="relative">
          <button
            onClick={() => setdropdownOpenToken(!dropdownOpenToken)}
            className="text-white mx-10 bg-orange-500 hover:bg-orange-600 rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
          >
            Tokens
            {dropdownOpenToken ? (
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

          <div className="bg-white w-32 rounded absolute top-10 left-6 flex justify-center items-center">
            <div
              className="divide-y divide-slate-100 rounded border-2 border-white w-full"
              hidden={dropdownOpenToken}
            >
              <button
                onClick={() => {
                  setdropdownOpenToken(!dropdownOpenToken);
                  allowTokens(!playerOne.tokenState, "player One");
                }}
                className={
                  playerOne.tokenState
                    ? "w-full text-sm hover:bg-orange-00 text-white py-2 text-center bg-slate-500"
                    : "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-400"
                }
              >
                Player One
              </button>

              <button
                onClick={() => {
                  setdropdownOpenToken(!dropdownOpenToken);
                  allowTokens(!playerTwo.tokenState, "player Two");
                }}
                className={
                  playerTwo.tokenState
                    ? "w-full text-sm hover:bg-orange-00 text-white py-2 text-center bg-slate-500"
                    : "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-400"
                }
              >
                Player Two
              </button>

              <button
                onClick={() => {
                  setdropdownOpenToken(!dropdownOpenToken);
                  allowTokens(!playerThree.tokenState, "player Three");
                }}
                className={
                  playerThree.tokenState
                    ? "w-full text-sm hover:bg-orange-00 text-white py-2 text-center bg-slate-500"
                    : "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-400"
                }
              >
                Player Three
              </button>

              <button
                onClick={() => {
                  setdropdownOpenToken(!dropdownOpenToken);
                  allowTokens(!playerFour.tokenState, "player Four");
                }}
                className={
                  playerFour.tokenState
                    ? "w-full text-sm hover:bg-orange-00 text-white py-2 text-center bg-slate-500"
                    : "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-400"
                }
              >
                Player Four
              </button>
            </div>
          </div>
        </div>

        <button
          className="px-4 py-2 bg-orange-500 rounded mx-4 hover:bg-orange-600"
          onClick={() => {resetState(); setLifePointsOption(20)}}
        >
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
