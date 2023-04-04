
import { configureStore } from '@reduxjs/toolkit'
import translateSlice from '@/redux/reducers/translateSlice'

export const store = configureStore({
    reducer: {
        translate: translateSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch