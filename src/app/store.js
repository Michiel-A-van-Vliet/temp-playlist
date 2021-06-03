import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import playlistReducer from "../features/playlist/playlistSlice";
// import { reducer as formReducer } from "redux-form";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    playlist: playlistReducer,
    // form: formReducer,
  },
});
