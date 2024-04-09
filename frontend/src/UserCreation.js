// UserCreation.js

import React, { useState } from "react";
import axios from "axios";

function UserCreation({ onUserCreation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleUserCreation = async () => {
    try {
      const response = await axios.post("http://localhost:3001/V1/api/user", {
        username,
        password,
        role,
      });
      const token = response.data.token;
      onUserCreation(token);
      // Optionally, you can also save the token to local storage or session storage for persistent authentication
    } catch (error) {
      alert("User creation failed");
    }
  };

  return (
    <div className="user-creation-container">
      <h2>Create User</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input"
      />
      <input
        type="role"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="input"
      />
      <button onClick={handleUserCreation} className="button">
        Create User
      </button>
    </div>
  );
}

export default UserCreation;
