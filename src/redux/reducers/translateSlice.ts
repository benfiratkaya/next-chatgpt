import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/redux/store'

interface TranslateState {
    isLoading: boolean
    search: string
    sourceLang: string
    sourceText: string
    targetLang: string
    targetText: string
}

const initialState: TranslateState = {
    isLoading: false,
    search: '',
    sourceLang: 'auto',
    sourceText: '',
    targetLang: 'en',
    targetText: ''
}

export const translateSlice = createSlice({
    name: 'translate',
    initialState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
        setSourceLang: (state, action: PayloadAction<string>) => {
            state.sourceLang = action.payload
        },
        setSourceText: (state, action: PayloadAction<string>) => {
            state.sourceText = action.payload
        },
        setTargetLang: (state, action: PayloadAction<string>) => {
            state.targetLang = action.payload
        },
        setTargetText: (state, action: PayloadAction<string>) => {
            state.targetText = action.payload
        },
        switchLang: (state) => {
            const newSourceLang = state.targetLang
            const newTargetLang = state.sourceLang
            state.sourceLang = newSourceLang
            state.targetLang = newTargetLang
        },
    },
})

export const {
    setIsLoading,
    setSearch,
    setSourceLang,
    setSourceText,
    setTargetLang,
    setTargetText,
    switchLang
} = translateSlice.actions

export const selectIsLoading = (state: RootState) => state.translate.isLoading
export const selectSearch = (state: RootState) => state.translate.search
export const selectSourceLang = (state: RootState) => state.translate.sourceLang
export const selectSourceText = (state: RootState) => state.translate.sourceText
export const selectTargetLang = (state: RootState) => state.translate.targetLang
export const selectTargetText = (state: RootState) => state.translate.targetText
export default translateSlice.reducer