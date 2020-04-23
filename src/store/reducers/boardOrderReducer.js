import * as type from "../types";

const initialState = [];

const boardOrderReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case type.ADD_BOARD: {
            return [...state, action.payload.id]
        }

        case type.DELETE_BOARD: {
            const { index } = action.payload;
            delete state[index];
            let newState = state.filter(board => board !== undefined)
            return newState;
        }
        default:
            return state;
    }
}

export default boardOrderReducer;