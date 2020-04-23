import * as type from "../types";

const initialState = {
    boardIndex: [],
}

const activeBoardReducer = (state = initialState, action) => {
    switch(action.type) {
        case type.SET_ACTIVE_BOARD: {
            return {
                ...state,
                boardIndex: action.payload
            }
        }
        default:
            return state;
    }
}

export default activeBoardReducer;