import React, { useState } from "react";

const ShowTokens = () => {
  const [tokenState, setTokenState] = useState(true);

  const toggleShowTokens = () => {
    setTokenState(!tokenState);
  };
  return (
    <>
      <button
        className="px-4 py-2 bg-orange-500 rounded mx-4 hover:bg-orange-600 text-white rounded-full"
        onClick={() => toggleShowTokens()}
      >
        Tokens: 1
      </button>
      {/* Modal */}
      <div
        className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        hidden={tokenState}
      >
        <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
          <div className="mt-3 text-center">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Tokens
            </h3>
            <div className="items-center px-4 py-3">
              <button
                id="ok-btn"
                className="px-4 py-2 bg-green-500 text-white rounded-md w-full hover:bg-green-600"
                onClick={() => toggleShowTokens()}
              >
                Leave
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowTokens;
