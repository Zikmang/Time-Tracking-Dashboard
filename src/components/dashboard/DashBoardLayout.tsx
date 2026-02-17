import { useState } from "react"
import { TrackingCard } from "./TrackingCard"
import { ProfileCard } from "./ProfileCard"
import type { Timeframe } from "../types"
import { useDashboardData } from "../hooks/useDashboardData"
import { SkeletonCard } from "./SkeletonCard"

export const DashboardLayout: React.FC = () => {
    const [activeTimeframe, setActiveTimeframe] = useState<Timeframe>('weekly');
    const {data, isLoading} = useDashboardData()
    const array = [1, 2, 3, 4, 5, 6]
  return (
    <main className="max-w-6xl mx-auto w-full p-6">
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 w-full">
        <ProfileCard
            activeTimeframe={activeTimeframe}
            setActiveTimeframe={setActiveTimeframe}
        />

        {
          isLoading ? (
            array.map((item) => (
              <SkeletonCard key={item} />
            ))
          ) : (
            data.map((item) => (
              <TrackingCard
                key={item.title}
                title={item.title}
                current={item.timeframes[activeTimeframe].current}
                previous={item.timeframes[activeTimeframe].previous}
                timeframe={activeTimeframe}
              />
            ))
          )
        }
      </div>
    </main>
  )
}