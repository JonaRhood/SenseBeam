"use client"

import { useAppSelector, useAppDispatch } from "@/store/hooks"
import { setSelectedPatient } from "@/store/slices/patientSlice";
import { RootState } from "@/store/store"
import { useParams } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";

export default function PatientProfile() {

    const { patient } = useParams()
    const patientId = Number(patient)

    const selectedPatient = useAppSelector((state: RootState) => state.patient.selectedPatient);
    const dispatch = useAppDispatch()

    
    useEffect(() => {
        const fetchDataPatient = async (userId: number) => {
            try {
                const response = await fetch(`https://dummyjson.com/users/${userId}`);
                const result = await response.json();
    
                dispatch(setSelectedPatient(result));
                console.log("FETCHDATA", result)
    
            } catch (err) {
                throw new Error("Error Fetching Patient Data");
            }
        }

        if (!selectedPatient) {
            fetchDataPatient(patientId)
        } 
    }, [])


    if (!selectedPatient) {
        return <div>Loading patient data...</div>;
    }

    return (
        <div className="w-full flex flex-col justify-center">
            <div className=" flex justify-center mb-2">
                <Image
                    src={`${selectedPatient.image}`}
                    width={300}
                    height={300}
                    alt={`Imagen de ${selectedPatient.firstName} ${selectedPatient.lastName}`}
                />
            </div>
            <div className="flex flex-col items-center justify-center mb-6">
                <h4 className="font-bold text-[1.5rem] mb-1">
                    {selectedPatient.firstName} {selectedPatient.lastName}, {selectedPatient.age}
                </h4>
                <span className="mb-4 text-center">
                    {selectedPatient.phone}
                    <br />
                    {selectedPatient.email}
                </span>
                <span>
                    {selectedPatient.address.address}
                    <br />
                    {selectedPatient.address.city}, {selectedPatient.address.postalCode}
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