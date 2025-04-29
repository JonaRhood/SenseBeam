// app/components/SearchPatients.tsx

import PatientsList from "./PatientsList"

export default function SearchPatients() {

    return (
    <div className="flex flex-col h-full border-2 border-red-500">
      <div className="flex justify-center h-[8svh] items-center border-2 border-green-500 ">
        Hola
      </div>
      <div className="flex justify-center h-full items-center border-2 border-blue-500 overflow-hidden overflow-y-auto">
        <PatientsList />
      </div>
    </div>
    )
}