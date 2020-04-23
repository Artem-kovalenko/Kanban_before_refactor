import * as type from "../types";

const initialState = {};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {

    case type.ADD_CARD: {
        const { newCard, id } = action.payload;
        return { ...state, [`card-${id}`]: newCard };
    }

    case type.EDIT_CARD: {
        const{ id, cardText, editedTime, cardDescriptionText } = action.payload;
        const card = state[id];
        card.text = cardText;
        card.editedTime = editedTime;
        card.cardDescriptionText = cardDescriptionText;
        return{ ...state, [`card-${id}`]:card}
    }

    case type.DELETE_CARD: {
      // this reducer is deleting cards from CARDS:
      // alert("delete from CARDSREDUCER")
        const { id } = action.payload;
        const newState = state;
        delete newState[id];
        console.log(newState)
        return newState;
        // return state;
    }
    default:
      return state;
  }
};

export default cardsReducer;