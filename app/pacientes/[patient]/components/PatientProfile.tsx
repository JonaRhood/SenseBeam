"use client"

import { useAppSelector,useAppDispatch } from "@/store/hooks"
import { setPatient } from "@/store/slices/patientSlice";
import { RootState } from "@/store/store"
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function PatientProfile() {

    const { patient } = useParams()

    const patientId = useAppSelector((state: RootState) => state.patient.patientId);
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        if (patient !== undefined) {
            dispatch(setPatient(Number(patient)))
        }
    }, [])

    return (
        <div>
            PATIENT PROFILE: {patientId}
        </div>
    )
}