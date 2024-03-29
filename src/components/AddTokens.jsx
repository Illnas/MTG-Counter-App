import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../features/index";
import Pagination from "./Pagination";

const AddTokens = ({player}) => {
  /* State */
  const [addTokenState, setAddTokenState] = useState(true);

  /* Redux */
  const tokens = useSelector((state) => state.tokens.fetchedTokens);
  const addedTokens = player.tokens.map(e => e.token)
  const tokenState = useSelector((state) => state.tokens.tokenState);
  const dispatch = useDispatch();
  const { trackTokens } = bindActionCreators(actionCreators, dispatch);

  /* Count Logic */
  const count = {};
  for (const element of addedTokens) {
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  }

  /*  Pagination Logic */
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


    /* Toggle Logic */
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
        <div className="relative top-4 my-12 mx-20 p-2 border bg-white">
          <div className="w-full flex justify-center">
            <h3 className="bg-orange-500 text-white text-center w-32 text-2xl mb-8 p-2 rounded-lg">
              Tokens
            </h3>
            <button
              id="ok-btn"
              className="px-4 bg-green-500 text-white mb-8 ml-4 rounded-md hover:bg-green-600"
              onClick={() => toggleAddTokens()}
            >
              X
            </button>
          </div>

          <div className="w-full flex justify-center">
            <div className="grid grid-cols-5 gap-8">
              {!tokenState &&
                currentRecords.map((e) => (
                  <div key={uuidv4()} className="">
                    {e.image_uris && (
                      <div className="relative cursor-pointer transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                        <img
                          onClick={() => trackTokens(player.name, e.image_uris.normal, uuidv4())}
                          src={e.image_uris.normal}
                          alt="tokens"
                          className="w-60"
                        />
                        {count[e.image_uris.normal] && (
                          <div className="absolute right-4 top-4 z-10 bg-orange-500 px-2 py-1 rounded-full text-white">{count[e.image_uris.normal]}x</div>
                        )}
                        
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>

          <div className="w-auto flex lg:justify-center xl:justify-none">
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

export default AddTokens;
