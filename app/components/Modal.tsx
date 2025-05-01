// app/components/Modal.tsx

import Patient from "../pacientes/[patient]/page"
import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { setIsModalOpen } from "@/store/slices/modalSlice";
import { RootState } from "@/store/store";
import { usePathname } from "next/navigation";

export default function Modal() {
    
    const modalIsOpen = useAppSelector((state: RootState) => state.modal.isModalOpen);
    const dispatch = useAppDispatch();
    const path = usePathname();
    const isPacientesRoute = path.startsWith('/pacientes/');
    
    useEffect(() => {
        console.log(modalIsOpen)
        console.log(isPacientesRoute)
        if (modalIsOpen && !isPacientesRoute) {
            dispatch(setIsModalOpen(false));
        } else if (isPacientesRoute) {
            dispatch(setIsModalOpen(true))
        }
    }, [path])
    
    return (
        <div className={`modalPatient ${modalIsOpen ? "" : "hidden"}`}>
            <div className="h-full">
                <Patient />
            </div>
        </div>
    )
}
