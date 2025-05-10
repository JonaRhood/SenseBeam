// app/page.tsx
"use server"

import SearchPatients from "./components/SearchPatients"
import PatientsList from "./components/PatientsList"

export default async function HomePage() {
  return (
    <div className="flex flex-col h-full">
      <div>
        <SearchPatients />
      </div>
      <div className="flex h-[92svh] justify-center overflow-hidden">
        <PatientsList />
      </div>
    </div>
  )
}
