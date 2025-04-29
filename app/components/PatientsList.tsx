// app/components/PatientsList.tsx
import { useEffect, useState } from "react"

interface Patient {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    age: number
  }

export default function PatientsList() {

    const [list, setList] = useState<Patient[]>([]);

    useEffect(() => {
        const fetchPatients = async () => {
            const dataPatients = await fetch('https://dummyjson.com/users');
            const result = await dataPatients.json();

            setList(result.users);
        }

        fetchPatients();
    }, []);

    return (
        <div className="flex w-full h-full border-2 border-green-500">
            <table className="w-full border border-gray-300 shadow-md rounded-md">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="text-left p-2 border-b">Nombre</th>
                        <th className="text-left p-2 border-b">Apellido</th>
                        <th className="text-left p-2 border-b">Email</th>
                        <th className="text-left p-2 border-b">Edad</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((patient) => (
                        <tr key={patient.id} className="hover:bg-gray-50">
                            <td className="p-2 border-b">{patient.firstName}</td>
                            <td className="p-2 border-b">{patient.lastName}</td>
                            <td className="p-2 border-b">{patient.email}</td>
                            <td className="p-2 border-b">{patient.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}