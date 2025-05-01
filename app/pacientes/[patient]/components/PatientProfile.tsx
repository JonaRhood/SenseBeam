"use client"

import { useAppSelector, useAppDispatch } from "@/store/hooks"
import { setPatientData, setPatientId } from "@/store/slices/patientSlice";
import { RootState } from "@/store/store"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { dateFormat } from "@/utils/utils";

export default function PatientProfile() {

    const { patient } = useParams()
    const [patientSelected, setPatientSelected] = useState<any>(null);

    const patientId = useAppSelector((state: RootState) => state.patient.patientId);
    const patientData = useAppSelector((state: RootState) => state.patient.patientData);
    const dispatch = useAppDispatch()


    // useEffect(() => {
    //     const searchPatient = patientData.find((p: any) => p.id === patientId)
    //     setPatientSelected(searchPatient);
    //     console.log(patientSelected)
    // }, [patientData])


    useEffect(() => {
        if (patient !== undefined) {
            dispatch(setPatientId(Number(patient)))
            fetchDataPatient(Number(patient));
        }
    }, [])

    const fetchDataPatient = async (userId: number) => {
        try {
            const response = await fetch(`https://dummyjson.com/users/${userId}`);
            const result = await response.json();

            setPatientSelected(result);
            console.log("FETCHDATA", result)

        } catch (err) {
            throw new Error("Error Fetching Patient Data");
        }
    }

    if (!patientSelected) {
        return <div>Loading patient data...</div>; // o un Skeleton loader si prefieres
    }

    return (
        <div className="w-full flex flex-col justify-center">
            <div className=" flex justify-center mb-2">
                <Image
                    src={`${patientSelected.image}`}
                    width={300}
                    height={300}
                    alt={`Imagen de ${patientSelected.firstName} ${patientSelected.lastName}`}
                />
            </div>
            <div className="flex flex-col items-center justify-center mb-6">
                <h4 className="font-bold text-[1.5rem] mb-1">
                    {patientSelected.firstName} {patientSelected.lastName}, {patientSelected.age}
                </h4>
                <span className="mb-4 text-center">
                    {patientSelected.phone}
                    <br />
                    {patientSelected.email}
                </span>
                <span>
                    {patientSelected.address.address}
                    <br />
                    {patientSelected.address.city}, {patientSelected.address.postalCode}
                </span>
            </div>
            <div className="flex justify-center">
                <button className="bg-blue-500 w-[200px] h-[50px] rounded-md text-[1.2rem] 
                text-white font-bold hover:bg-blue-400 hover:cursor-pointer">
                    Send Message
                </button>
            </div>
        </div>
    )
}