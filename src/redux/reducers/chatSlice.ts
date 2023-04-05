import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/redux/store'

interface ChatState {
    prompt: string
    messages: ChatMessage[]
}

const initialState: ChatState = {
    messages: [],
    prompt: "",
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setPrompt: (state, action: PayloadAction<string>) => {
            state.prompt = action.payload
        },
        setMessages: (state, action: PayloadAction<ChatMessage[]>) => {
            state.messages = action.payload
        },
        addMessage: (state, action: PayloadAction<ChatMessage>) => {
            state.messages = [
                ...state.messages,
                action.payload,
            ]
        },
    },
})

export const {
    setPrompt,
    setMessages,
    addMessage,
} = chatSlice.actions

export const selectPrompt = (state: RootState) => state.chat.prompt
export const selectMessages = (state: RootState) => state.chat.messages
export default chatSlice.reducer