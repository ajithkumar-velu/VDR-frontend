import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import authReduser from "./slices/authSlice"
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import dealsReducer from "./slices/dealsSlice"

const persistConfig = {
    key: "auth",
    storage,
};
const persistedAuthReducer = persistReducer(persistConfig, authReduser);
const store = configureStore({
    reducer: {
        userInfo: persistedAuthReducer,
        deals: dealsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false, //redux-persist
        }),
})
export const persistor = persistStore(store);
export default store