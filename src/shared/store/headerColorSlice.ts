import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Colors = 'bg-white' | 'bg-blue-500' | 'bg-green-500' | 'bg-red-500'

interface HeaderState {
  color: Colors
}

const initialState: HeaderState = {
  color: 'bg-white'
}

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setHeaderColor: (state, action: PayloadAction<Colors>) => {
      state.color = action.payload
    },
  },
})

export const { setHeaderColor } = headerSlice.actions
export const { reducer: headerReducer } = headerSlice
