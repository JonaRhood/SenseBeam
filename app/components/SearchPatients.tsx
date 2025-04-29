// app/components/SearchPatients.tsx

import { useState } from "react";
import PatientsList from "./PatientsList"

export default function SearchPatients() {
    const [ searchText, setSearchText ] = useState("");

    const inputSearch = (e : any) => {
        if (e.key == "Enter") {
            e.preventDefault();
            setSearchText(e.target.value);
        } else if (e.key == "Backspace" && e.target.value.length <= 1) {
            setSearchText(e.target.value);
        }
    }

    return (
    <div className="flex flex-col h-full">
      <div className="flex justify-center h-[8svh] items-center">
        <input 
            className="border-[1px] border-blue-300 rounded-full w-[45%] px-4 p-1"
            onKeyDown={(e) => inputSearch(e)}
        ></input>
      </div>
      <div className="flex justify-center overflow-hidden overflow-y-scroll overflow-x-auto">
        <PatientsList searchText={searchText} />
      </div>
    </div>
    )
}