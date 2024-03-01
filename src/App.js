import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewPayslips from './screens/ViewPayslip/ViewPayslips';
import PayslipDetails from './screens/PaySlipDetails/PayslipDetails';
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



