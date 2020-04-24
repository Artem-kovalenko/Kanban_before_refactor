import * as type from "../types";

const initialState = {
  lists: {},
};

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    // case  type.ADD_LIST: {
    //   const { title, id } = action.payload;
    //   const newList = {
    //     title: title,
    //     id: `list-${id}`,
    //     cards: []
    //   };

    //   const newState = { ...state, [`list-${id}`]: newList };
    //   return newState;
    // }

    case  type.ADD_LIST: {
      return {
        ...state,
        lists: {
          ...state.lists,
          [action.payload.id]: {
            id: action.payload.id,
            title: action.payload.title
          }
        }
      };
    } 

    // case  type.DELETE_LIST: {
    //   const { listID } = action.payload;
    //   const newState = state;
    //   delete newState[listID];
    //   return newState;
    // }

    case  type.DELETE_LIST: {
      return {
        ...state,
      lists: Object.values(state.lists).filter(list => list.id !== action.payload.listID).reduce((start, item) => ({
          ...start,
          [item.id]: item
        }), {})
      }
    }


    case  type.ADD_CARD: {
      const { listID, id } = action.payload;
      const list = state[listID];
      list.cards.push(`card-${id}`);
      return {...state, [listID]: list};
    }

    case  type.DELETE_CARD: {
      // this reducer is deleting card from  LISTS: in current list
      // alert("delete from LISSR")
      const { listID, id } = action.payload;
      
      const list = state[listID];
      const newCards = list.cards.filter(cardID => cardID !== id);

      return { ...state, [listID]: { ...list, cards: newCards } };
      
    }

    case  type.DRAG_HAPPENED: {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        type,
      } = action.payload;

      

      // перемещение листов  - это должно быть у listsOrder
      if (type === "list") {
        return state;
      }

      // в одном листе(если айди один и тот же)
      if (droppableIdStart === droppableIdEnd) {
        const list = state[droppableIdStart];
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
        return { ...state, [droppableIdStart]: list };
      }

      // в дургом листе
      if (droppableIdStart !== droppableIdEnd) {
        //найдем лист в котором выбрали карточку для перемещения
        const listStart = state[droppableIdStart];

        //вытащим карточку из этого листа
        const card = listStart.cards.splice(droppableIndexStart, 1);

        //найдем лист в который мы перемещаем карточку
        const listEnd = state[droppableIdEnd];

        //положем карточку в новый лист
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
        return {
          ...state,
          [droppableIdStart]: listStart,
          [droppableIdEnd]: listEnd
        };
      }

      return state;
    }

    case  type.EDIT_LIST_TITLE: {
      const { listID, newTitle } = action.payload;
      const list = state[listID];
      list.title = newTitle;
      return { ...state, [listID]: list };
    }

    
    default:
      return state;
  }
};

export default listsReducer;
