import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Img, Heading, Button } from "../../components";
import { Input } from "../../components/Input";

import CovenantComplianceResultsRowupload from "../../components/CovenantComplianceResultsRowupload";
import { useNavigate } from "react-router-dom";
import "./index.css";

import SideBar from "components/SideBar";
import Header from "components/Header";
import { Container, Col, Row } from "react-bootstrap";

export default function LoginPage({ loginSuccess, setLoginSuccess }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const [collapsed, setCollapsed] = React.useState(false);
  const navigate = useNavigate();

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");

  const dummyUsername = "fiscali0000";
  const dummyPassword = "fiscali1234";

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username === dummyUsername && password === dummyPassword) {
      setMessage("Login successful!");
      setMessageColor("green");
      setLoginSuccess(true);
      navigate("/");
    } else {
      setMessage("Invalid username or password.");
      setMessageColor("red");
    }
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const [messageColor, setMessageColor] = React.useState<string>("red");

  return (
    <>
      <Helmet>
        <title>Fiscali</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>

      <div className="w-full h-[80vh] bg-white-A700_01 relative flex">
        {/* <SideBar/> */}

        <div className="flex  justify-end items-start w-full ">
          <div className="flex  justify-between w-full md:w-full mt-[9px] gap-5">
            <div
              className="mx-auto my-36 login-container p-6 rounded bg-white w-96 shadow-xl"
              // style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}
            >
              <h1 className="text-2xl mb-4 text-center">Login</h1>
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label htmlFor="username" className="block mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Login
                </button>
              </form>
              <div
                id="message"
                className="mt-4 text-center"
                style={{ color: messageColor }}
              >
                {message}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
