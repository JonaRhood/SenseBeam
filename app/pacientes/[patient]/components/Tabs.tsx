// app/pacientes/[patients]/page.tsx
"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { RootState } from "@/store/store";
import { setIsModalOpen } from "@/store/slices/modalSlice"
import { useRouter } from "next/navigation";
import { createCookie } from "@/utils/utils";

export default function Tabs({ params }: any) {

    const isModalOpen = useAppSelector((state: RootState) => state.modal.isModalOpen);
    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleCloseModal = () => {
        if (isModalOpen) {
            dispatch(setIsModalOpen(false));
            // createCookie("isModalOpen", "false", 60 * 60 * 24 * 365, "/");
            router.replace('/');
        } else {
            router.push('/');
            // createCookie("isModalOpen", "false", 60 * 60 * 24 * 365, "/");
        }
    }

    return (
        <div className="flex h-[30px]">
            <div className="w-[48%] flex justify-center items-center">
                Sensor Data Overview
            </div>
            <div className="w-[48%] flex justify-center items-center unselectedTab">
                Sensor Data Chart
            </div>
            <div className="w-[4%] flex justify-center items-center closeTab">
                <div
                    className="flex items-center w-full h-full justify-center"
                    onClick={() => handleCloseModal()}
                >
                    X
                </div>
            </div>
        </div>
    )
}