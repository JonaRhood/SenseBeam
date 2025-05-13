export default function DataChartSkeleton() {
    return (
        <section className="sectionDataChart absolute flex flex-col justify-between items-center w-full h-full
                border-2 border-blue-200 rounded-xl bg-blue-200/10">
            <h2 className="text-3xl w-full font-semibold text-gray-800 p-4 bg-[#d9efff] rounded-t-[0.6rem] text-center">
                Patient Vital Signs Chart
            </h2>
            <div className="flex flex-col h-full w-full bg-[#f9fbff] justify-center">
                <div className="flex justify-center"><div className="loaderDataChart"></div> </div>
            </div>
            <span className="text-sm text-gray-500 bg-[#d9efff] p-2 rounded-b-[0.6rem] flex justify-center w-full">
                <span className="flex">
                    Last update: &nbsp;
                    <div className="w-[117px] h-[15px] self-center rounded-full tdSkel"></div>
                </span>
            </span>
        </section>
    )
}