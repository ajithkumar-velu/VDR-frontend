import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    messages: [],
    myDealContact: null,
    myDealMessages: null
}
const messageSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        setMessages: (state, action)=>{
            state.messages = action.payload
        },
        setMyDealContact: (state, action)=>{
            state.myDealContact= action.payload
        },
        setMyDealMessages: (state, action) =>{
            state.myDealMessages = action.payload
        }
    }
})
export const { setMessages, setMyDealContact, setMyDealMessages } = messageSlice.actions
export default messageSlice.reducer 