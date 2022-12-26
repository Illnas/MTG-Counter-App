import axios from "axios";

/* export const depositMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "deposit",
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "withdraw",
      payload: amount,
    });
  };
}; */

export const addLifepointsPlayerOne = () => {
  return (dispatch) => {
    dispatch({
      type: "addPlayerOne",
    });
  };
};

export const subtractLifepointsPlayerOne = () => {
  return (dispatch) => {
    dispatch({
      type: "subtractPlayerOne",
    });
  };
};


export const addLifepointsPlayerTwo = () => {
  return (dispatch) => {
    dispatch({
      type: "addPlayerTwo",
    });
  };
};

export const subtractLifepointsPlayerTwo = () => {
  return (dispatch) => {
    dispatch({
      type: "subtractPlayerTwo",
    });
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

export const fetchRequest = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "fetchRequest",
    });
  };
};

/* export const trackTokens = (tokensToTrack) => {
  return (dispatch) => {
    dispatch({
      type: "trackTokens",
      payload: tokensToTrack,
    });
  };
}; */


export const trackTokens = (player, tokensToTrack, id) => {
  return (dispatch) => {
    const tokenData = {tokensToTrack, id}
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
  };
};


export const trackCounters = (player, counters, tokenId) => {
  return (dispatch) => {
    const counterData = {counters, tokenId}

    if(player === "first") {
      dispatch({
        type: "firstCounters",
        payload: counterData,
      })
    }

    if(player === "second") {
      dispatch({
        type: "firstCounters",
        payload: counterData,
      })
    }
  }
}