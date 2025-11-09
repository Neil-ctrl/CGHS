import { useState } from "react";

function Login({ isLogin, setIsLogin }) {
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
    <div>
      <h2>Login</h2>
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br/>
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br/>
      <button onClick={handleLogin}>Login</button>

      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
    </div>
  );
}

export default Login;