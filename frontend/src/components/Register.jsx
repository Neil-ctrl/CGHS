import { useState } from "react";

function Register({ loginStatus, setLoginStatus }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [statusMsg, setStatusMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleRegister = async () => {
    setErrorMsg("");
    setStatusMsg("");

    if (password !== confirm) {
      setErrorMsg("Passwords do not match");
      return;
    }

    const res = await fetch("http://localhost:8000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (data.success) {
      setStatusMsg("Registration successful. You can now log in.");
    } else {
      setErrorMsg(data.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>

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

      <input
        placeholder="Confirm Password"
        type="password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />
      <br/>

      <button onClick={handleRegister}>Create Account</button>
      <button onClick={() => setLoginStatus("logging in")}>Log In Instead</button>

      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
      {statusMsg && <p style={{ color: "green" }}>{statusMsg}</p>}
    </div>
  );
}

export default Register;
