// import React from 'react';
// import { Link } from 'react-router-dom';
// import dummyPayslips from './dummyData/dummyData';

// const PayslipDetails = ({ payslip }) => {

//     console.log('payslip id :::',payslip);
//   // Function to find payslip by ID
//   const findPayslipById = (id) => {
//     return dummyPayslips.find(p => p.id === id);
//   };

//   // Check if payslip with specified ID exists
//   const existingPayslip = findPayslipById(payslip.id);

//   // If payslip doesn't exist, show "Payslip not found" message
//   if (!existingPayslip) {
//     return <div>Payslip not found.</div>;
//   }

//   const handleDownload = () => {
//     const link = document.createElement('a');
//     link.href = payslip.file;
//     link.download = `Payslip_${payslip.id}.pdf`;
//     link.click();
//   };

//   return (
//     <div>
//       <h1>Payslip Details</h1>
//       <p>ID: {payslip.id}</p>
//       <p>Period: {`${payslip.fromDate} to ${payslip.toDate}`}</p>
//       <button onClick={handleDownload}>Download Payslip</button>
//       <br />
//       <Link to="/">Go back to View Payslips</Link>
//     </div>
//   );
// };

// export default PayslipDetails;

import React from 'react';
import { Link } from 'react-router-dom';
import dummyPayslips from '../dummyData/dummyData';

const PayslipDetails = ({ payslip }) => {
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

      // Determine the download filename based on file extension
      if (selectedPayslip.file.endsWith('.pdf')) {
        link.download = `Payslip_${selectedPayslip.id}.pdf`;
      } else if (selectedPayslip.file.endsWith('.png') || selectedPayslip.file.endsWith('.jpg') || selectedPayslip.file.endsWith('.jpeg')) {
        link.download = `Payslip_${selectedPayslip.id}.png`;
      } else {
        // Unsupported file format
        console.error('Unsupported file format');
        return;
      }

      // Initiate the download
      link.click();
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <div>
      <h1>Payslip Details</h1>
      <p>ID: {payslip.id}</p>
      <p>Period: {`${payslip.fromDate} to ${payslip.toDate}`}</p>
      <button onClick={handleDownload}>Download Payslip</button>
      <br />
      <Link to="/">Go back to View Payslips</Link>
    </div>
  );
};

export default PayslipDetails;


