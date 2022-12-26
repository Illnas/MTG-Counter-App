import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../features/index";
import Pagination from "./Pagination";
import Counters from "./Counters";

const ShowTokens = ({ player }) => {
  const [tokenState, setTokenState] = useState(true);

  const trackedTokens = player.tokens





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

  const toggleShowTokens = () => {
    setTokenState(!tokenState);
    console.log(trackedTokens);
  };

  return (
    <>
      <button
        className="px-4 py-2 bg-orange-500 rounded mx-4 hover:bg-orange-600 text-white rounded-full"
        onClick={() => toggleShowTokens()}
      >
        Tokens: {trackedTokens.length}
      </button>
      {/* Modal */}
      <div
        className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-10"
        hidden={tokenState}
      >
        <div className="relative top-2 m-10 p-2 border bg-white">
          <div className="w-full flex justify-center">
            <h3 className="bg-orange-500 text-white text-center w-32 text-2xl mb-8 p-2 rounded-lg">
              Tokens
            </h3>
          </div>

          <div className="w-full flex justify-center">
            <div className="grid grid-cols-5 gap-8">
              {trackedTokens &&
                currentRecords.map((e) => (
                  <div key={uuidv4()}>
                    {e && (
                      <div className="relative cursor-pointer transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                        <img
                          src={e.token}
                          alt="added tokens"
                          className="w-60"
                        />

                      
                      </div>
                      
                    )}
                    <Counters tokenId={e.id} player={player}/>
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
          <div className=" flex justify-center px-4 py-3">
            <button
              id="ok-btn"
              className="px-4 py-2 bg-green-500 text-white rounded-md w-24 hover:bg-green-600"
              onClick={() => toggleShowTokens()}
            >
              Leave
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowTokens;
