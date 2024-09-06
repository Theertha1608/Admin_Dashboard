import React, { useState } from 'react'
import './recentSales.css'
import RecentSalesTable from './RecentSalesTable'
import CardFilter from './CardFilter'


function RecentSales() {

  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('Today');
  const handleFilterChange = filter => {
      setFilter(filter);
  };

  return (
    <div className='card recent-sales overflow-auto'>
    <CardFilter filterChange={handleFilterChange} />
    
    <div className='card-body'>
        <h5 className='card-title'>
            Recent Sales <span> | {filter}</span>
        </h5>
        <RecentSalesTable itmes={items} />
    </div>
</div>
  )
}

export default RecentSales
