"use client"
import Image from "next/image";

export default function PatientProfile({ patient }: { patient: any }) {
    return (
        <div className="divInnerPP w-full h-full flex flex-col justify-center align-middle py-8">
            <div className="divPImage flex justify-center mb-2">
                <div className="divPImage2 flex aspect-square justify-center w-52">
                    <div className="w-full aspect-square relative overflow-hidden border-3 border-blue-300 rounded-full skelTextList">
                        <Image
                            src={`${patient.image}`}
                            fill={true}
                            alt={`Imagen de ${patient.firstName} ${patient.lastName}`}
                            className="object-cover bg-white"
                            priority={true}
                            loading={"eager"}
                            sizes="(max-width: 600px) 100vw, 50vw"
                            id={patient.id}
                        />
                    </div>
                </div>
            </div>
            <div className="divPPData flex flex-col h-[35%] items-center">
                <h3 className="font-bold text-[1.5rem] whitespace-nowrap">
                    {!patient
                        ?
                        <div className="divTitleSkel h-6 w-55 rounded-full skelTextList mb-3 mt-2"></div>
                        :
                        <div>
                            {patient.firstName} {patient.lastName}, {patient.age}
                        </div>
                    }
                </h3>
                <span className="spanPatientInfo text-center">
                    {!patient
                        ?
                        <div className="flex flex-col items-center">
                            <div className="h-4 mb-1 w-40 rounded-full skelTextList"></div>
                            <div className="h-4 w-50 rounded-full skelTextList mb-2"></div>
                        </div>
                        :
                        <div>
                            {patient.phone}
                            <br />
                            {patient.email}
                        </div>
                    }
                </span>
                <span className="spanPatientInfo text-center mb-4">
                    {!patient
                        ?
                        <div className="flex flex-col items-center">
                            <div className="h-4 w-30 rounded-full skelTextList mb-1"></div>
                            <div className="h-4 w-40 rounded-full skelTextList"></div>
                        </div>
                        :
                        <div>
                            {patient.address.address}
                            <br />
                            {patient.address.city}, {patient.address.postalCode}
                        </div>
                    }

                </span>
                <div className="divPPMessage flex h-[50px] shrink-0 justify-center">
                    <button className="buttonPPMessage bg-blue-500 w-[200px] rounded-md text-[1.2rem] 
                    text-white font-bold hover:bg-blue-400 hover:cursor-pointer">
                        <span>Send Message</span>
                    </button>
                </div>
            </div>
        </div>
    )
}