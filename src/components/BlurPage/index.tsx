import React, { useEffect, useState } from 'react';
import './index.css'; // Make sure to create and import the CSS file
import { useNavigate } from "react-router-dom";
import { Text, Img, Heading, Button, SelectBox } from "../../components";


const BlurPage = () => {
  const [isTokenValid, setIsTokenValid] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Example: Check for a token stored in local storage (you can adjust this logic)
    const token = localStorage.getItem('authToken');
    

    // Function to check if the token is valid (you can replace this with your own validation logic)
    const isValidToken = (token) => {
      // For demonstration, consider any non-null, non-empty token as valid
      return token && token !== '';
    };

    // Set the state based on token validity
    setIsTokenValid(isValidToken(token));
  }, []);

  const navigateLogin = () => {
    // Navigate to the '/reviewcovenantmatches' route
    navigate("/login");
  };

  return (
    <>
      {!isTokenValid && (
        <div id="blur-cover" className="flex flex-col">
          <div className="flex">
            <div className="message">
              Access Denied
            </div>
          </div>
          <Button
            className="flex whitespace-nowrap items-center justify-center h-[39px]  px-[35px]  text-white-A700_01 text-center text-base font-medium bg-indigo-800 rounded-[3px]"
            onClick={navigateLogin}
          >Login here
          </Button>
        </div>
      )}
    </>
  );
};

export default BlurPage;