import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "@/store/Reducers/movieReducer";
import showReducer from "@/store/Reducers/showReducer"
export const store = configureStore({
    reducer: {
        movieReducer,
        showReducer
    },
});