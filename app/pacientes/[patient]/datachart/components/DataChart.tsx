"use client"

import { useAppSelector } from "@/store/hooks"
import { RootState } from "@/store/store"
import HeartRateChart from "./HeartRateChart"
import '@/chartjs-setup'
import { useEffect, useState } from "react";

export default function DataChart() {
    const selectedPatientTelemetry = useAppSelector((state: RootState) => state.patient.selectedPatientTelemetry);

    return (
        <section className="flex flex-col justify-between w-full">
            <h2 className="text-3xl font-semibold text-gray-800 p-4 bg-[#d9efff] rounded-t-[0.6rem] text-center">
                Patient Vital Signs Chart
            </h2>
            <div>
                <div className="h-[500px]">
                    <HeartRateChart />
                </div>
            </div>

            <p className="text-sm text-gray-500 bg-[#d9efff] p-2 rounded-b-[0.6rem] flex justify-center">
                <span>Last update: {selectedPatientTelemetry?.timestamp}</span>
            </p>
        </section>
    )
}
