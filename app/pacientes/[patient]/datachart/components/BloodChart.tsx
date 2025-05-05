
"use client"

import { useAppSelector } from "@/store/hooks"
import { RootState } from "@/store/store"
import { Line } from "react-chartjs-2";
import '@/chartjs-setup'

export default function BloodChart({ type }: { type: string }) {
    const chartHistory = useAppSelector((state: RootState) => state.patient.chartHistory) ?? [];
    const chartLabels = useAppSelector((state: RootState) => state.patient.chartLabels) ?? [];

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animations: {
            tension: {
                duration: 0,
            },
            x: {
                duration: 0,
            },
            y: {
                duration: 0,
            },
        },
        elements: {
            line: { tension: 0 },
            point: { radius: 1.5 },
            backgroundCOlor: "#d9efff"
        },
        scales: {
            x: {
                display: true,
                grid: { color: "#d9efff" },
            },
            y: {
                display: true,
                suggestedMin: 50,
                suggestedMax: 125,
                grid: { color: "#d9efff" }
            }
        },
        plugins: {
            legend: { position: 'top' as const },
            title: { display: false },
        },
    };

    const data = {
        labels: chartLabels.slice(-20),
        datasets: [
            {
                fill: true,
                label: type === "systolic" ? "Systolic Pressure" : "Diastolic Pressure",
                data: chartHistory.map((i: any) => type === "systolic" ? i.systolic : i.diastolic).slice(-20),
                borderColor: type === "systolic"
                    ? "rgba(255, 50, 0, 0.8)"
                    : "rgba(0, 255, 50, 0.8)",
                backgroundColor: type === "systolic"
                    ? "rgba(255, 124, 123, 0.3)"
                    : "rgba(113, 255, 133, 0.3)",
                borderWidth: 2,
                cubicInterpolationMode: type === "diastolic" ? "monotone" as const : "default" as const,
            },
        ],
    }

    return <Line options={options} data={data} />
}
