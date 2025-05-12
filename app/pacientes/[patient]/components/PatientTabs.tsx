// app/pacientes/[patients]/page.tsx
"use client";

import { useRouter, usePathname, useParams } from "next/navigation";
import { useState, useEffect, useTransition } from "react";
import { useAppDispatch } from "@/store/hooks";
import { startDataChartNavigation, startDataOverviewNavigation } from "@/store/slices/routingSlice";
import Link from "next/link";

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
        if (tabNumber === selectedTab) return;

        const tabActions: Record<number, { path: string; action: () => void }> = {
            1: {
                path: `/pacientes/${patient}`,
                action: () => dispatch(startDataOverviewNavigation(true)),
            },
            2: {
                path: `/pacientes/${patient}/datachart`,
                action: () => dispatch(startDataChartNavigation(true)),
            },
        };

        const tab = tabActions[tabNumber];
        if (!tab) return;

        startTransition(() => {
            router.push(tab.path, { scroll: false });
        });
        setSelectedTab(tabNumber);
        tab.action();
    };

    return (
        <div className="divTabs flex h-[30px]">
            <div
                id="dataOverviewTab"
                className={`divPatientTab w-[48%] flex justify-center items-center ${selectedTab === 1 ? "" : "unselectedFirstTab"}`}
                onClick={() => handleTabSelection(1)}
                onMouseOver={() => router.prefetch(`/pacientes/${patient}`)}
            >
                <span>Sensor Data Overview</span>
            </div>
            <div
                id="dataChartTab"
                className={`divPatientTab w-[48%] flex justify-center items-center ${selectedTab === 2 ? "" : "unselectedTab"}`}
                onClick={() => handleTabSelection(2)}
                onMouseOver={() => router.prefetch(`/pacientes/${patient}`)}
            >
                <span>Sensor Data Chart</span>
            </div>
            <div className="divPatientTabX w-[4%]  lex justify-center items-center ">
                <Link href={"/"} className="flex closeTab h-full w-full justify-center" scroll={false}>
                    <div>
                        <div className="flex items-center w-full h-full justify-center">
                            X
                        </div>
                    </div>
                </Link>
            </div>
        </div >
    )
}