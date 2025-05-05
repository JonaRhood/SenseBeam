// app/components/SearchPatients.tsx

import { useState, useRef } from "react";
import PatientsList from "./PatientsList"
import SearchIcon from "./icons/SearchIcon";
import XIcon from "./icons/XIcon";

export default function SearchPatients() {
    const [searchText, setSearchText] = useState<string>("]");
    const [iconXOn, setIconXOn] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

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
            <div className="flex justify-center h-[67px] items-center relative">
                <div className="divSearchIcon flex border-1 border-blue-300 rounded-full w-[50%] justify-center hover:bg-blue-100/20">
                    <div className="items-center flex h-full">
                        <div className=" py-1 flex h-[34px]">
                            <SearchIcon onClick={() => inputRef.current?.focus()} />
                        </div>
                    </div>
                    <input
                        ref={inputRef}
                        className="w-[92%] p-1 focus:outline-none"
                        placeholder="Search by first or last name"
                        onKeyDown={(e) => inputSearch(e)}
                    ></input>
                    <div className="flex h-full items-center">
                        <div className="flex justify-center h-[34px] w-[50px] hover:cursor-text">
                            <div
                                className={`xIcon ${iconXOn ? 'flex' : 'hidden'} w-[20px] py-2`}
                                onClick={() => handleXIcon()}
                            >
                                <XIcon onClick={() => inputRef.current?.focus()} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex h-[92svh] justify-center overflow-hidden">
                <PatientsList searchText={searchText} />
            </div>
        </div>
    )
}