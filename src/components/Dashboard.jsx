import React from 'react';
import ChartSection from './ChartSection.jsx';
import ProductManager from './ProductManager.jsx';
import DataTable from './DataTable.jsx';
import '../css/Dashboard.css';

function Dashboard() {
  return (
    <>
      <div id="dashboard-container" style={{ paddingBottom: '40px' }}>
        <h1 id="dashboard-title">Panel de Administración</h1>
        <ChartSection />
        <ProductManager />
        <DataTable />
      </div>
    </>
  );
}

export default Dashboard;