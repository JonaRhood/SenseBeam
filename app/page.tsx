// app/page.tsx
"use client"

import SearchPatients from "./components/SearchPatients"
import PatientsList from "./components/PatientsList"

export default function HomePage() {
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
