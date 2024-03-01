import React from 'react';
import { Link } from 'react-router-dom';
import dummyPayslips from '../dummyData/dummyData';

const ViewPayslips = () => {
  return (
    <div>
      <h1>Payslips</h1>
      <ul>
        {dummyPayslips.map(payslip => (
          <li key={payslip.id}>
            <p>
              Period: {`${payslip.fromDate} to ${payslip.toDate}`}
              <Link to={`/payslip/${payslip.id}`}>View Details</Link>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewPayslips;
