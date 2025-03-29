import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    deals: [],
    mydeals: [],
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

    }
})

export const { setDeals, setMyDeals } = dealsSlice.actions
export default dealsSlice.reducer