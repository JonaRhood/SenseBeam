export default function DataOverviewSkeleton() {
    return (
        <section
            className="sectionDataOverview flex flex-col justify-between w-full h-full
        border-2 border-blue-200 absolute rounded-xl bg-blue-200/10"
        >
            <h2 className="text-3xl font-semibold text-gray-800 p-4 bg-[#d9efff] rounded-t-[0.6rem] text-center">
                Patient Vital Signs
            </h2>
            <ul className="text-xl text-gray-700 h-full flex flex-col">
                <li className="flex justify-between h-[14.28%] bg-[#f9fbff] items-center px-20">
                    <span className="font-semibold text-gray-800">Heart Rate:</span>
                    <span><div className="loaderOverview"></div></span>
                </li>
                <li className="flex justify-between h-[14.28%] items-center px-20 bg-[#e2f3ff]">
                    <span className="font-semibold text-gray-800">Oxygen Saturation:</span>{' '}
                    <div className="loaderOverview"></div>
                </li>
                <li className="flex justify-between h-[14.28%] bg-[#f9fbff] items-center px-20">
                    <span className="font-semibold text-gray-800">Body Temperature:</span>{' '}
                    <div className="loaderOverview"></div>
                </li>
                <li className="flex justify-between h-[14.28%] items-center px-20 bg-[#e2f3ff]">
                    <span className="font-semibold text-gray-800">Respiration Rate:</span>{' '}
                    <div className="loaderOverview"></div>
                </li>
                <li className="flex justify-between h-[14.28%] bg-[#f9fbff] items-center px-20">
                    <span className="font-semibold text-gray-800">Glucose Level:</span>{' '}
                    <div className="loaderOverview"></div>
                </li>
                <li className="flex justify-between h-[14.28%] items-center px-20 bg-[#e2f3ff]">
                    <span className="font-semibold text-gray-800">Systolic Pressure:</span>{' '}
                    <div className="loaderOverview"></div>
                </li>
                <li className="flex justify-between h-[14.28%] bg-[#f9fbff] items-center px-20">
                    <span className="font-semibold text-gray-800">Diastolic Pressure:</span>{' '}
                    <div className="loaderOverview"></div>
                </li>
            </ul>

            <span className="text-sm text-gray-500 bg-[#d9efff] p-2 rounded-b-[0.6rem] flex justify-center">
                <span className="flex">
                    Last update: &nbsp;
                    <div className="w-[117px] h-[15px] self-center rounded-full tdSkel"></div>
                </span>
            </span>
        </section>
    )
}