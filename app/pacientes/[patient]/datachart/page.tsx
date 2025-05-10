"use client"

import DataChart from "./components/DataChart"
import DataOverviewSkeleton from "@/utils/skeletons/DataOverviewSkeleton"
import { useAppSelector } from "@/store/hooks"
import { RootState } from "@/store/store"

export default function DataChartPage() {
  const dataOverviewNavigation = useAppSelector((state: RootState) => state.routing.dataOverviewNavigation);

  return (
    <>
      <DataChart />
      {dataOverviewNavigation ? <DataOverviewSkeleton /> : ""}
    </>
  )
}