"use client"

import DataOverview from './components/DataOverView'
import DataChartSkeleton from '@/utils/skeletons/DataChartSkeleton'
import { useAppSelector } from '@/store/hooks'
import { RootState } from '@/store/store'

export default function PatientPage() {
  const dataChartNavigation = useAppSelector((state: RootState) => state.routing.dataChartNavigation);

  return (
    <>
      <DataOverview />
      {dataChartNavigation ? <DataChartSkeleton /> : ""}
    </>
  )
}