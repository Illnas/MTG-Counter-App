import React from "react";
import AddTokens from "./AddTokens";
import ShowTokens from "./ShowTokens";

const Tokens = () => {
  return (
    <div className="mt-4 flex justify-center items-center w-42 mr-2">
      <AddTokens />
      <ShowTokens />
    </div>
  );
};

export default Tokens;