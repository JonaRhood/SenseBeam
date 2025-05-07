// app/pacientes/[patients]/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";

export default function PatientTabs() {
    const params = useParams();
    const { patient } = params;

    const pathname = usePathname();
    const dataOverviewTab = /^\/pacientes\/\d+\/?$/.test(pathname);
    const datachartTab = /^\/pacientes\/\d+\/datachart\/?$/.test(pathname);

    const router = useRouter();

    const handleCloseModal = () => {
        router.push('/', { scroll: false });
    }

    const handleTabSelection = (tabNumber: number) => {
        switch (tabNumber) {
            case 1:
                router.push(`/pacientes/${patient}`, { scroll: false })
                break;
            case 2:
                router.push(`/pacientes/${patient}/datachart`, { scroll: false })
                break;
        }
    }

    return (
        <div className="divTabs flex h-[30px]">
            <div
                id="dataOverviewTab"
                className={`divPatientTab w-[48%] flex justify-center items-center ${dataOverviewTab ? "" : "unselectedFirstTab"}`}
                onClick={() => handleTabSelection(1)}
            >
                <span>Sensor Data Overview</span>
            </div>
            <div
                id="dataChartTab"
                className={`divPatientTab w-[48%] flex justify-center items-center ${datachartTab ? "" : "unselectedTab"}`}
                onClick={() => handleTabSelection(2)}
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