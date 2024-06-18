import React, { useState } from 'react';
import _ from 'lodash';
import './AssetTable.css';

const data = [
  { assetNumber: '001', hostname: 'host1', user: 'user5', registrationDate: '2023-01-01' },
  { assetNumber: '002', hostname: 'host2', user: 'user5', registrationDate: '2023-02-01' },
  { assetNumber: '003', hostname: 'host3', user: 'user5', registrationDate: '2023-03-01' },
  { assetNumber: '004', hostname: 'host1', user: 'user5', registrationDate: '2023-01-01' },
  { assetNumber: '005', hostname: 'host2', user: 'user4', registrationDate: '2023-02-01' },
  { assetNumber: '006', hostname: 'host3', user: 'user7', registrationDate: '2023-03-01' },
  { assetNumber: '007', hostname: 'host1', user: 'user11', registrationDate: '2023-01-01' },
  { assetNumber: '008', hostname: 'host2', user: 'user22', registrationDate: '2023-02-01' },
  { assetNumber: '009', hostname: 'host3', user: 'user3', registrationDate: '2023-03-01' },
  { assetNumber: '0010', hostname: 'host1', user: 'user1', registrationDate: '2023-01-01' },
  { assetNumber: '0011', hostname: 'host2', user: 'user2', registrationDate: '2023-02-01' },
  
  // ... add more sample data as needed
];

const AssetTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const pageSize = 10;

  const handleSort = (field) => {
    const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortOrder(order);
  };

  const sortedData = sortField ? _.orderBy(data, [sortField], [sortOrder]) : data;
  const paginatedData = _.chunk(sortedData, pageSize)[currentPage - 1];

  const totalPages = Math.ceil(data.length / pageSize);

  return (
    <div className="asset-table">
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('assetNumber')}>자산번호</th>
            <th onClick={() => handleSort('hostname')}>호스트네임</th>
            <th onClick={() => handleSort('user')}>사용자</th>
            <th onClick={() => handleSort('registrationDate')}>등록날짜</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData && paginatedData.map((item, index) => (
            <tr key={index}>
              <td>{item.assetNumber}</td>
              <td>{item.hostname}</td>
              <td>{item.user}</td>
              <td>{item.registrationDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? 'active' : ''}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AssetTable;