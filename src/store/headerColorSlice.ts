import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface HeaderState {
  bgColor: 'bg-white' | 'bg-blue-500' | 'bg-green-500' | 'bg-red-500'
}

const initialState: HeaderState = {
  bgColor: 'bg-white',
}

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setHeaderColor: (state, action: PayloadAction<HeaderState['bgColor']>) => {
      state.bgColor = action.payload
    },
  },
})

export const { setHeaderColor } = headerSlice.actions
export default headerSlice.reducer
