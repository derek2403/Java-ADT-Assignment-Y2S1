import React, { useState, useEffect } from 'react';

const GenerateReport = () => {
  const [report, setReport] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const donorResponse = await fetch('/api/admin/report/donor');
        const doneeResponse = await fetch('/api/admin/report/donee');
        const transactionResponse = await fetch('/api/admin/report/transaction');
        const donationItemResponse = await fetch('/api/admin/report/donation-item');
        const donationRequestResponse = await fetch('/api/admin/report/donation-request');

        const donorData = await donorResponse.json();
        const doneeData = await doneeResponse.json();
        const transactionData = await transactionResponse.json();
        const donationItemData = await donationItemResponse.json();
        const donationRequestData = await donationRequestResponse.json();

        setReport({
          donor: donorData,
          donee: doneeData,
          transaction: transactionData,
          donationItem: donationItemData,
          donationRequest: donationRequestData,
        });
      } catch (error) {
        console.error('Failed to fetch reports:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  return (
    <div>
      <h2>Generate Report</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h3>Donor Report</h3>
          <pre>{JSON.stringify(report.donor, null, 2)}</pre>
          
          <h3>Donee Report</h3>
          <pre>{JSON.stringify(report.donee, null, 2)}</pre>
          
          <h3>Transaction Report</h3>
          <pre>{JSON.stringify(report.transaction, null, 2)}</pre>
          
          <h3>Donation Item Report</h3>
          <pre>{JSON.stringify(report.donationItem, null, 2)}</pre>
          
          <h3>Donation Request Report</h3>
          <pre>{JSON.stringify(report.donationRequest, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default GenerateReport;
