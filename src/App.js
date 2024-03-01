// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// const App = () => {
//   // Initialize state for payslips
//   const [payslips, setPayslips] = useState([
//     { id: 1, fromDate: '2024-01-01', toDate: '2024-01-31', file: 'example.pdf' },
//     { id: 2, fromDate: '2024-02-01', toDate: '2024-02-29', file: 'example.pdf' },
//     // Add more payslips as needed
//   ]);

//   // View Payslips screen
//   const ViewPayslips = () => {
//     return (
//       <div>
//         <h1>Payslips</h1>
//         <ul>
//           {payslips.map(payslip => (
//             <li key={payslip.id}>
//               <Link to={`/payslip/${payslip.id}`}>
//                 {`Period: ${payslip.fromDate} to ${payslip.toDate}`}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }

//   // Individual payslip details page
//   const PayslipDetails = ({ match }) => {
//     // Dummy payslip data
//     const payslipData = {
//       id: 1,
//       fromDate: '2024-01-01',
//       toDate: '2024-01-31',
//       file: 'example.pdf'
//     };

//     // Function to handle download
//     const handleDownload = () => {
//       // Replace 'example.pdf' with the actual file URL
//       const downloadUrl = payslipData.file;
//       const link = document.createElement('a');
//       link.href = downloadUrl;
//       link.download = `Payslip_${payslipData.id}.pdf`;
//       link.click();
//     };

//     return (
//       <div>
//         <h1>Payslip Details</h1>
//         <p>ID: {payslipData.id}</p>
//         <p>Period: {`${payslipData.fromDate} to ${payslipData.toDate}`}</p>
//         <button onClick={handleDownload}>Download Payslip</button>
//         <br />
//         <Link to="/">Go back to View Payslips</Link>
//       </div>
//     );
//   }

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<ViewPayslips />} />
//         <Route path="/payslip/:id" element={<PayslipDetails />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewPayslips from './screens/ViewPayslips';
import PayslipDetails from './screens/PayslipDetails';
import dummyPayslips from './dummyData/dummyData';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ViewPayslips />} />
        {dummyPayslips.map(payslip => (
          <Route key={payslip.id} path={`/payslip/${payslip.id}`} element={<PayslipDetails payslip={payslip} />} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;



