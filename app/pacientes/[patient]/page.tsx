import PatientProfile from './components/PatientProfile'
import DataOverview from './components/DataOverView'

export default function PatientPage() {

  return (
    <div className='divPatientPage flex p-10 gap-10 h-full'>
      <div className='divPatientProfile flex w-[30%]'>
        <PatientProfile />
      </div>
      <div className='divPOverview flex w-[70%] h-full'>
        <DataOverview />
      </div>
    </div>
  )
}