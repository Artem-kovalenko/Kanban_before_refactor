import * as type from "../types";

const initialState = {};

const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_LIST: {
      
      const { boardID, id } = action.payload;
      const board = state[boardID];
      const newListID = `list-${id}`;
      const newLists = [...board.lists, newListID];
      board.lists = newLists;
      return { ...state, [boardID]: board };
    }

    case type.DRAG_HAPPENED: {
      const { boardID } = action.payload;
      const board = state[boardID];
      const lists = board.lists;
      const {
        droppableIndexEnd,
        droppableIndexStart,

        type
      } = action.payload;

      // draggin lists around
      if (type === "list") {
        const pulledOutList = lists.splice(droppableIndexStart, 1);
        lists.splice(droppableIndexEnd, 0, ...pulledOutList);
        board.lists = lists;

        return { ...state, [boardID]: board };
      }
      return state;
    }

    case type.DELETE_LIST: {
      const { listID, boardID } = action.payload;
      const board = state[boardID];
      const lists = board.lists;
      const newLists = lists.filter(id => id !== listID);
      board.lists = newLists;
      return { ...state, [boardID]: board };
    }

    case type.ADD_BOARD: {
      const { title, id } = action.payload;
      const newID = `board-${id}`;
      const newBoard = {
        id: newID,
        title,
        lists: []
      }
      return { ...state, [newID]: newBoard };
    }

    case type.DELETE_BOARD: {
      const { boardID } = action.payload;
      const newState = state;
      delete newState[boardID];
      console.log(newState)
      return newState;
    }

    default:
      return state;
  }
};

export default boardsReducer;