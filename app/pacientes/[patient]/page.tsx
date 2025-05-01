
"use client"

import Tabs from './components/Tabs'
import PatientProfile from './components/PatientProfile'
import DataOverviewTab from './components/DataOverViewTab'
import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Suspense } from 'react'
 
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
    <div>
      <div>
        <Tabs />
      </div>
      <div>
        <div>
          <PatientProfile />
        </div>
        <div>
          <DataOverviewTab />
        </div>
      </div>
    </div>
  )
}