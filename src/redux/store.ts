
import { configureStore } from '@reduxjs/toolkit'
import translateSlice from '@/redux/reducers/translateSlice'
import chatSlice from "@/redux/reducers/chatSlice";

export const store = configureStore({
    reducer: {
        chat: chatSlice,
        translate: translateSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch