import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    User: null,
    isautenticated: false
}

const authSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        setCredentials: (state, action) =>{
            state.User = action.payload,
            state.isautenticated =  true
        },
        clearCredentials: (state)=>{
            state.User = null,
            state.isautenticated = false
        }
    }
})

export const { setCredentials, clearCredentials } = authSlice.actions

export default authSlice.reducer