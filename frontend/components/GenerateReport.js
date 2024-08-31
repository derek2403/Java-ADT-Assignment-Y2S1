// File: components/GenerateReport.js
import React, { useState } from 'react';
import axios from 'axios';

export default function GenerateReport() {
  const [reportType, setReportType] = useState('');
  const [report, setReport] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerateReport = async () => {
    if (!reportType) {
      setError('Please select a report type');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`http://localhost:3001/api/admin/report/${reportType}`);
      setReport(response.data);
    } catch (error) {
      console.error('Error generating report:', error);
      setError('Failed to generate report. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const renderTable = (data) => {
    if (!data || data.length === 0) return <p>No data available</p>;

    const headers = Object.keys(data[0]);

    return (
      <table border="1">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td key={`${index}-${header}`}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <h2>Generate Report</h2>
      <select 
        value={reportType} 
        onChange={(e) => setReportType(e.target.value)}
      >
        <option value="">Select Report Type</option>
        <option value="donee">Donee Report</option>
        <option value="donor">Donor Report</option>
        <option value="donation">Donation Report</option>
        <option value="distribution">Distribution Report</option>
      </select>
      <button onClick={handleGenerateReport} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Report'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {report && (
        <div>
          <h3>{reportType.charAt(0).toUpperCase() + reportType.slice(1)} Report</h3>
          {renderTable(report)}
        </div>
      )}
    </div>
  );
}