import * as type from "../types";

// const initialState = {};
const initialState = {
  boards: {},
}

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
      return {
          ...state,
          boards: {
            ...state.boards,
            [action.payload.id]: {
              id: action.payload.id,
              title: action.payload.title,
              list: []
            }
          }
        };
    }


    case type.DELETE_BOARD: {
      return {
        ...state,
        boards: Object.values(state.boards).filter(board => board.id !== action.payload.boardID).reduce((start,item) => ({
          ...start,
          [item.id]: item
        }),{})
      };
      

      // const { boardID } = action.payload;
      // const newState = state;
      // delete newState[boardID];
      // console.log(newState)
      // return newState;
    }

    default:
      return state;
  }
};

export default boardsReducer;