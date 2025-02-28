import { fileReducer } from "@/functions/Files/file";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
//@ts-ignore
import createIndexedDBStorage from "redux-persist-indexeddb-storage";
import { persistStore, persistReducer, REHYDRATE } from "redux-persist";
import { responseSlice } from "@/functions/messages/message";
const indexedDBStorage = createIndexedDBStorage("myIndexedDB", "myDataStore");
const persistConfig = {
  key: "root",
  storage: indexedDBStorage,
  whitelist: ["fileReducer"],
};

const rootReducer = combineReducers({
  fileReducer,
  responseSlice: responseSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE", REHYDRATE],
      },
    }),
});
export const persistor = persistStore(store);

export type IRootState = ReturnType<typeof store.getState>;
