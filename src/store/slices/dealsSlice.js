import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    deals: [],
    mydeals: [],
    negotiates: null
}

const dealsSlice = createSlice({
    name: 'deals',
    initialState,
    reducers: {
        setDeals: (state, action)=>{
            state.deals = action.payload
        },
        setMyDeals: (state, action)=>{
            state.mydeals = action.payload
        },
        setNegotiates: (state, action)=>{
            state.negotiates = action.payload
        },
    }
})

export const { setDeals, setMyDeals, setNegotiates } = dealsSlice.actions
export default dealsSlice.reducer