import PatientProfile from "../components/PatientProfile"
import DataChart from "./components/DataChart"


export default function DataChartPage() {
  return (
        <div className='divPatientPage flex p-10 gap-10 h-full'>
          <div className='divPatientProfile flex w-[30%]'>
            <PatientProfile />
          </div>
          <div className='divPOverview flex w-[70%] h-full'>
            <DataChart />
          </div>
        </div>
  )
}