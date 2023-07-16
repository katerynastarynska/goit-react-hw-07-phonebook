import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import { contactsReducer } from "./ContactsSlice";
import filterReducer from "./FilterSlice";
import { contactsApi } from "./contactsAPI";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
})