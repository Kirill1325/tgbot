import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import { ZodiacApi } from "../entities/ZodiacItem";
import LanguageSlice from "../features/SwitchLanguage/model/LanguageSlice";


const rootReducer = combineReducers({
    [ZodiacApi.reducerPath]: ZodiacApi.reducer,
    LanguageSlice
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ZodiacApi.middleware)
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>() // Export a hook that can be reused to resolve types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store