import React from 'react';
import { Link } from 'react-router-dom';
import dummyPayslips from '../../dummyData/dummyData';
import './ViewPayslips.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const ViewPayslips = () => {
  return (
    <div>
      <Header />
      <div className="view-payslips-container">
        <h1 className="view-payslips-header">Payslips</h1>
        <ul className="payslip-list">
          {dummyPayslips.map(payslip => (
            <li key={payslip.id} className="payslip-item">
              <div className="payslip-info">
                <p className="payslip-period">Period: {`${payslip.fromDate} to ${payslip.toDate}`}</p>
                <Link className="payslip-link" to={`/payslip/${payslip.id}`}>View Details</Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />

    </div>
  );
}

export default ViewPayslips;
