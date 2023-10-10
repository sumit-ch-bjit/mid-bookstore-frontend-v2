import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";

// import userReducer from './user/user.reducer'


const store = configureStore({
    reducer: rootReducer,
})

export default store;