import { configureStore } from "@reduxjs/toolkit";

import home from "./module/home";

const reducers = {
  home,
};

const store = configureStore({
  reducer: reducers,
});

export default store;
