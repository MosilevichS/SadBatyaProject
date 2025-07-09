import { createSlice } from '@reduxjs/toolkit'

interface BurgerState {
  isBurgerMenuOpen: boolean
}

const initialState: BurgerState = {
  isBurgerMenuOpen: false,
}

const BurgerMenuSlice = createSlice({
  name: 'burgerMenu',
  initialState,
  reducers: {
    openBurgerMenu: (state: BurgerState) => {
      state.isBurgerMenuOpen = true
    },
    closeBurgerMenu: (state: BurgerState) => {
      state.isBurgerMenuOpen = false
    },
  },
})

export const { openBurgerMenu, closeBurgerMenu } = BurgerMenuSlice.actions

export const { reducer: burgerMenuReducer } = BurgerMenuSlice
