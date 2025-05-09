// app/pacientes/[patients]/page.tsx
"use client";

import { useRouter, usePathname, useParams } from "next/navigation";
import { useState, useEffect, useTransition } from "react";
import { useAppDispatch } from "@/store/hooks";
import { startDataChartNavigation, startDataOverviewNavigation } from "@/store/slices/routingSlice";

export default function PatientTabs() {
    const router = useRouter();
    const params = useParams();
    const { patient } = params;

    const pathname = usePathname();
    const dataOverviewTab = pathname.endsWith(`/pacientes/${patient}`);
    const dataChartTab = pathname.endsWith(`/pacientes/${patient}/datachart`);

    const initialTab = dataOverviewTab ? 1 : dataChartTab ? 2 : 0;
    const [selectedTab, setSelectedTab] = useState<number>(initialTab);

    const [isPending, startTransition] = useTransition();

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isPending) {
            if (initialTab !== selectedTab) setSelectedTab(initialTab);
            dispatch(startDataOverviewNavigation(false));
            dispatch(startDataChartNavigation(false));
        }
    }, [initialTab, isPending])


    const handleTabSelection = (tabNumber: number) => {
        switch (tabNumber) {
            case 1:
                if (selectedTab !== 1) {
                    startTransition(() => {
                        router.push(`/pacientes/${patient}`, { scroll: false })
                    })
                    setSelectedTab(1);
                    dispatch(startDataOverviewNavigation(true));
                }
                break;
            case 2:
                if (selectedTab !== 2) {
                    startTransition(() => {
                        router.push(`/pacientes/${patient}/datachart`, { scroll: false })
                    })
                    setSelectedTab(2);
                    dispatch(startDataChartNavigation(true));
                }
                break;
        }
    }
    
    const handleCloseModal = () => {
        router.push('/', { scroll: false });
    }

    return (
        <div className="divTabs flex h-[30px]">
            <div
                id="dataOverviewTab"
                className={`divPatientTab w-[48%] flex justify-center items-center ${selectedTab === 1 ? "" : "unselectedFirstTab"}`}
                onClick={() => handleTabSelection(1)}
                onMouseDown={() => router.prefetch(`/pacientes/${patient}`)}
            >
                <span>Sensor Data Overview</span>
            </div>
            <div
                id="dataChartTab"
                className={`divPatientTab w-[48%] flex justify-center items-center ${selectedTab === 2 ? "" : "unselectedTab"}`}
                onClick={() => handleTabSelection(2)}
                onMouseDown={() => router.prefetch(`/pacientes/${patient}`)}
            >
                <span>Sensor Data Chart</span>
            </div>
            <div className="divPatientTabX w-[4%] flex justify-center items-center closeTab">
                <div
                    className="flex items-center w-full h-full justify-center"
                    onClick={() => handleCloseModal()}
                >
                    X
                </div>
            </div>
        </div>
    )
}