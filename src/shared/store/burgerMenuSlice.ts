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
    BurgerMenu: (state: BurgerState) => {
      state.isBurgerMenuOpen = !state.isBurgerMenuOpen
    },
  },
})

export const { BurgerMenu } = BurgerMenuSlice.actions

export const { reducer: burgerMenuReducer } = BurgerMenuSlice
