// import * as type from "../types";
import { ADD_LIST, DRAG_HAPPENED, EDIT_LIST_TITLE, DELETE_LIST} from "../types"
import { v4 as uuidv4 } from 'uuid';

export const addList = (title) => {
  const id = uuidv4();
  return (dispatch, getState) => {
    const boardID = getState().activeBoard.boardId;
    // const boardID = activeBoard.boardId
    console.log(boardID)
    dispatch({
      type: ADD_LIST,
      payload: { title, boardID, id },
    });
  };
};

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type
) => {
  return (dispatch, getState) => {
    const boardID = getState().activeBoard.boardId;
    dispatch({
      type: DRAG_HAPPENED,
      payload: {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        draggableId,
        type,
        boardID,
      },
    });
  };
};

export const editTitle = (listID, newTitle) => {
  return {
    type: EDIT_LIST_TITLE,
    payload: {
      listID,
      newTitle,
    },
  };
};

export const deleteList = (listID) => {
  return (dispatch, getState) => {
    const boardID = getState().activeBoard.boardId;
    return dispatch({
      type: DELETE_LIST,
      payload:{ listID, boardID }
    });
  };
};
