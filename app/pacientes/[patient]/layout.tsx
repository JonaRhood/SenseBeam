// app/pacientes/[patients]/page.tsx

import Patient from "./page"

type Params = { patient: string }

export default async function PatientLayout({
    params,
}: {
    params: Params
}) {

    const { patient } = await params

    return (
        <div>
            <Patient patient={patient} />
        </div>
    )
}