import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RoutingState {
    dataOverviewNavigation: boolean
    dataChartNavigation: boolean
}

const initialState: RoutingState = {
    dataOverviewNavigation: false,
    dataChartNavigation: false
}

export const routingSlice = createSlice({
    name: "routing",
    initialState,
    reducers: {
        startDataChartNavigation(state, action: PayloadAction<boolean>) {
            state.dataChartNavigation = action.payload;
            state.dataOverviewNavigation = false;
        },
        startDataOverviewNavigation(state, action: PayloadAction<boolean>) {
            state.dataOverviewNavigation = action.payload;
            state.dataChartNavigation = false;
        },
    }
})

export const {
    startDataChartNavigation, startDataOverviewNavigation 
} = routingSlice.actions;
export default routingSlice.reducer;