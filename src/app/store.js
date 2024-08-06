// import {configureStore} from "@reduxjs/toolkit"
// import { rootReducer } from "./reducers"

// export const store = configureStore({
//     reducer: {data: rootReducer }

// })
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Adjust the path based on your file structure

export const store = configureStore({
  reducer: rootReducer,
});

