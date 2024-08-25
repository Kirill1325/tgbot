import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type languageSliceState = {
    language:  string | undefined
}

const initialState: languageSliceState = {
    language: 'ru'
}

export const LanguageSlice = createSlice({
    name: 'Language',
    initialState,
    reducers: {
        switchLanguage(state, action: PayloadAction<string | undefined>) {
            state.language = action.payload
        }
    }
})


const { actions, reducer } = LanguageSlice

export const { switchLanguage } = actions

export default reducer