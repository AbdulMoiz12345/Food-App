import React, { useContext } from 'react';
import { Itemcontext } from './Shopcontext';
import './App.css';

export default function Cartitem({ item }) {
  const { cartitem, setcartitem } = useContext(Itemcontext);

  const handleDelete = () => {
    const updatedCart = cartitem.filter((cartItem) => cartItem.key !== item.key);
    setcartitem(updatedCart);
  };

  return (
    <tr>
      <th className='th1'>{item.name}</th>
      <th className='th1'>{item.quantity}</th>
      <th className='th1'>{item.amount}</th>
      <th className='th1'>{item.price}</th>
      <th className='th'>
        <button className='delete' onClick={handleDelete}>
          Delete
        </button>
      </th>
    </tr>
  );
}
