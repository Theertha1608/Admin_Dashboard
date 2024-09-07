import React, { useEffect, useState } from 'react';
import RecentSalesTable from './RecentSalesTable';
import './recentSales.css'
import CardFilter from './CardFilter';

function RecentSales() {
  const [sales, setSales] = useState([]);
  const [filter, setFilter] = useState('Today');
    const handleFilterChange = filter => {
        setFilter(filter);
    };

  const fetchSalesData = () => {
    fetch('http://localhost:5000/recentsales')
      .then((res) => res.json())
      .then((data) => {
        setSales(data);
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchSalesData();  
  }, []);
  return (
    <div className='card recent-sales table overflow-auto dataTable-top'>
  
<div className='card-body pb-0'>
    <h5 className='card-title'>
        Recent Sales <span> | {filter} </span>
    </h5>
        <CardFilter filterChange={handleFilterChange}/>
      <RecentSalesTable items={sales} />
    </div>
    </div>
  );
}

export default RecentSales;