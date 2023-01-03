import React from "react";
import AddTokens from "./AddTokens";
import ShowTokens from "./ShowTokens";

const Tokens = ({ player }) => {
  return (
    <>
      {player.tokenState && (
        <div className="mt-4 flex justify-center items-center w-42 mr-2 hidden lg:block">
          <AddTokens player={player} />
          <ShowTokens player={player} />
        </div>
      )}
    </>
  );
};

export default Tokens;
