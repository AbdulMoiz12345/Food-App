import React, { useState } from 'react';
import './App.css'; // Import your CSS file
import axios from 'axios';
import Footer from './Footer';
export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [address, setAddress] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => { // Changed function name
        setPassword(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };
    const handle=async()=>{
       await axios.post("http://localhost:8000/register",{email,password,address}).then(alert("You have registered") ,setEmail(''),
       setPassword(''),
       setAddress(''))
    }

    return (
        <>
        <div className="register-container">
            <form>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    className="input-field"
                />
                <input
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={handlePasswordChange} 
                    className="input-field"
                />
                <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={handleAddressChange}
                    className="input-field"
                />
                <button type="submit" className="submit-button" onClick={handle}>Submit</button>
            </form>
        </div>
        <Footer/>
        </>
    );
}
