import { configureStore } from "@reduxjs/toolkit";

import overview from "./module/overview";

const reducers = {
  overview,
};

const store = configureStore({
  reducer: reducers,
});

export default store;
