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
          ? "bg-slate-700 w-full lg:h-12 flex lg:flex-row sm:h-auto sm:flex-col justify-center sm:justify-start items-center text-white lg:relative sm:absolute sm:z-10"
          : "absolute top-1 right-0"
      }
    >
      <div
        className={
          optionMenuState ? "flex lg:flex-row justify-around mx-auto sm:flex-col" : "hidden"
        }
      >
        <div className="relative">
          <button
            onClick={() => setdropdownOpenPlayer(!dropdownOpenPlayer)}
            className="text-white mx-10 sm:my-2 bg-orange-500 hover:bg-orange-600 rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
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

          <div className="bg-white w-32 rounded absolute lg:top-10 lg:left-8 sm:left-10 sm:top-12 flex justify-center items-center sm:z-40">
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
                    ? "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-500"
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
                    ? "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-500"
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
                    ? "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-500"
                    : "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-400"
                }
              >
                3
              </button>

              <button
                onClick={() => {
                  setPlayerAmount(4);
                  setdropdownOpenPlayer(!dropdownOpenPlayer);
                  setdropdownOpenToken(true);
                }}
                className={
                  playerAmount.players === 4
                    ? "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-500"
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
            className="text-white mx-10 sm:my-2 bg-orange-500 hover:bg-orange-600 rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
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

          <div className="bg-white w-32 rounded absolute lg:top-10 sm:top-12 left-12 sm:left-10 sm:z-20 flex justify-center items-center">
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
                    ? "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-500"
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
                    ? "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-500"
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
                    ? "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-500"
                    : "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-400"
                }
              >
                40
              </button>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <button
            onClick={() => setdropdownOpenToken(!dropdownOpenToken)}
            className="text-white mx-10 sm:my-2 bg-orange-500 hover:bg-orange-600 rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
            disabled={playerAmount.players === 4}
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
              {playerAmount.players === 1 && (
                <button
                  onClick={() => {
                    setdropdownOpenToken(!dropdownOpenToken);
                    allowTokens(!playerOne.tokenState, "player One");
                  }}
                  className={
                    playerOne.tokenState
                      ? "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-500"
                      : "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-400"
                  }
                >
                  Player One
                </button>
              )}

              {playerAmount.players === 2 && (
                <>
                  <button
                    onClick={() => {
                      setdropdownOpenToken(!dropdownOpenToken);
                      allowTokens(!playerOne.tokenState, "player One");
                    }}
                    className={
                      playerOne.tokenState
                        ? "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-500"
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
                        ? "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-500"
                        : "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-400"
                    }
                  >
                    Player Two
                  </button>
                </>
              )}

              {playerAmount.players === 3 && (
                <>
                  <button
                    onClick={() => {
                      setdropdownOpenToken(!dropdownOpenToken);
                      allowTokens(!playerOne.tokenState, "player One");
                    }}
                    className={
                      playerOne.tokenState
                        ? "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-500"
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
                        ? "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-500"
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
                        ? "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-500"
                        : "w-full text-sm hover:bg-orange-600 text-white py-2 text-center bg-slate-400"
                    }
                  >
                    Player Three
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        <button
          className="px-4 py-2 bg-orange-500 rounded mx-4 sm:my-2 sm:ml-10 hover:bg-orange-600"
          onClick={() => {
            resetState();
            setLifePointsOption(20);
          }}
        >
          Reset
        </button>
      </div>

      <button
        onClick={() => setOptionMenuState(!optionMenuState)}
        className={
          optionMenuState
            ? "bg-slate-700 rounded border-2 border-slate-200 mr-4 p-2 hover:bg-slate-500 sm:my-2"
            : "bg-orange-500 rounded  border-2 border-slate-100 mr-4 p-2 text-white hover:bg-orange-600 sm:my-2"
        }
      >
        Menu
      </button>
    </nav>
  );
};

export default NavBar;
