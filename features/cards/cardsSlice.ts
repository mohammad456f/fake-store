import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import cardsArray from "@/utils/cardsArray";
import { Card } from "@/typings";

export interface CardsState {
  value: Card[];
}

const initialState: CardsState = {
  value: cardsArray,
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    deleteCardById: (state, action: PayloadAction<number>) => {
      const index = state.value.findIndex((obj) => obj.id === action.payload);
      if (index !== -1) {
        state.value.splice(index, 1);
      }
    },
  },
});

export const { deleteCardById } = cardsSlice.actions;

export default cardsSlice.reducer;
