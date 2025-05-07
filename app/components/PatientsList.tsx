// app/components/PatientsList.tsx
"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation";
import { toBase64, shimmer } from "@/utils/utils";
import SkeletonPatientList from "@/utils/skeletons";
import Patient from "../pacientes/[patient]/page";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import {
    setPatientId, setPatientData, setScrollPatientsList,
    setPatientDataFullList, setSelectedPatient, setEmptyChartHistory,
    setEmptyChartLabels
} from "@/store/slices/patientSlice";

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

export default function PatientsList() {
    const patientData = useAppSelector((state: RootState) => state.patient.patientData);
    const patientDataFullList = useAppSelector((state: RootState) => state.patient.patientDataFullList);
    const scrollPatientsList = useAppSelector((state: RootState) => state.patient.scrollPatientsList);
    const dispatch = useAppDispatch();
    const divRef = useRef<HTMLDivElement>(null);

    const router = useRouter();

    // Data Fetch Async Logic
    useEffect(() => {
        if (patientDataFullList && patientDataFullList.length > 0) return;
        const fetchPatients = async () => {
            const dataPatients = await fetch('https://dummyjson.com/users?limit=100&sortBy=id&order=asc');
            const result = await dataPatients.json();

            result.users.sort((a: Patient, b: Patient) => a.lastName.localeCompare(b.lastName));

            dispatch(setPatientData(result.users))
            dispatch(setPatientDataFullList(result.users))
        }
        fetchPatients();
    }, []);

    // Scroll State Async Logic
    useEffect(() => {
        if (divRef.current) {
            divRef.current.scrollTop = scrollPatientsList
        }
    }, [divRef])


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
        dispatch(setPatientId(patient.id))
        dispatch(setEmptyChartHistory());
        dispatch(setEmptyChartLabels());
        router.push(`/pacientes/${patient.id}`, { scroll: true })
        if (divRef.current) {
            dispatch(setScrollPatientsList(divRef.current.scrollTop));
        }
    }

    return (
        <div
            className="divtablePatients flex w-full h-full overflow-hidden overflow-y-scroll"
            ref={divRef}
        >
            <table className="w-full rounded-md h-[0px]">
                <thead className="sticky top-0 z-10 w-full">
                    <tr>
                        <th className="thPatientsList w-[12%]">Imagen</th>
                        <th className="thPatientsList w-[14%]" onClick={() => filterByType("lastName")}>Apellidos</th>
                        <th className="thPatientsList w-[14%]" onClick={() => filterByType("firstName")}>Nombre</th>
                        <th className="thPatientsList w-[10%] thAge" onClick={() => filterByType("age")}>Edad</th>
                        <th className="thPatientsList w-[12%] thBloodGroup" onClick={() => filterByType("gender")}>Gender</th>
                        <th className="thPatientsList w-[10%] thGender" onClick={() => filterByType("bloodGroup")}>ABO</th>
                        <th className="thPatientsList thEmail w-[28%]">Email</th>
                    </tr>
                </thead>
                <tbody className="">
                    {patientData
                        ?
                        patientData?.map((patient: any) => (
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
                                            className="listImage rounded-full border-[1px] border-blue-300"
                                            loading="lazy"
                                            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer())}`}
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
                        ))
                        :
                        <SkeletonPatientList />
                    }

                </tbody>
            </table>
        </div>
    );
}