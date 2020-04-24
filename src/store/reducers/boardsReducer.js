import * as type from "../types";

const initialState = {
  boards: {},
}

const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    // case type.ADD_LIST: {
    //   const { boardID, id } = action.payload;
    //   // const board = state.boards[boardID];
    //   const newListID = `list-${id}`;
    //   const {lists} = state.boards[boardID]
    //   debugger
    //   // const newLists = [...board.lists, newListID];

    //   // board.lists = newLists;
    //   return { ...state.boards[boardID].lists, newListID };
    // }

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

    // case type.DELETE_LIST: {
    //   const { listID, boardID } = action.payload;
    //   const board = state[boardID];
    //   const lists = board.lists;
    //   const newLists = lists.filter(id => id !== listID);
    //   board.lists = newLists;
    //   return { ...state, [boardID]: board };
    // }

    case type.ADD_BOARD: {   // DONE
      return {
          ...state,
          boards: {
            ...state.boards,
            [action.payload.id]: {
              id: action.payload.id,
              title: action.payload.title
            }
          }
        };
    }

    case type.DELETE_BOARD: {// DONE
      return {
        ...state,
        boards: Object.values(state.boards).filter(board => board.id !== action.payload.boardID).reduce((start,item) => ({
          ...start,
          [item.id]: item
        }),{})
        
      };
    }
    default:
      return state;
  }
};

export default boardsReducer;