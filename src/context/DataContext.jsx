import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchCSV } from '../utils/csvParser';

const DataContext = createContext();

const CSV_URLS = {
    products: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQMMsDAE1FPS1MxD5aiug42aooYcUQDjwe5G8ujr-CeTJ4RMGIkQuBgC67YpMktRD8nXrn83KytzAVR/pub?gid=0&single=true&output=csv',
    details: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQMMsDAE1FPS1MxD5aiug42aooYcUQDjwe5G8ujr-CeTJ4RMGIkQuBgC67YpMktRD8nXrn83KytzAVR/pub?gid=634478982&single=true&output=csv',
    static: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQMMsDAE1FPS1MxD5aiug42aooYcUQDjwe5G8ujr-CeTJ4RMGIkQuBgC67YpMktRD8nXrn83KytzAVR/pub?gid=1405471564&single=true&output=csv'
};

export const DataProvider = ({ children }) => {
    const [data, setData] = useState({
        products: [],
        details: [],
        static: [],
        loading: true,
        error: null
    });

    useEffect(() => {
        const loadAllData = async () => {
            try {
                const [products, details, staticContent] = await Promise.all([
                    fetchCSV(CSV_URLS.products),
                    fetchCSV(CSV_URLS.details),
                    fetchCSV(CSV_URLS.static)
                ]);

                setData({
                    products,
                    details,
                    static: staticContent,
                    loading: false,
                    error: null
                });
            } catch (err) {
                console.error('Failed to load data:', err);
                setData(prev => ({ ...prev, loading: false, error: err }));
            }
        };

        loadAllData();
    }, []);

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};
