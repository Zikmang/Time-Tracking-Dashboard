import React from 'react';
import type { Timeframe } from "../types";
import userImg from '../../assets/images/image-jeremy.png';

interface ProfileCardProps {
    activeTimeframe: Timeframe;
    setActiveTimeframe: (tf: Timeframe) => void
}

const TIMEFRAMES: Timeframe[] = ['daily', 'weekly', 'monthly'];

export const ProfileCard: React.FC<ProfileCardProps> = ({ activeTimeframe, setActiveTimeframe }) => {
    return (
        <div className="bg-slate-800 rounded-xl overflow-hidden md:row-span-2 flex flex-col">
            <div className="bg-indigo-600 p-8 flex items-center gap-4 md:flex-col md:items-start md:gap-8 rounded-xl z-10">
                <img 
                    src={userImg} 
                    alt="Jeremy Robson" 
                    className="w-16 h-16 border-2 border-white rounded-full md:w-20 md:h-20"
                />
                <div>
                    <p className="text-indigo-200 text-sm">Report for</p>
                    <h1 className="text-2xl md:text-4xl text-white font-light">
                        Jeremy Robson
                    </h1>
                </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col gap-4">
                {TIMEFRAMES.map((tf) => (
                    <button
                        key={tf}
                        onClick={() => setActiveTimeframe(tf)}
                        className={`text-left capitalize text-lg transition-colors ${
                            activeTimeframe === tf 
                            ? 'text-white font-medium' 
                            : 'text-indigo-200 hover:text-white'
                        }`}
                    >
                        {tf}
                    </button>
                ))}
            </div>
        </div>
    );
}