import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import { contactsReducer } from "./ContactsSlice";
import filterReducer from "./FilterSlice";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
})

export const store = configureStore({
  reducer: rootReducer
})
