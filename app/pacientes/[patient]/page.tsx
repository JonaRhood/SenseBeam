
"use client"

import Tabs from './components/Tabs'
import PatientProfile from './components/PatientProfile'
import DataOverviewTab from './components/DataOverViewTab'
import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import PatientModal from './components/PatientModal'

export default function Patient() {
  const searchParams = useSearchParams();
  const patientParam = searchParams.get('pacientes');
  const router = useRouter()

  // If direct URL, redirects to /pacfientes/[patient]
  useEffect(() => {
    if (patientParam) {
      router.push(`/pacientes/${patientParam}`)
    }
  }, [])

  return (
    <div className='flex h-full flex-col'>
      <div>
        <Tabs />
      </div>
      <div className='flex h-full p-10 gap-10'>
        <div className='flex w-[30%]'>
          <PatientProfile />
        </div>
        <div className='flex w-[70%] border-2 border-blue-500 relative'>
          <DataOverviewTab />
          <PatientModal />
        </div>
      </div>
    </div>
  )
}