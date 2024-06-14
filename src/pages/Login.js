import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";

function Login() {
  const globalData = useOutletContext();
  const login = globalData.login;
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleLogin(e) {
    e.preventDefault();
    login();
  }

  return (
    <div className="login-page">
      <div className="login-form-container">
        <h1 className="login-form-title">BookOps</h1>
        <form onSubmit={(event) => handleLogin(event)}>
          <div>
            <TextField
              type="text"
              required
              id="username"
              name="username"
              label="Username"
              variant="standard"
              value={formData.username}
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div>
            <TextField
              type="password"
              required
              id="password"
              name="password"
              label="Password"
              variant="standard"
              onChange={(event) => handleChange(event)}
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            endIcon={<LoginIcon />}
            sx={{ textTransform: "capitalize", fontFamily: "Poppins" }}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
