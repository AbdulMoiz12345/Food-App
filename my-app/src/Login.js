import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';
export default function Login() {
    const navigate=useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => { // Changed function name
        setPassword(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const handlelogin=async ()=>{
       await axios.post("http://localhost:8000/login",{email,password}).then(res=>{
        console.log(res.data)
        if(res.data==="confirm"){
            navigate("/shop");
           }
           else
           {
            alert("not found")
           }
       })
    }

    return (
        <>
        <div className="register-container1">
            <form onSubmit={handleSubmit}>
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
                <button type="submit" className="submit-button" onClick={handlelogin}>Login</button>
               <Link className="submit-button" to='/register'>Sign Up</Link>
            </form>
        </div>
        <Footer/>
        </>
    );
}
