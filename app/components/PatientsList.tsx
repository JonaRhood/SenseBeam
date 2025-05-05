// app/components/PatientsList.tsx
"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation";
import Patient from "../pacientes/[patient]/page";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { setPatientId, setPatientData, setScrollPatientsList, setPatientDataFullList, setSelectedPatient } from "@/store/slices/patientSlice";


interface PatientsListProps {
    searchText: string;
}

interface Patient {
    id: number,
    image: string,
    firstName: string,
    lastName: string,
    age: number,
    gender: string,
    bloodGroup: string;
    email: string,
}

export default function PatientsList({ searchText }: PatientsListProps) {

    const patientData = useAppSelector((state: RootState) => state.patient.patientData);
    const patientDataFullList = useAppSelector((state: RootState) => state.patient.patientDataFullList);
    const scrollPatientsList = useAppSelector((state: RootState) => state.patient.scrollPatientsList);
    const dispatch = useAppDispatch();
    const divRef = useRef<HTMLDivElement>(null);

    const router = useRouter();
    
    // Data Fetch Logic
    useEffect(() => {
        if (patientDataFullList && patientDataFullList.length > 0) return;
        const fetchPatients = async () => {
            const dataPatients = await fetch('https://dummyjson.com/users');
            const result = await dataPatients.json();
            
            result.users.sort((a: Patient, b: Patient) => a.lastName.localeCompare(b.lastName));
            
            console.log(result.users)
            dispatch(setPatientData(result.users))
            dispatch(setPatientDataFullList(result.users))
        }
        fetchPatients();
    }, []);
    
    // Scroll State Logic
    useEffect(() => {
        if (divRef.current) {
            divRef.current.scrollTop = scrollPatientsList
        }
    }, [divRef])

    useEffect(() => {
        if (searchText === "]") return;
        const inputSearch = patientDataFullList?.filter((patient: any) => {
            const fullName = `${patient.firstName} ${patient.lastName}`.toLowerCase();
            return fullName.includes(searchText.toLowerCase());
        });
        dispatch(setPatientData(inputSearch));
    }, [searchText]);


    const [filter, setFilter] = useState<string>("ASC");

    const filterByType = (type: keyof Patient) => {
        const sortedList = [...patientData].sort((a, b) => {
            const aValue = a[type];
            const bValue = b[type];

            if (typeof aValue === "number" && typeof bValue === "number") {
                return filter === "ASC" ? aValue - bValue : bValue - aValue;
            }

            return filter === "ASC"
                ? String(aValue).localeCompare(String(bValue))
                : String(bValue).localeCompare(String(aValue));
        });

        dispatch(setPatientData(sortedList));
        setFilter(filter === "ASC" ? "DESC" : "ASC");
    };

    const handlePatientClick = (patient: any) => {
        dispatch(setSelectedPatient(patient))
        if (divRef.current) {
            dispatch(setScrollPatientsList(divRef.current.scrollTop));
        }
        router.push(`/pacientes/${patient.id}`, { scroll: true })
        dispatch(setPatientId(patient.id))
    }

    if (!patientData) {
        return <div>loading</div>
    }

    return (
        <div
            className="flex w-full h-full overflow-hidden overflow-y-scroll"
            ref={divRef}
        >
            <table className="w-full rounded-md h-[0px]">
                <thead className="sticky top-0 z-10 w-full">
                    <tr>
                        <th className="thPatientsList w-[150px]">Imagen</th>
                        <th className="thPatientsList w-[180px]" onClick={() => filterByType("lastName")}>Apellidos</th>
                        <th className="thPatientsList w-[180px]" onClick={() => filterByType("firstName")}>Nombre</th>
                        <th className="thPatientsList w-[120px] thAge" onClick={() => filterByType("age")}>Edad</th>
                        <th className="thPatientsList w-[150px] thBloodGroup" onClick={() => filterByType("gender")}>Gender</th>
                        <th className="thPatientsList w-[120px] thGender" onClick={() => filterByType("bloodGroup")}>ABO</th>
                        <th className="thPatientsList thEmail">Email</th>
                    </tr>
                </thead>
                <tbody className="">
                    {patientData?.map((patient: any) => (
                        <tr
                            id={`${patient.id}`}
                            key={patient.id}
                            className="tBodyTr"
                            onClick={() => handlePatientClick(patient)}
                            onMouseOver={() => router.prefetch(`pacientes/${patient.id}`)}
                        >
                            <td className="tdPatientsList">
                                <div className="flex justify-center">
                                    <Image
                                        src={`${patient.image}`}
                                        width={70}
                                        height={70}
                                        alt={`Imagen de ${patient.firstName} ${patient.lastName} `}
                                        className="rounded-full border-[1px] border-blue-300"
                                    />
                                </div>
                            </td>
                            <td className="tdPatientsList">{patient.lastName}</td>
                            <td className="tdPatientsList">{patient.firstName}</td>
                            <td className="tdPatientsList tdAge">{patient.age}</td>
                            <td className="tdPatientsList tdGender">{patient.gender}</td>
                            <td className="tdPatientsList tdBloodGroup">{patient.bloodGroup}</td>
                            <td className="tdPatientsList tdEmail">{patient.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}