import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux"
import { actionCreators } from '../features/index';
import Pagination from "./Pagination";

const AddTokens = () => {
  const [addTokenState, setAddTokenState] = useState(true);

  const tokens = useSelector((state) => state.tokens.fetchedTokens);
  const tokenState = useSelector((state) => state.tokens.tokenState);
  const dispatch = useDispatch();
  const { trackTokens } = bindActionCreators(actionCreators, dispatch)



  //Pagination data
  // User is currently on this page
  const [currentPage, setCurrentPage] = useState(1);
  // No of Records to be displayed on each page
  const [recordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  // Records to be displayed on the current page
  const currentRecords =
    !tokenState &&
    tokens.data
      .filter((e) => e.image_uris !== undefined)
      .slice(indexOfFirstRecord, indexOfLastRecord);

  const nPages =
    !tokenState &&
    Math.ceil(
      tokens.data.filter((e) => e.image_uris !== undefined).length /
        recordsPerPage
    );

  const toggleAddTokens = () => {
    setAddTokenState(!addTokenState);
  };

  return (
    <>
      <button
        className="px-4 py-2 bg-orange-500 rounded mx-4 hover:bg-orange-600 text-white rounded-full"
        onClick={() => toggleAddTokens()}
      >
        Add Tokens
      </button>

      {/* Modal */}
      <div
        className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto"
        hidden={addTokenState}
      >
        <div className="relative top-2 m-10 p-2 border bg-white">
          <div className="w-full flex justify-center">
            <h3 className="bg-orange-500 text-white text-center w-32 text-2xl mb-8 p-2 rounded-lg">
              Tokens
            </h3>
          </div>

          <div className="w-full flex justify-center">
            <div className="grid grid-cols-5 gap-8">
              {!tokenState &&
                currentRecords.map((e) => (
                  <div key={uuidv4()}>
                    {e.image_uris && (
                      <img
                        onClick={() => trackTokens(e.image_uris.normal)}
                        src={e.image_uris.normal}
                        alt="tokens"
                        className="w-60"
                      />
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
          <div className=" flex justify-center px-4 py-3">
            <button
              id="ok-btn"
              className="px-4 py-2 bg-green-500 text-white rounded-md w-24 hover:bg-green-600"
              onClick={() => toggleAddTokens()}
            >
              Leave
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTokens;
