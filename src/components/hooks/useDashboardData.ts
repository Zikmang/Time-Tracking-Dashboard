import { useState, useEffect } from "react";

import type { Activity } from "../types";
import localData from '../../data.json';

export const useDashboardData = () => {
    const [data, setData] = useState<Activity[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try{
                setIsLoading(true);
                await new Promise((resolve) => setTimeout(resolve, 1500));
                setData(localData as Activity[]);
            } catch(err) {
                console.error(err)
                setError('Failed to load dashboard data.');
            }finally{
                setIsLoading(false);
            }
        };
        
        fetchDashboardData();
    }, []);

    return {data, isLoading, error}
}