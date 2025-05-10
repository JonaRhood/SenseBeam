"use server"

import DataOverviewTabs from "./components/PatientTabs"
import PatientProfile from "./components/PatientProfile";
import WebSockets from "./components/WebSockets";

export default async function PatientLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ patient: string }>
}) {

  const { patient } = await params;
  const patientId = Number(patient);

  const response = await fetch(`https://dummyjson.com/users/${patientId}`);
  const result = await response.json();

  return (
    <div className="flex flex-col h-full">
      <WebSockets />
      <div>
        <DataOverviewTabs />
      </div>
      <div className="divChildrenSensors flex flex-col h-full">
        <div className='divPatientPage flex p-10 gap-10 h-full'>
          <div className='divPatientProfile flex w-[30%]'>
            <PatientProfile patient={result} />
          </div>
          <div className='divPOverview flex w-[70%] h-full relative'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}