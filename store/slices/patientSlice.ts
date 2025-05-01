// features/gallery/gallerySlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GalleryState {
  patientId: number | undefined,
  patientIdx: number | undefined,
  patientData: any,
  patientTab: number,
}

const initialState: GalleryState = {
  patientId: undefined,
  patientIdx: undefined,
  patientData: [],
  patientTab: 1
};

export const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    setPatientId(state, action: PayloadAction<number>) {
      state.patientId = action.payload;
    },
    setPatientIdx(state, action: PayloadAction<number>) {
      state.patientIdx = action.payload;
    },
    setPatientData(state, action: PayloadAction<any>) {
      state.patientData = action.payload;
    },
    setPatientTab(state, action: PayloadAction<number>) {
      state.patientTab = action.payload;
    }
  }
});

export const {
  setPatientId, setPatientIdx, setPatientData, setPatientTab
} = patientSlice.actions;
export default patientSlice.reducer;

