"use client"

import DataOverviewTabs from "./components/PatientTabs"
import PatientProfile from "./components/PatientProfile";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { RootState } from "@/store/store";
import { useParams } from "next/navigation";
import {
  setSelectedPatientTelemetry, setChartHistory,
  setChartLabels
} from "@/store/slices/patientSlice";
import DataOverviewSkeleton from "@/utils/skeletons/DataOverviewSkeleton";
import DataChartSkeleton from "@/utils/skeletons/DataChartSkeleton";

type LayoutProps = {
  children: React.ReactNode;
};

export default function PatientLayout({ children }: LayoutProps) {
  const selectedPatientTelemetry = useAppSelector((state: RootState) => state.patient.selectedPatientTelemetry);
  const dataOverviewNavigation = useAppSelector((state: RootState) => state.routing.dataOverviewNavigation);
  const dataChartNavigation = useAppSelector((state: RootState) => state.routing.dataChartNavigation);
  const dispatch = useAppDispatch();

  const params = useParams();
  const { patient } = params;
  const patientId = Number(patient)

  useEffect(() => {
    const ws = new WebSocket(`wss://sensebeam.azurewebsites.net/ws`)
    ws.onmessage = event => {
      const data = JSON.parse(event.data)
      const user = data.find((data: any) => data.id == patientId);

      dispatch(setSelectedPatientTelemetry(user));
    }
    return () => ws.close()
  }, [])

  useEffect(() => {
    if (selectedPatientTelemetry) {
      const newBP = selectedPatientTelemetry.bloodPressure;
      const time = new Date(selectedPatientTelemetry.timestamp);
      const formattedTime = time.toLocaleTimeString();

      dispatch(setChartHistory(newBP));
      dispatch(setChartLabels(formattedTime));
    }
  }, [selectedPatientTelemetry]);

  return (
    <div className="flex flex-col h-full">
      <div>
        <DataOverviewTabs />
      </div>
      <div className="divChildrenSensors flex flex-col h-full">
        <div className='divPatientPage flex p-10 gap-10 h-full'>
          <div className='divPatientProfile flex w-[30%]'>
            <PatientProfile />
          </div>
          <div className='divPOverview flex w-[70%] h-full relative'>
            {children}
              {dataOverviewNavigation ? <DataOverviewSkeleton /> : ""}
              {dataChartNavigation ? <DataChartSkeleton /> : ""}
          </div>
        </div>
      </div>
    </div>
  )
}