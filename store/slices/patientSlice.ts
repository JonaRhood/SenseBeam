// features/gallery/gallerySlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GalleryState {
  patientId: number | undefined,
}

const initialState: GalleryState = {
  patientId: undefined
};

export const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    setPatient(state, action: PayloadAction<number>) {
      state.patientId = action.payload;
    },
  }
});

export const {
  setPatient,
} = patientSlice.actions;
export default patientSlice.reducer;

