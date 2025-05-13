"use client"

import { useAppSelector } from "@/store/hooks"
import { RootState } from "@/store/store"

export default function DataOverview() {
    const selectedPatientTelemetry = useAppSelector((state: RootState) => state.patient.selectedPatientTelemetry);

    const formatted = new Date(selectedPatientTelemetry?.timestamp).toLocaleString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Europe/Madrid"
    });

    return (
        <section className="sectionDataOverview flex flex-col justify-between w-full h-full
        border-2 border-blue-200 relative rounded-xl bg-blue-200/10 shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-800 p-4 bg-[#d9efff] rounded-t-[0.6rem] text-center">
                Patient Vital Signs
            </h2>
            <ul className="text-xl text-gray-700 h-full flex flex-col">
                <li className="flex justify-between h-[14.28%] items-center px-20">
                    <span className="font-semibold text-gray-800">Heart Rate:</span>
                    <span>{!selectedPatientTelemetry ? <div className="loaderOverview"></div> : <div>{selectedPatientTelemetry?.heartRate} bpm</div>}</span>
                </li>
                <li className="flex justify-between h-[14.28%] items-center px-20 bg-[#d9efff]/70">
                    <span className="font-semibold text-gray-800">Oxygen Saturation:</span>{' '}
                    {!selectedPatientTelemetry ? <div className="loaderOverview"></div> : <div>{selectedPatientTelemetry?.oxygen} %</div>}
                </li>
                <li className="flex justify-between h-[14.28%] items-center px-20">
                    <span className="font-semibold text-gray-800">Body Temperature:</span>{' '}
                    {!selectedPatientTelemetry ? <div className="loaderOverview"></div> : <div>{selectedPatientTelemetry?.temperature} °C</div>}
                </li>
                <li className="flex justify-between h-[14.28%] items-center px-20 bg-[#d9efff]/70">
                    <span className="font-semibold text-gray-800">Respiration Rate:</span>{' '}
                    {!selectedPatientTelemetry ? <div className="loaderOverview"></div> : <div>{selectedPatientTelemetry?.respirationRate} rpm</div>}
                </li>
                <li className="flex justify-between h-[14.28%] items-center px-20">
                    <span className="font-semibold text-gray-800">Glucose Level:</span>{' '}
                    {!selectedPatientTelemetry ? <div className="loaderOverview"></div> : <div>{selectedPatientTelemetry?.glucose} mg/dL</div>}
                </li>
                <li className="flex justify-between h-[14.28%] items-center px-20 bg-[#d9efff]/70">
                    <span className="font-semibold text-gray-800">Systolic Pressure:</span>{' '}
                    {!selectedPatientTelemetry ? <div className="loaderOverview"></div> : <div>{selectedPatientTelemetry?.bloodPressure.systolic} mmHg</div>}
                </li>
                <li className="flex justify-between h-[14.28%] items-center px-20">
                    <span className="font-semibold text-gray-800">Diastolic Pressure:</span>{' '}
                    {!selectedPatientTelemetry ? <div className="loaderOverview"></div> : <div>{selectedPatientTelemetry?.bloodPressure.diastolic} mmHg</div>}
                </li>
            </ul>
            <span className="text-sm text-gray-500 bg-[#d9efff] p-2 rounded-b-[0.6rem] flex justify-center">
                <span className="flex">
                    Last update: &nbsp;
                    {!selectedPatientTelemetry
                        ?
                        <div className="w-[121px] h-[15px] self-center rounded-full skelTextList"></div>
                        :
                       formatted
                    }
                </span>
            </span>
        </section>
    )
}