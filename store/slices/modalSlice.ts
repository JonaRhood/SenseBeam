// features/gallery/gallerySlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GalleryState {
  isModalOpen: boolean,
  isPacientModalOpen: boolean,
}

const initialState: GalleryState = {
  isModalOpen: false,
  isPacientModalOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setIsModalOpen(state, action: PayloadAction<boolean>) {
      state.isModalOpen = action.payload;
    },
    setIsPacientModalOpen(state, action: PayloadAction<boolean>) {
      state.isPacientModalOpen = action.payload;
    },
  }
});

export const {
  setIsModalOpen, setIsPacientModalOpen
} = modalSlice.actions;
export default modalSlice.reducer;

