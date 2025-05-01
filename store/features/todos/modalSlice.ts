// features/gallery/gallerySlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GalleryState {
  isModalOpen: boolean,
}

const initialState: GalleryState = {
  isModalOpen: false
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setIsModalOpen(state, action: PayloadAction<boolean>) {
      state.isModalOpen = action.payload;
    },
  }
});

export const {
  setIsModalOpen,
} = modalSlice.actions;
export default modalSlice.reducer;

