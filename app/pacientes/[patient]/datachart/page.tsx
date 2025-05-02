import PatientProfile from "../components/PatientProfile"
import DataChart from "./components/DataChart"


export default function DataChartPage() {
  return (
        <div className='flex p-10 gap-10 h-full'>
          <div className='flex w-[30%]'>
            <PatientProfile />
          </div>
          <div className='flex w-[70%] border-2 border-blue-500 relative'>
            <DataChart />
          </div>
        </div>
  )
}