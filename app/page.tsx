// app/page.tsx

'use client'

import SearchPatients from "./components/SearchPatients"
import PatientsList from "./components/PatientsList"


export default function Home() {

  return (
    <div className="flex flex-col h-full">
      <SearchPatients />
    </div>
  )
}
