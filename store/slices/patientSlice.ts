// features/gallery/gallerySlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GalleryState {
  patientId: number | undefined,
  scrollPatientsList: number,
  patientData: any,
  patientDataFullList: any,
  selectedPatient: any,
  selectedPatientTelemetry: any,
}

const initialState: GalleryState = {
  patientId: undefined,
  scrollPatientsList: 0,
  patientData: [],
  patientDataFullList: [],
  selectedPatient: [],
  selectedPatientTelemetry: [],
};

export const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    setPatientId(state, action: PayloadAction<number>) {
      state.patientId = action.payload;
    },
    setScrollPatientsList(state, action: PayloadAction<number>) {
      state.scrollPatientsList = action.payload;
    },
    setPatientData(state, action: PayloadAction<any>) {
      state.patientData = action.payload;
    },
    setPatientDataFullList(state, action: PayloadAction<any>) {
      state.patientDataFullList = action.payload;
    },
    setSelectedPatient(state, action: PayloadAction<any>) {
      state.selectedPatient = action.payload;
    },
    setSelectedPatientTelemetry(state, action: PayloadAction<any>) {
      state.selectedPatientTelemetry = action.payload;
    },
  }
});

export const {
  setPatientId, setScrollPatientsList, setPatientData, 
  setPatientDataFullList, setSelectedPatient, setSelectedPatientTelemetry
} = patientSlice.actions;
export default patientSlice.reducer;

