import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HeaderState {
  bgColor: string;
}

const initialState: HeaderState = {
  bgColor: "bg-white",
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setHeaderColor: (state, action: PayloadAction<string>) => {
      state.bgColor = action.payload;
    },
  },
});

export const { setHeaderColor } = headerSlice.actions;
export default headerSlice.reducer;
