// app/components/PatientsList.tsx
"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation";
import { toBase64, shimmer } from "@/utils/utils";
import SkeletonPatientList from "@/utils/skeletons/SkeletonPatientList";
import Patient from "../pacientes/[patient]/page";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import {
    setPatientId, setPatientData, setScrollPatientsList,
    setSelectedPatient, setEmptyChartHistory, setEmptyChartLabels
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
    const router = useRouter();

    const patientData = useAppSelector((state: RootState) => state.patient.patientData);
    const scrollPatientsList = useAppSelector((state: RootState) => state.patient.scrollPatientsList);
    const divScrollRef = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (divScrollRef.current && patientData) {
            divScrollRef.current.scrollTop = scrollPatientsList;
        };
    }, [divScrollRef]);

    const [filter, setFilter] = useState<string>("ASC");

    const filterByType = (type: keyof Patient) => {
        const sortedList = [...patientData].sort((a, b) => {
            const aValue = a[type];
            const bValue = b[type];

            if (typeof aValue === "number" && typeof bValue === "number") {
                return filter === "ASC" ? aValue - bValue : bValue - aValue;
            } else {
                return filter === "ASC"
                    ? String(aValue).localeCompare(String(bValue))
                    : String(bValue).localeCompare(String(aValue));
            };
        });
        dispatch(setPatientData(sortedList));
        setFilter(prev => prev === "ASC" ? "DESC" : "ASC");
    };

    const handlePatientClick = (patient: any) => {
        if (divScrollRef.current) dispatch(setScrollPatientsList(divScrollRef.current.scrollTop));
        router.push(`/pacientes/${patient.id}`, { scroll: false });
        dispatch(setSelectedPatient(patient));
        dispatch(setPatientId(patient.id))
        dispatch(setEmptyChartHistory());
        dispatch(setEmptyChartLabels());
    };

    return (
        <div
            className="divtablePatients flex w-full h-full overflow-hidden overflow-y-scroll"
            ref={divScrollRef}
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
                <tbody>
                    {patientData
                        ?
                        patientData?.map((patient: any) => (
                            <tr
                                id={`${patient.id}`}
                                key={patient.id}
                                className="tBodyTr"
                                onClick={() => handlePatientClick(patient)}
                                onPointerDown={() => console.log('ADIOS')}
                                onMouseOver={() => router.prefetch(`pacientes/${patient.id}`)}
                            >
                                <td className="tdPatientsList">
                                    <div className="flex justify-center">
                                        <div className="flex justify-center w-[70px] h-[70px] listImage rounded-full border-[1px] border-blue-300">
                                            <Image
                                                src={`${patient.image}`}
                                                width={70}
                                                height={70}
                                                alt={`Imagen de ${patient.firstName} ${patient.lastName} `}
                                                className="rounded-full"
                                                loading="lazy"
                                                placeholder={`data:image/svg+xml;base64,${toBase64(shimmer())}`}
                                                onError={(e) => {
                                                    e.currentTarget.className = 'hidden'
                                                }}
                                            />
                                        </div>
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