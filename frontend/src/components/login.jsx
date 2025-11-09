import { useState } from "react";
import "../styles/login.css";

function Login({ isLogin, setIsLogin, loginStatus, setLoginStatus }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async () => {
    const res = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (data.success) {
      setIsLogin(true);
    } else {
      setErrorMsg(data.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Chhattisgarh Hastkala Samriddhi</h2>
        </div>
        <div className="login-form">
        <div className="input-group">
        <label htmlFor="username">Username</label>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        </div>
        <div className="input-group">
        <label htmlFor="password">Password</label>
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>

        {errorMsg && (
          <div className="error-message">
          <span className="error-icon">⚠️</span>
          {errorMsg}
          </div>
        )}


        <button className='login-button' onClick={handleLogin}>Log In</button>
        </div>

        <div className="login-footer">
          <p>
            Don't have an account? <a href="#" onClick={() => setLoginStatus("registering")}>Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;