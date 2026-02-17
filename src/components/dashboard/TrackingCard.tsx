import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import { CATEGORY_CONFIG } from '../lib/constants'; 
import type { Timeframe } from '../types/index'
import ellipsis from '../../assets/images/icon-ellipsis.svg'

interface TrackingCardProps {
  title: string;
  current: number;
  previous: number;
  timeframe: Timeframe; 
}

const timeframeMsg: Record<Timeframe, string> = {
  daily: 'Yesterday',
  weekly: 'Last Week',
  monthly: 'Last Month',
};

export const TrackingCard: React.FC<TrackingCardProps> = ({ 
  title, 
  current, 
  previous, 
  timeframe 
}) => {
  const theme = CATEGORY_CONFIG[title];

  if (!theme) {
    console.warn(`No config found for category: ${title}`);
    return null; 
  }

  return (
    <motion.article 
      initial={{opacity: 0, y: 20}}
      animate={{ opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      className={`relative pt-10 rounded-xl overflow-hidden ${theme.colorClass}`}
    >
        <img src={theme.icon} alt="" className="absolute -top-2 right-4 w-16 opacity-70 z-0" />
        <div className="relative z-10 bg-slate-800 p-6 rounded-t-xl hover:bg-slate-700 cursor-pointer transition-colors">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white font-medium">{title}</h2>
        <button aria-label='More options' className="text-slate-400 hover:text-white">
            <img src={ellipsis} alt="" />
        </button> 
      </div>

      <div className="flex items-center justify-between md:flex-col md:items-start md:gap-2">
        <AnimatePresence mode='wait'>
                    <motion.div
                        key={timeframe + current} 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.2 }}
                        className="text-3xl md:text-5xl font-light text-white dark:text-white hover:text-slate-900"
                    >
                        {current}hrs
                    </motion.div>
                </AnimatePresence>
        <div className="text-slate-400 text-sm mt-2 md:mt-0">
          {timeframeMsg[timeframe]} - {previous}hrs
        </div>
      </div>
    </div>
    </motion.article>
  );
};