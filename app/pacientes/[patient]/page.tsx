// app/pacientes/[patients]/page.tsx

import Link from "next/link"
import Telemetry from "./components/Telemetry"
import { useAppDispatch } from "@/lib/hooks"
import { setIsModalOpen } from "@/lib/features/todos/modalSlice"


export default function Patient() {

    const dispatch = useAppDispatch();

  return (
    <div>
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
            onClick={() => dispatch(setIsModalOpen(false))}
          >
            X
          </div>
        </div>
      </div>
      My Post:
      <div>
        <Telemetry />
      </div>
    </div>
  )
}