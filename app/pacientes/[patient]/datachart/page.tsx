"use client"

import Tabs from "../components/Tabs"
import PatientProfile from "../components/PatientProfile"
import DataChartTab from "./components/DataChart"

export default function DataChartPage() {
    return (
            <div className='flex h-full flex-col'>
              <div>
                <Tabs />
              </div>
              <div className='flex h-full p-10 gap-10'>
                <div className='flex w-[30%]'>
                  <PatientProfile />
                </div>
                <div className='flex w-[70%] border-2 border-blue-500'>
                    <DataChartTab />
                </div>
              </div>
            </div>
    )
}