import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Pagination from "./Pagination";
import Counters from "./Counters";
import CounterList from "./CounterList";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../features/index";

const ShowTokens = ({ player }) => {
  // State
  const [tokenState, setTokenState] = useState(true);
  const trackedTokens = player.tokens;
  // Redux
  const dispatch = useDispatch();
  const { removeTokens } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    if(player.tokens.length === 0) {
      setTokenState(true)
    }
  }, [player.tokens.length])


  //Pagination data
  // User is currently on this page
  const [currentPage, setCurrentPage] = useState(1);
  // No of Records to be displayed on each page
  const [recordsPerPage] = useState(5);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  // Records to be displayed on the current page
  const currentRecords =
    trackedTokens && trackedTokens.slice(indexOfFirstRecord, indexOfLastRecord);

  const nPages =
    trackedTokens && Math.ceil(trackedTokens.length / recordsPerPage);


    // Toggle Function
  const toggleShowTokens = () => {
    setTokenState(!tokenState);
  };

  return (
    <>
      <button
        className={`px-4 py-2 bg-orange-500 rounded mx-4 text-white rounded-full ${
          trackedTokens.length === 0
            ? "bg-orange-700"
            : "bg-orange-500 hover:bg-orange-600"
        }`}
        onClick={() => toggleShowTokens()}
        disabled={trackedTokens.length === 0 ? true : false}
      >
        Tokens: {trackedTokens.length}
      </button>
      {/* Modal */}
      <div
        className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-10"
        hidden={tokenState}
      >
        <div className="relative top-2 my-4 mx-20 p-2 border bg-white">
          <div className="w-full flex justify-center">
            <h3 className="bg-orange-500 text-white text-center w-32 text-2xl mb-8 p-2 rounded-lg">
              Tokens
            </h3>
            <button
              id="ok-btn"
              className="px-4 bg-green-500 text-white mb-8 ml-4 rounded-md hover:bg-green-600"
              onClick={() => toggleShowTokens()}
            >
              X
            </button>
          </div>

          <div className="w-full flex justify-center">
            <div className="grid grid-cols-5 gap-8">
              {trackedTokens &&
                currentRecords.map((e) => (
                  <div key={uuidv4()}>
                    {e && (
                      <div className="relative">
                        <img
                          src={e.token}
                          alt="added tokens"
                          className="w-60"
                        />
                        <button
                          onClick={() => (console.log(player), removeTokens(player.name, e.id))}
                          className="absolute rounded-md right-4 top-4 z-10 bg-orange-500 px-2 py-1 cursor-pointer transition ease-in-out delay-150 duration-300 text-white hover:-translate-y-1 hover:scale-110 hover:bg-red-700"
                        >
                          X
                        </button>
                      </div>
                    )}
                    <Counters tokenId={e.id} player={player} />

                    {e.counter.length !== 0 && (
                      <CounterList counterList={e.counter} tokenId={e.id} player={player} />
                    )}
                  </div>
                ))}

            </div>
          </div>


          <div className="w-auto flex justify-center">
            <Pagination
              nPages={nPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowTokens;
