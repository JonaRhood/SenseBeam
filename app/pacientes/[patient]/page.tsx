import DataOverviewTabs from './components/PatientTabs'
import PatientProfile from './components/PatientProfile'
import DataOverview from './components/DataOverView'

export default function PatientPage() {

  return (
    <div className='flex p-10 gap-10 h-full'>
      <div className='flex w-[30%]'>
        <PatientProfile />
      </div>
      <div className='flex w-[70%] border-2 border-blue-200 relative rounded-xl bg-blue-200/10 shadow-lg'>
        <DataOverview />
      </div>
    </div>
  )
}