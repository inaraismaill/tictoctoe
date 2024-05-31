import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    square: "#",
    bg: "#",
    playerCount: null,
  },
  reducers: {
    changeValue: (state, action) => {
      state.square = action.payload[0];
      state.bg = action.payload[1];
      state.playerCount = action.payload[2];      
    },
  },
});

export const { changeValue } = gameSlice.actions;

export default gameSlice.reducer;
