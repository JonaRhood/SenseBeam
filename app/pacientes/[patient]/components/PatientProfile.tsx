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


    // if (!selectedPatient) {
    //     return <div>Loading patient data...</div>;
    // }

    return (
        <div className="divInnerPP w-full h-full flex flex-col justify-center align-middle py-8">
            <div className="divPImage flex justify-center mb-2">
                <div className="flex aspect-square justify-center w-56">
                    <div className="w-full aspect-square relative overflow-hidden border-3 border-blue-300 rounded-full skelTextList">
                        {selectedPatient &&
                            <Image
                                src={`${selectedPatient?.image}`}
                                fill={true}
                                alt={`Imagen de ${selectedPatient?.firstName} ${selectedPatient?.lastName}`}
                                className="object-cover bg-white"
                                priority={true}
                                loading={"eager"}
                            />
                        }
                    </div>
                </div>
            </div>
            <div className="divPPData flex flex-col h-[35%] items-center">
                <h3 className="font-bold text-[1.5rem] whitespace-nowrap">
                    {!selectedPatient
                        ?
                        <div className="divTitleSkel h-6 w-55 rounded-full skelTextList mb-3 mt-2"></div>
                        :
                        <div>
                            {selectedPatient?.firstName} {selectedPatient?.lastName}, {selectedPatient?.age}
                        </div>
                    }
                </h3>
                <span className="text-center">
                    {!selectedPatient
                        ?
                        <div className="flex flex-col items-center">
                            <div className="h-4 mb-1 w-40 rounded-full skelTextList"></div>
                            <div className="h-4 w-50 rounded-full skelTextList mb-2"></div>
                        </div>
                        :
                        <div>
                            {selectedPatient?.phone}
                            <br />
                            {selectedPatient?.email}
                        </div>
                    }
                </span>
                <span className="text-center">
                    {!selectedPatient
                        ?
                        <div className="flex flex-col items-center">
                            <div className="h-4 w-30 rounded-full skelTextList mb-1"></div>
                            <div className="h-4 w-40 rounded-full skelTextList"></div>
                        </div>
                        :
                        <div>
                            {selectedPatient?.address.address}
                            <br />
                            {selectedPatient?.address.city}, {selectedPatient?.address.postalCode}
                        </div>
                    }

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