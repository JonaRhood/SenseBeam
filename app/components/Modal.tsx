// app/components/Modal.tsx

import Patient from "../pacientes/[patient]/page"
import { useState, useEffect } from "react";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";

interface ModalProps {
    pacient: string;
}

export default function Modal({ pacient }: ModalProps) {
    
    const modalIsOpen = useAppSelector((state: RootState) => state.modal.isModalOpen);
    
    return (
        <div className={`modalPatient ${modalIsOpen ? "" : "hidden"}`}>
            <div className="contentModalPatient">
                <Patient />
            </div>
        </div>
    )
}
