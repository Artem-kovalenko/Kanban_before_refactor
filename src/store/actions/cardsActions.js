import * as type from "../types"

export const addCard = (params) => {
    const { text, listID, id, createdTime } = params;
    const newCard = {
        text,
        id: `card-${id}`,
        list: listID,
        createdTime: createdTime,
        editedTime: "",
        cardDescriptionText:""
      };
    return {
        type: type.ADD_CARD,
        payload: { newCard, id, listID }
    }
};

export const editCard = (params) => ({
    type: type.EDIT_CARD,
    payload: params
});

export const deleteCard = (id, listID) => ({
    type: type.DELETE_CARD,
    payload:{ 
        id, 
        listID 
    }
});

