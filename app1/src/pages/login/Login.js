import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import { useContext } from "react";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  const hdlChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const hdlClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      console.log("data to login", credentials);
      const res = await axios.post(
        "http://localhost:8800/api/auth/login",
        credentials
      );

      console.log("returnv alue", res);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILED", payload: err.response.data });
    }
  };
  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          className="usename"
          id="username"
          onChange={hdlChange}
          value={credentials.username}
        />
        <input
          type="text"
          className="password"
          id="password"
          onChange={hdlChange}
          value={credentials.password}
        />
        <button className="lButton" onClick={hdlClick}>
          Login
        </button>

        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
