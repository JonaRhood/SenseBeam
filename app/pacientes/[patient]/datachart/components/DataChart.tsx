"use client"

import { useAppSelector } from "@/store/hooks"
import { RootState } from "@/store/store"
import BloodChart from "./BloodChart";

export default function DataChart() {
    const selectedPatientTelemetry = useAppSelector((state: RootState) => state.patient.selectedPatientTelemetry);

    if (!selectedPatientTelemetry) {
        return <div>Loading patient data..</div>;
    }

    return (
        <section className="flex flex-col justify-between items-center w-full h-full">
            <h2 className="text-3xl w-full font-semibold text-gray-800 p-4 bg-[#d9efff] rounded-t-[0.6rem] text-center">
                Patient Vital Signs Chart
            </h2>
            <div className="flex flex-col h-full w-[98%]">
                <div className="h-[50%]">
                    <BloodChart type={"systolic"} />
                </div>
                <div className="h-[50%]">
                    <BloodChart type={"diastolic"} />
                </div>
            </div>

            <p className="text-sm text-gray-500 bg-[#d9efff] p-2 rounded-b-[0.6rem] flex justify-center w-full">
                <span>
                    Last update: {new Date(selectedPatientTelemetry?.timestamp).toLocaleString("es-ES", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        hour12: false,
                        timeZone: "Europe/Madrid"
                    })}
                </span>
            </p>
        </section>
    )
}
