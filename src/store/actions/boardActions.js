import * as type from "../types";
import { v4 as uuidv4 } from 'uuid';


export const setActiveBoard = (id) => ({  // DONE
  type: type.SET_ACTIVE_BOARD,
  payload: id,
});

export const addBoard = (title) => {     // DONE
  const id = uuidv4();
  return {
    type: type.ADD_BOARD,
    payload: { title, id },
  };
};

export const deleteBoard = (boardID) => ({   // DONE
  type: type.DELETE_BOARD,
  payload: {
    boardID
  }
})


