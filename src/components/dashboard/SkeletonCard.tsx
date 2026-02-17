export const SkeletonCard: React.FC = () => {
    return(
        <div className="relative rounded-xl overflow-hidden bg-slate-800/50 pt-10 animate-pulse">
            {/* Top "Icon" Placeholder */}
            <div className="absolute -top-2 right-4 w-16 h-16 bg-slate-700/50 rounded-full" />
            
            {/* Main Card Body */}
            <div className="relative z-10 bg-slate-800 p-6 rounded-t-xl h-full mt-auto flex flex-col justify-between">
                
                {/* Title Placeholder */}
                <div className="flex justify-between items-center mb-6">
                    <div className="h-4 w-24 bg-slate-600 rounded"></div>
                    <div className="h-2 w-8 bg-slate-600 rounded"></div>
                </div>

                {/* Numbers Placeholder */}
                <div className="flex flex-col gap-4">
                    <div className="h-10 w-32 bg-slate-700 rounded"></div>
                    <div className="h-3 w-20 bg-slate-700 rounded"></div>
                </div>
            </div>
        </div>
    )
}