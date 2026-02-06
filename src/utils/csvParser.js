import Papa from 'papaparse';

export const fetchCSV = async (url) => {
  try {
    const response = await fetch(url);
    const csvData = await response.text();
    return new Promise((resolve, reject) => {
      Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          resolve(results.data);
        },
        error: (error) => {
          reject(error);
        },
      });
    });
  } catch (error) {
    console.error('Error fetching CSV:', error);
    throw error;
  }
};
