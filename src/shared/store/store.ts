import { configureStore } from '@reduxjs/toolkit'
import { modalReducer } from './modalSlice'
import { headerReducer } from './headerColorSlice'
import { burgerMenuReducer } from '@/shared/store/burgerMenuSlice'

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    header: headerReducer,
    burgerMenu: burgerMenuReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
