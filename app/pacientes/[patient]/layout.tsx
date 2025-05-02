"use client"

import DataOverviewTabs from "./components/PatientTabs"
import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import { setSelectedPatientTelemetry } from "@/store/slices/patientSlice";
import { useParams } from "next/navigation";

type LayoutProps = {
  children: React.ReactNode;
};

export default function PatientLayout({ children }: LayoutProps) {
  const dispatch = useAppDispatch();

  const params = useParams();
  const { patient } = params;

  useEffect(() => {
    const ws = new WebSocket(`wss://sensebeam.azurewebsites.net/ws`)
    ws.onmessage = event => {
      dispatch(setSelectedPatientTelemetry(JSON.parse(event.data).find((data: any) => data.id == Number(patient))));
    }
    return () => ws.close()
  }, [])

  return (
    <div className="flex flex-col h-full">
      <div className="">
        <DataOverviewTabs />
      </div>
      <div className="flex flex-col h-full">
        {children}
      </div>
    </div>
  )
}