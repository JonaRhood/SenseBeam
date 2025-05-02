
"use client"

import { useAppSelector } from "@/store/hooks"
import { RootState } from "@/store/store"
import { Line } from "react-chartjs-2";
import '@/chartjs-setup'
import { useEffect, useState } from "react";

export default function HeartRateChart() {
    const selectedPatientTelemetry = useAppSelector((state: RootState) => state.patient.selectedPatientTelemetry);

    const [glucoseHistory, setGlucoseHistory] = useState<number[]>([]);
    const [labels, setLabels] = useState<string[]>([]);

    useEffect(() => {
        if (selectedPatientTelemetry) {
            setGlucoseHistory(prev => [...prev, selectedPatientTelemetry.heartRate]);
            const time = new Date(selectedPatientTelemetry.timestamp);
            const formattedTime = time.toLocaleTimeString(); // Esto devolverá "HH:mm:ss"
            setLabels(prev => [...prev, formattedTime]);
        }
    }, [selectedPatientTelemetry]);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animations: {            // ← more granular control
            tension: {
                duration: 0,         // disable line-tension animation
            },
            x: {
                duration: 0,         // disable x-axis transition
            },
            y: {
                duration: 0,         // disable y-axis transition
            },
        },
        elements: {
            line: { tension: 0 },
            point: { radius: 0 },
            backgroundCOlor: "#d9efff"
        },
        scales: {
            x: {
                display: true,
                grid: { color: "#d9efff" }
            },
            y: {
                display: true,
                suggestedMin: 40,
                suggestedMax: 120,
                grid: { color: "#d9efff" }
            }
        },
        plugins: {
            legend: { position: 'top' as const },
            title: { display: false },
        },
    };

    const data = {
        labels: labels.slice(-60),
        datasets: [
            {
                fill: true,
                label: 'Heart Rate',
                data: glucoseHistory.slice(-60),
                borderColor: '#ff231d',
                backgroundColor: '#ff7c7b',
                // borderDash: [3],
                borderWidth: 2,
                cubicInterpolationMode: "monotone" as const,
            },
        ],
    }

    return <Line options={options} data={data} />
}
