import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import dummyPayslips from '../../dummyData/dummyData';
import './PayslipDetails.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';


const PayslipDetails = ({ payslip }) => {
  const payslipContainerRef = useRef(null);
  const findPayslipById = (id) => {
    return dummyPayslips.find(p => p.id === id);
  };

  const handleDownload = async () => {
    try {
      // Find payslip by ID
      const selectedPayslip = findPayslipById(payslip.id);
      if (!selectedPayslip) {
        console.error('Payslip not found');
        return;
      }

      // Fetch the file data
      const response = await fetch(selectedPayslip.file);
      const blob = await response.blob();

      // Create a temporary link element
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);

      if (selectedPayslip.file.endsWith('.pdf')) {
        link.download = `Payslip_${selectedPayslip.id}.pdf`;
      } else if (selectedPayslip.file.endsWith('.png') || selectedPayslip.file.endsWith('.jpg') || selectedPayslip.file.endsWith('.jpeg')) {
        link.download = `Payslip_${selectedPayslip.id}.png`;
      } else {
        console.error('Unsupported file format');
        return;
      }

      // Initiate the download
      link.click();
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  useEffect(() => {
    payslipContainerRef.current.style.opacity = 1;
  }, []);

  return (
    <div>
      <Header />
      <div ref={payslipContainerRef} className="payslip-details-container">
        <h1 className="payslip-details-header">Payslip Details</h1>
        <div className="payslip-info">
          <p className="payslip-id">ID: {payslip.id}</p>
          <p className="payslip-period">Period: {`${payslip.fromDate} to ${payslip.toDate}`}</p>
        </div>
        <button className="download-button" onClick={handleDownload}>Download Payslip</button>
        <br />
        <Link className="back-link" to="/">Go back to View Payslips</Link>
      </div>
      <Footer />

    </div>

  );
};

export default PayslipDetails;
