// features/gallery/gallerySlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PatientState {
  patientId: number | undefined,
  scrollPatientsList: number,
  patientData: any,
  patientDataFullList: any,
  searchPatient: string,
  selectedPatient: any,
  selectedPatientTelemetry: any,
  chartHistory: any,
  chartLabels: string[],
}

const initialState: PatientState = {
  patientId: undefined,
  scrollPatientsList: 0,
  patientData: [],
  patientDataFullList: [],
  searchPatient: "undefined",
  selectedPatient: [],
  selectedPatientTelemetry: [],
  chartHistory: [],
  chartLabels: [],
};

export const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    setPatientId(state, action: PayloadAction<number | undefined>) {
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
    setSearchPatient(state, action: PayloadAction<string>) {
      state.searchPatient = action.payload;
    },
    setSelectedPatient(state, action: PayloadAction<any>) {
      state.selectedPatient = action.payload;
    },
    setSelectedPatientTelemetry(state, action: PayloadAction<any>) {
      state.selectedPatientTelemetry = action.payload;
    },
    setChartHistory(state, action: PayloadAction<any>) {
      if (!state.chartHistory) state.chartHistory = [];
      state.chartHistory.push(action.payload);
      if (state.chartHistory.length > 20) {
        state.chartHistory.shift();
      }
    },
    setChartLabels(state, action: PayloadAction<string>) {
      if (!state.chartLabels) state.chartLabels = [];
      state.chartLabels.push(action.payload);
      if (state.chartLabels.length > 20) {
        state.chartLabels.shift();
      }
    },
    setEmptyChartHistory(state) {
      state.chartHistory = [];
      state.chartLabels = [];
    },

  }
});

export const {
  setPatientId, setScrollPatientsList, setPatientData,
  setPatientDataFullList, setSearchPatient, setSelectedPatient,
  setSelectedPatientTelemetry, setChartHistory, setEmptyChartHistory,
  setChartLabels
} = patientSlice.actions;
export default patientSlice.reducer;

