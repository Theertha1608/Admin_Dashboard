import React, { useEffect, useState } from 'react';
import RecentSalesTable from './RecentSalesTable';

function RecentSales() {
  const [sales, setSales] = useState([]);

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
    <div>
      <RecentSalesTable items={sales} />
    </div>
  );
}

export default RecentSales;
