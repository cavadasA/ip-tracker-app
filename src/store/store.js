import { createStore } from "@reduxjs/toolkit";
import { universalReducer } from "./reducer";

export const store = createStore(
  universalReducer,
  {
    ipAddress: "",
    location: "",
    timezone: "",
    isp: "",
    lat: "",
    lng: ""
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
