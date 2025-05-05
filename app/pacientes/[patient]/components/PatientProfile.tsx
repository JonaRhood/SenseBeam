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
        <div className="divInnerPP w-full h-full flex flex-col justify-center align-middle py-8">
            <div className="divPImage flex aspect-square h-[50%] justify-center mb-2">
                <Image
                    src={`${selectedPatient.image}`}
                    width={300}
                    height={300}
                    alt={`Imagen de ${selectedPatient.firstName} ${selectedPatient.lastName}`}
                    className="patientImage object-contain aspect-square"
                    priority={true}
                    loading={"eager"}
                />
            </div>
            <div className="divPPData flex flex-col h-[35%] items-center">
                <h4 className="font-bold text-[1.5rem] whitespace-nowrap">
                        {selectedPatient.firstName} {selectedPatient.lastName}, {selectedPatient.age}
                </h4>
                <span className="text-center">
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
            <div className="divPPMessage flex h-[10%] justify-center">
                <button className="buttonPPMessage bg-blue-500 w-[200px] rounded-md text-[1.2rem] 
                text-white font-bold hover:bg-blue-400 hover:cursor-pointer">
                    Send Message
                </button>
            </div>
        </div>
    )
}