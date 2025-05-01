// app/pacientes/[patients]/page.tsx
"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { RootState } from "@/store/store";
import { setIsModalOpen, setIsPacientModalOpen } from "@/store/slices/modalSlice"
import { setPatientTab } from "@/store/slices/patientSlice";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Tabs() {
    const patientTab = useAppSelector((state: RootState) => state.patient.patientTab);
    const isModalOpen = useAppSelector((state: RootState) => state.modal.isModalOpen);
    const patientId = useAppSelector((state: RootState) => state.patient.patientId);
    const dispatch = useAppDispatch();
    const router = useRouter();
    const pathname = usePathname();

    console.log(patientTab, "PATIENTTAB")

    const handleCloseModal = () => {
        if (isModalOpen) {
            dispatch(setIsModalOpen(false));
            dispatch(setPatientTab(1));
            router.replace('/');
        } else {
            router.push('/');
            dispatch(setPatientTab(2));
        }
    }

    const handleTabSelection = (tabNumber: number) => {
        dispatch(setPatientTab(tabNumber));
        switch (tabNumber) {
            case 1:
                window.history.pushState(null, '', `/pacientes/${patientId}`)
                break;
            case 2:
                window.history.pushState(null, '', `/pacientes/${patientId}/datachart`)
                setIsPacientModalOpen(true);
                break;
        }
    }

    return (
        <div className="flex h-[30px]">
            <div
                className={`w-[48%] flex justify-center items-center ${patientTab === 1 ? "" : "unselectedTab"}`}
                onClick={() => handleTabSelection(1)}
            >
                Sensor Data Overview
            </div>
            <div
                className={`w-[48%] flex justify-center items-center ${patientTab === 2 ? "" : "unselectedTab"}`}
                onClick={() => handleTabSelection(2)}
            >
                Sensor Data Chart
            </div>
            <div className="w-[4%] flex justify-center items-center closeTab">
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