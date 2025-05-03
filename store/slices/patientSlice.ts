// features/gallery/gallerySlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GalleryState {
  patientId: number | undefined,
  scrollPatientsList: number,
  patientData: any,
  patientDataFullList: any,
  selectedPatient: any,
  selectedPatientTelemetry: any,
  chartHistory: any,
  chartLabels: string[],
}

const initialState: GalleryState = {
  patientId: undefined,
  scrollPatientsList: 0,
  patientData: [],
  patientDataFullList: [],
  selectedPatient: [],
  selectedPatientTelemetry: [],
  chartHistory: [],
  chartLabels: [],
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
    setChartHistory(state, action: PayloadAction<any>) {
      if (!state.chartHistory) {
        state.chartHistory = [];
      }
      state.chartHistory.push(action.payload);
    },
    
    setChartLabels(state, action: PayloadAction<string>) {
      if (!state.chartLabels) {
        state.chartLabels = [];
      }
      state.chartLabels.push(action.payload);
    },
  }
});

export const {
  setPatientId, setScrollPatientsList, setPatientData, 
  setPatientDataFullList, setSelectedPatient, setSelectedPatientTelemetry,
  setChartHistory, setChartLabels
} = patientSlice.actions;
export default patientSlice.reducer;

