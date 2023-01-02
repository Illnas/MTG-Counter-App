import axios from "axios";

export const setPlayerAmount = (playerAmount) => {
  return (dispatch) => {
    dispatch({
      type: "setPlayers",
      payload: playerAmount,
    });
  };
};

export const addLifepoints = (player) => {
  return (dispatch) => {
    if (player === "first") {
      dispatch({
        type: "addPlayerOne",
      });
    }

    if (player === "second") {
      dispatch({
        type: "addPlayerTwo",
      });
    }

    if (player === "third") {
      dispatch({
        type: "addPlayerThird",
      });
    }

    if (player === "fourth") {
      dispatch({
        type: "addPlayerFourth",
      });
    }
  };
};

export const subtractLifepoints = (player) => {
  return (dispatch) => {
    if (player === "first") {
      dispatch({
        type: "subtractPlayerOne",
      });
    }

    if (player === "second") {
      dispatch({
        type: "subtractPlayerTwo",
      });
    }

    if (player === "third") {
      dispatch({
        type: "subtractPlayerThird",
      });
    }

    if (player === "fourth") {
      dispatch({
        type: "subtractPlayerFourth",
      });
    }
  };
};

export const setLifepoints = (lifepoints) => {
  return (dispatch) => {
    dispatch({
      type: "setLifepoints",
      payload: lifepoints,
    });
  };
};

export const addedTokens = (tokens) => {
  return (dispatch) => {
    dispatch({
      type: "fetchedTokens",
      payload: tokens,
    });
  };
};

export const addTokens = () => {
  return (dispatch) => {
    dispatch(fetchRequest());
    axios
      .get(
        `https://api.scryfall.com/cards/search?q=t%3Atoken&unique=cards&as=grid&order=name`
      )
      .then((response) => {
        const tokens = response.data;
        dispatch(addedTokens(tokens));
      })
      .catch((error) => {
        const errorMsg = error;
      });
  };
};

export const fetchRequest = () => {
  return (dispatch) => {
    dispatch({
      type: "fetchRequest",
    });
  };
};

export const allowTokens = (tokenState, player) => {
  return (dispatch) => {
    if (player === "player One") {
      dispatch({
        type: "allowTokensFirst",
        payload: tokenState,
      });
    }

    if (player === "player Two") {
      dispatch({
        type: "allowTokensSecond",
        payload: tokenState,
      });
    }

    if (player === "player Three") {
      dispatch({
        type: "allowTokensThird",
        payload: tokenState,
      });
    }

    if (player === "player Four") {
      dispatch({
        type: "allowTokensFourth",
        payload: tokenState,
      });
    }
  };
};

export const trackTokens = (player, tokensToTrack, id) => {
  return (dispatch) => {
    const tokenData = { tokensToTrack, id };
    if (player === "first") {
      dispatch({
        type: "firstAddTokens",
        payload: tokenData,
      });
    }

    if (player === "second") {
      dispatch({
        type: "secondAddTokens",
        payload: tokenData,
      });
    }

    if (player === "third") {
      dispatch({
        type: "thirdAddTokens",
        payload: tokenData,
      });
    }

    if (player === "fourth") {
      dispatch({
        type: "fourthAddTokens",
        payload: tokenData,
      });
    }
  };
};

export const removeTokens = (player, tokenId) => {
  return (dispatch) => {
    if (player === "first") {
      dispatch({
        type: "removeFirstTokens",
        payload: tokenId,
      });
    }

    if (player === "second") {
      dispatch({
        type: "removeSecondTokens",
        payload: tokenId,
      });
    }

    if (player === "third") {
      dispatch({
        type: "removeThirdTokens",
        payload: tokenId,
      });
    }
  };
};

export const trackCounters = (player, counters, tokenId) => {
  return (dispatch) => {
    const counterData = { counters, tokenId };

    if (player === "first") {
      dispatch({
        type: "firstCounters",
        payload: counterData,
      });
    }

    if (player === "second") {
      dispatch({
        type: "secondCounters",
        payload: counterData,
      });
    }

    if (player === "third") {
      dispatch({
        type: "thirdCounters",
        payload: counterData,
      });
    }

    if (player === "fourth") {
      dispatch({
        type: "fourthCounters",
        payload: counterData,
      });
    }
  };
};


export const removeCounters = (player, tokenId, counter) => {
  return (dispatch) => {
    const counterDatas = { counter, tokenId };

    if (player === "first") {
      dispatch({
        type: "removeFirstCounters",
        payload: counterDatas,
      });
    }

    if (player === "second") {
      dispatch({
        type: "removeSecondCounters",
        payload: counterDatas,
      });
    }

    if (player === "third") {
      dispatch({
        type: "removeThirdCounters",
        payload: counterDatas,
      });
    }
  };
};

export const resetState = () => {
  return (dispatch) => {
    dispatch({
      type: "reset",
    });
  };
};
