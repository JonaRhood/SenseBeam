// app/page.tsx

'use client'

import SearchPatients from "./components/SearchPatients"
import { Suspense } from "react"

export default function Home() {

  return (
    <div className="flex flex-col h-full">
      <Suspense>
          <SearchPatients />
      </Suspense>
    </div>
  )
}
