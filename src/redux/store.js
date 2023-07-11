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




// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);