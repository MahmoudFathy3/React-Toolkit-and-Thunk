import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./bookSlice/bookSlice";
import AuthSlice from "./Auth/AuthSlice";
import DarkMode from "./ModeSlice";

const Store = configureStore({
  reducer: {
    bookSlice,
    AuthSlice,
    DarkMode,
  }
})

export default Store;