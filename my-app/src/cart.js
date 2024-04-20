import React, { useContext } from 'react';
import { Itemcontext } from './Shopcontext';
import './App.css';
import Cartitem from './Cartitem';

export default function Cart() {
  const { cartitem } = useContext(Itemcontext);
  const total = cartitem.reduce((acc, currentItem) => acc + currentItem.price, 0);

  return (
    <div>
      {cartitem.length === 0 ? (
        <p className='nothing'>Nothing in cart</p>
      ) : (
        <div>
          <table style={{ color: 'white' }}>
            <thead>
              <tr>
                <th className='th'>Name</th>
                <th className='th'>Quantity</th>
                <th className='th'>Amount</th>
                <th className='th'>Price</th>
                <th className='th'>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cartitem.map((singleItem, index) => (
                <Cartitem key={index} item={singleItem} />
              ))}
            </tbody>
          </table>
          <div className='check'>
            <p>Total: {total}</p>
            <button>Check Out</button>
          </div>
        </div>
      )}
    </div>
  );
}

