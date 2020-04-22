import * as type from "../types"
import { v4 as uuidv4 } from 'uuid';

export const addCard = (listID, text, createdTime) => {
    const id = uuidv4();
    return {
        type: type.ADD_CARD,
        payload: { text, listID, id, createdTime }
    };
};

export const editCard = (params) => { //проблема с появлением отредактированного текста карточки на экране (что-то с передечей параметров не так)
    return {
        type: type.EDIT_CARD,
        payload: params
    };
};

export const deleteCard = (id, listID) => {
    return {
        type: type.DELETE_CARD,
        payload:{ id, listID }
    }
}

