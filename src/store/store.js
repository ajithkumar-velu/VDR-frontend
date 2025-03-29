import { configureStore } from "@reduxjs/toolkit";
import authReduser from "./slices/authSlice"

const store = configureStore({
    reducer: {
        userInfo: authReduser
    }
})

export default store