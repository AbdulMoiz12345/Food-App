import React, { useContext, useState } from 'react';
import { Itemcontext } from './Shopcontext';
import './App.css';

export default function Item({ item }) {
  const { setcartitem,cartitem } = useContext(Itemcontext);
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState('Half'); // Initialize with 'Half'

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleAddToCart = () => {
    const selectedPrice = selectedOption === 'Half' ? item.options[0].half : item.options[0].full;

    const newItem = {
      name: item.name,
      quantity: quantity,
      amount: selectedOption,
      price: selectedPrice*quantity // Set the selected price
    };
    setcartitem([...cartitem,newItem]);
    console.log(cartitem);
  };

  return (
    <div className="item">
      <img src={item.img} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <div className='collect'>
      <div className="quantity">
        <label style={{color:'black',fontWeight:"bold",marginLeft:'10px'}}>Quantity:</label>
        <br/>
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
          style={{width:'80px',margin:'10px'}}
        />
      </div>
      <div className="options">
        <select className='select' value={selectedOption} onChange={handleOptionChange}>
          <option value="Half">Half:{item.options[0].half}</option>
          <option value="Full">Full:{item.options[0].full}</option>
        </select>
      </div>
      </div>
      <button className='btn' onClick={handleAddToCart}>Add To Cart</button>
    </div>
  );
}
