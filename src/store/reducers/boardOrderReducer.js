// import * as type from "../types";

// const initialState = {
//   boardOrder: {},
// };

// const boardOrderReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case type.ADD_BOARD: {      // DONE
//       return {
//         ...state,
//         boardOrder: {
//           ...state.boardOrder,
//           [action.payload.id]: action.payload.id,
//         },
//       };
//     }

//     case type.DELETE_BOARD: {   // DONE
//       return {
//         ...state,
//         boardOrder: Object.values(state.boardOrder)
//           .filter((boardOrder) => boardOrder !== action.payload.boardID)
//           .reduce((start, item) => ({
//               ...start,
//               [item]: item,
//             }),{}
//           ),
//       };
//     }
//     default:
//       return state;
//   }
// };

// export default boardOrderReducer;
