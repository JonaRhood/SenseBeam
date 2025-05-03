"use client"

import { useAppSelector } from "@/store/hooks"
import { RootState } from "@/store/store"

export default function DataOverview() {
    const selectedPatientTelemetry = useAppSelector((state: RootState) => state.patient.selectedPatientTelemetry);

    if (!selectedPatientTelemetry) {
        return <div>Loading patient data...</div>;
    }

    return (
        <section className="flex flex-col justify-between w-full">
            <h2 className="text-3xl font-semibold text-gray-800 p-4 bg-[#d9efff] rounded-t-[0.6rem] text-center">
                Patient Vital Signs
            </h2>
            <ul className="text-xl text-gray-700">
                <li className="flex justify-between px-20 py-[1.4rem]">
                    <span className="font-semibold text-gray-800">Heart Rate:</span>
                    <span>{selectedPatientTelemetry.heartRate} bpm</span>
                </li>
                <li className="flex justify-between px-20 py-[1.4rem] bg-[#d9efff]/70">
                    <span className="font-semibold text-gray-800">Oxygen Saturation:</span>{' '}
                    {selectedPatientTelemetry.oxygen} %
                </li>
                <li className="flex justify-between px-20 py-[1.4rem]">
                    <span className="font-semibold text-gray-800">Body Temperature:</span>{' '}
                    {selectedPatientTelemetry.temperature} °C
                </li>
                <li className="flex justify-between px-20 py-[1.4rem] bg-[#d9efff]/70">
                    <span className="font-semibold text-gray-800">Respiration Rate:</span>{' '}
                    {selectedPatientTelemetry.respirationRate} rpm
                </li>
                <li className="flex justify-between px-20 py-[1.4rem]">
                    <span className="font-semibold text-gray-800">Glucose Level:</span>{' '}
                    {selectedPatientTelemetry.glucose} mg/dL
                </li>
                <li className="flex justify-between px-20 py-[1.4rem] bg-[#d9efff]/70">
                    <span className="font-semibold text-gray-800">Systolic Pressure:</span>{' '}
                    {selectedPatientTelemetry.bloodPressure.systolic} mmHg
                </li>
                <li className="flex justify-between px-20 py-[1.4rem]">
                    <span className="font-semibold text-gray-800">Diastolic Pressure:</span>{' '}
                    {selectedPatientTelemetry.bloodPressure.diastolic} mmHg
                </li>
            </ul>

            <p className="text-sm text-gray-500 bg-[#d9efff] p-2 rounded-b-[0.6rem] flex justify-center">
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