// app/pacientes/[patients]/page.tsx

import Link from "next/link"
import Telemetry from "./components/Telemetry"

export default async function Page({
  params,
}: {
  params: Promise<{ patient: string }>
}) {

  const { patient } = await params

  return (
    <div>
      <div className="flex">
        <div className="w-[48%] flex justify-center">
          TAB 1
        </div>
        <div className="w-[48%] flex justify-center unselectedTab">
          TAB 2
        </div>
        <div className="w-[4%] flex justify-center closeTab">
          <Link href={"/"}>
            X
          </Link>
        </div>
      </div>
      My Post: {patient}
      <div>
        <Telemetry />
      </div>
    </div>
  )
}