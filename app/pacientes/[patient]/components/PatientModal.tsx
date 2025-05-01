// app/components/Modal.tsx

import DataChartTab from "../datachart/components/DataChart";
import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { setIsPacientModalOpen } from "@/store/slices/modalSlice";
import { RootState } from "@/store/store";
import { usePathname } from "next/navigation";

interface ModalProps {
    pacient: string;
}

export default function PatientModal() {
    
    const isPacientModalOpen = useAppSelector((state: RootState) => state.modal.isPacientModalOpen);
    const dispatch = useAppDispatch();
    const path = usePathname();
    const isPacientesRoute = path.includes('/datachart');
    
    useEffect(() => {
        console.log(isPacientModalOpen)
        console.log(isPacientesRoute)
        if (isPacientModalOpen && !isPacientesRoute) {
            dispatch(setIsPacientModalOpen(false));
        } else if (isPacientesRoute) {
            dispatch(setIsPacientModalOpen(true))
        }
    }, [path])
    
    return (
        <div className={`modalPatient ${isPacientModalOpen ? "" : "hidden"}`}>
            <div className="h-full">
                <DataChartTab />
            </div>
        </div>
    )
}
