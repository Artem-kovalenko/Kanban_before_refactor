import * as type from "../types";
import { v4 as uuidv4 } from 'uuid';


export const setActiveBoard = (id) => {
  return {
    type: type.SET_ACTIVE_BOARD,
    payload: id,
  };
};

export const addBoard = (title) => {
  const id = uuidv4();
  
  return {
    type: type.ADD_BOARD,
    payload: { title, id },
  };
};
// export const addBoard = (title) => {
//   const ID = uuidv4();
//   const newBoard = {
//     id: ID,
//     title,
//     lists: []
//   }


//   return {
//     type: type.ADD_BOARD,
//     payload: { newBoard, ID },
//   };
// };

export const deleteBoard = (boardID, index) => {

  return {
    type: type.DELETE_BOARD,
    payload: {boardID, index}
  }
}


