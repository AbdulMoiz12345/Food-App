import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Item from './item';
import './App.css'; // Import the Shop CSS
import Footer from './Footer';

export default function Shop() {
  const [search, setsearch] = useState('');
  const [item, setitem] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios.get("http://localhost:8000/getdata").then((response) => {
        setitem(response.data);
      });
    }
    fetchData();
  }, []);

  // Filter items based on the search query
  const filteredItems = item.filter((singleItem) => {
    return singleItem.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <textarea className='search' placeholder='search' value={search} onChange={(e) => { setsearch(e.target.value); }} />
      <div className="item-list">
        {filteredItems.map((singleItem, index) => (
          <>
          <Item key={index} item={singleItem} />
          </>
        ))}
      </div>
      <Footer />
    </>
  );
}


