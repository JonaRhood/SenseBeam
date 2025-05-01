// app/components/PatientsList.tsx
import { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation";
import Modal from 'react-modal';
import Patient from "../pacientes/[patient]/page";
import { useAppDispatch } from "@/store/hooks";
import { setIsModalOpen } from "@/store/slices/modalSlice";
import { setPatient } from "@/store/slices/patientSlice";
import { createCookie } from "@/utils/utils";
import { create } from "domain";


interface PatientsListProps {
    searchText: string;
    onPatientSelect: (id: string) => void;
    openModal: React.Dispatch<React.SetStateAction<boolean>>
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

export default function PatientsList({ searchText, onPatientSelect }: PatientsListProps) {

    const [fullList, setFullList] = useState<Patient[]>([]);
    const [list, setList] = useState<Patient[]>([]);
    const dispatch = useAppDispatch();

    const router = useRouter();

    useEffect(() => {
        const fetchPatients = async () => {
            const dataPatients = await fetch('https://dummyjson.com/users');
            const result = await dataPatients.json();

            result.users.sort((a: Patient, b: Patient) => a.lastName.localeCompare(b.lastName));

            console.log(result.users)
            setList(result.users);
            setFullList(result.users);
        }

        fetchPatients();

        if (typeof window !== 'undefined') {
            Modal.setAppElement(document.body); // o document.getElementById('your-root-id')
        }
    }, []);

    useEffect(() => {
        const inputSearch = fullList.filter((patient) => {
            const fullName = `${patient.firstName} ${patient.lastName}`.toLowerCase();
            return fullName.includes(searchText.toLowerCase());
        });
        setList(inputSearch);
    }, [searchText, fullList]);


    const [filter, setFilter] = useState<string>("ASC");

    const filterByType = (type: keyof Patient) => {
        const sortedList = [...list].sort((a, b) => {
            const aValue = a[type];
            const bValue = b[type];

            if (typeof aValue === "number" && typeof bValue === "number") {
                return filter === "ASC" ? aValue - bValue : bValue - aValue;
            }

            return filter === "ASC"
                ? String(aValue).localeCompare(String(bValue))
                : String(bValue).localeCompare(String(aValue));
        });

        setList(sortedList);
        setFilter(filter === "ASC" ? "DESC" : "ASC");
    };

    const handlePatientClick = (patientId: number) => {
        onPatientSelect(patientId.toString());
        window.history.pushState(null, '', `/pacientes/${patientId}`)
        dispatch(setIsModalOpen(true));
        dispatch(setPatient(patientId))
    }

    return (
        <div className="flex w-full h-[0px]">
            <table className="w-full rounded-md">
                <thead className="sticky top-0 z-10 w-full">
                    <tr>
                        <th className="thPatientsList w-[150px]">Imagen</th>
                        <th className="thPatientsList w-[180px]" onClick={() => filterByType("lastName")}>Apellidos</th>
                        <th className="thPatientsList w-[180px]" onClick={() => filterByType("firstName")}>Nombre</th>
                        <th className="thPatientsList w-[120px]" onClick={() => filterByType("age")}>Edad</th>
                        <th className="thPatientsList w-[150px]" onClick={() => filterByType("gender")}>Gender</th>
                        <th className="thPatientsList w-[120px]" onClick={() => filterByType("bloodGroup")}>ABO</th>
                        <th className="thPatientsList">Email</th>
                    </tr>
                </thead>
                <tbody className="">
                    {list.map((patient) => (
                        <tr
                            key={patient.id}
                            className="tBodyTr"
                            onClick={() => handlePatientClick(patient.id)}
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
                            <td className="tdPatientsList">{patient.age}</td>
                            <td className="tdPatientsList">{patient.gender}</td>
                            <td className="tdPatientsList">{patient.bloodGroup}</td>
                            <td className="tdPatientsList">{patient.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}