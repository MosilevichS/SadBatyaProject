import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './modalSlice'
import headerReducer from './headerColorSlice';

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        header: headerReducer,
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
