import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    const res = await axios.post("http://localhost:5000/register", { username, password });
    if (res.data.success) {
        toast.success(res.data.message);
        navigate("/");
    }
    else {
        toast.error(res.data.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
        <p>Already have an account? <Link to='/'>Login</Link></p>
    </div>
  );
}

export default Register;
