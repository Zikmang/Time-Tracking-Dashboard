export interface Metric{
    current: number;
    previous: number;
}

export type Timeframe = 'daily' | 'weekly' | 'monthly';

export interface Activity{
    title: string;
    timeframes:{
        daily: Metric;
        weekly: Metric;
        monthly: Metric
    }
}