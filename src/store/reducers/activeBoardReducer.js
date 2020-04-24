import * as type from "../types";

const initialState = {
    boardIdx: [],
}

const activeBoardReducer = (state = initialState, action) => {
    switch(action.type) {
        case type.SET_ACTIVE_BOARD: {
            return {
                ...state,
                boardId: action.payload
            }
        }
        default:
            return state;
    }
}

export default activeBoardReducer;