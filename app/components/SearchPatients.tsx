// app/components/SearchPatients.tsx

import { useState, useRef } from "react";
import PatientsList from "./PatientsList"
import SearchIcon from "./icons/SearchIcon";
import XIcon from "./icons/XIcon";
import Modal from "./Modal";

export default function SearchPatients() {
    const [searchText, setSearchText] = useState("");
    const [iconXOn, setIconXOn] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [selectedPatient, setSelectedPatient] = useState<string>("");

    const inputSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const value = (e.target as HTMLInputElement).value;
        if (e.key === "Enter") {
            e.preventDefault();
            setSearchText(value);
            return;
        }
        if (e.key === "Backspace" && value.length <= 1) {
            setIconXOn(false);
        } else {
            setIconXOn(true);
        }
    }

    const handleXIcon = () => {
        if (inputRef.current) {
            inputRef.current.value = "";
        }
        setSearchText("")
        setIconXOn(false);
    }

    return (
        <div className="flex flex-col h-full">
            <div className="flex justify-center h-[8svh] items-center relative">
                <div className="flex h-full absolute p-[18px] -translate-x-[295px]">
                    <SearchIcon onClick={() => inputRef.current?.focus()} />
                </div>
                <input
                    ref={inputRef}
                    className="border-[1px] border-blue-300 rounded-full w-[650px] px-4 pl-[50px] p-1"
                    placeholder="Search by first or last name"
                    onKeyDown={(e) => inputSearch(e)}
                ></input>
                <div className="flex h-full absolute p-[22px] translate-x-[295px]">
                    <div 
                        className="xIcon flex w-[20px]"
                        onClick={() => handleXIcon()}
                    >
                        {iconXOn ? <XIcon /> : ""}
                    </div>
                </div>
            </div>
            <div className="flex h-[92svh] justify-center overflow-hidden overflow-y-scroll overflow-x-auto">
                <PatientsList searchText={searchText} onPatientSelect={setSelectedPatient} openModal={setOpenModal} />
            </div>
            <Modal pacient={selectedPatient} />
        </div>
    )
}