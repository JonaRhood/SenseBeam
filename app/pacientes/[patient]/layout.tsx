import DataOverviewTabs from "./components/PatientTabs"

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ team: string }>
};

export default async function PatientLayout({ children, params }: LayoutProps ) {
  return (
    <div className="flex flex-col h-full">
      <div className="">
        <DataOverviewTabs />
      </div>
      <div className="flex flex-col h-full">
        {children}
      </div>
    </div>
  )
}