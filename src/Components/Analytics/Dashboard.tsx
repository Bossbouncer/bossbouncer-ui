import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement);

const Dashboard = () => {
  const aboveCount = 1;
  const belowCount = 2;

  const barData = {
    labels: ['Manager'],
    datasets: [
      {
        label: 'Above 2.0',
        data: [1],
        backgroundColor: '#4ade80',
      },
      {
        label: 'Below 2.0',
        data: [2],
        backgroundColor: '#f87171',
      },
    ],
  };

  const pieData = {
    labels: ['Above 2.0', 'Below 2.0'],
    datasets: [
      {
        data: [aboveCount, belowCount],
        backgroundColor: ['#4ade80', '#f87171'],
      },
    ],
  };

  const cardStyle: React.CSSProperties = {
    background: '#fff',
    padding: '16px',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
    flex: 1,
  };

  const sectionStyle = {
    background: '#fff',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    marginTop: '24px',
  };

  return (
    <div style={{ padding: '32px', background: '#f3f4f6', minHeight: '100vh',flexWrap:'wrap',justifyContent:'flex-start' }}>
      {/* KPI Cards */}
      <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
        <div style={cardStyle}>
          <h3>Total Ratings</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{aboveCount + belowCount}</p>
        </div>
        <div style={cardStyle}>
          <h3>Above 2.0</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#16a34a' }}>{aboveCount}</p>
        </div>
        <div style={cardStyle}>
          <h3>Below 2.0</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#dc2626' }}>{belowCount}</p>
        </div>
      </div>

      {/* Bar Chart */}
      <div style={sectionStyle}>
        <h2 style={{ marginBottom: '16px' }}>Ratings by Role</h2>
        <Bar data={barData} />
      </div>

      {/* Pie Chart */}
      <div style={{ ...sectionStyle, maxWidth: '400px' }}>
        <h2 style={{ marginBottom: '16px' }}>Above vs Below Ratings</h2>
        <Pie data={pieData} />
      </div>

      {/* Top Rated Table */}
      <div style={sectionStyle}>
        <h2 style={{ marginBottom: '16px' }}>Top Rated People</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <th>Name</th>
              <th>Title</th>
              <th>Avg</th>
              <th>👍</th>
              <th>😐</th>
              <th>👎</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #eee' }}>
              <td>Michael Mic</td>
              <td>Manager</td>
              <td>1.0</td>
              <td>2</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Low Rated Table */}
      <div style={sectionStyle}>
        <h2 style={{ marginBottom: '16px' }}>Needs Attention</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <th>Name</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #eee' }}>
              <td>mana mana</td>
              <td>Manager</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #eee' }}>
              <td>First Last</td>
              <td>Manager</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
