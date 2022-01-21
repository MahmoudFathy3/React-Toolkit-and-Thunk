import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./bookSlice/bookSlice";
import AuthSlice from "./Auth/AuthSlice";

const Store = configureStore({
  reducer: {
    bookSlice,
    AuthSlice,
  }
})

export default Store;