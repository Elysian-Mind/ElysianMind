// import { combineReducers } from "redux";
// import { userSlice } from "../features/userSlice";

// export const rootReducer = combineReducers({
//     user: userSlice.reducer,

// })
import { combineReducers } from 'redux';
import userReducer from '../features/userSlice';

 // Adjust the path based on your file structure

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
