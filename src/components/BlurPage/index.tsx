import React, { useEffect, useState } from 'react';
import './index.css'; // Make sure to create and import the CSS file

const BlurPage = () => {
  const [isTokenValid, setIsTokenValid] = useState(true);

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

  return (
    <>
      {!isTokenValid && (
        <div id="blur-cover">
          <div className="message">
            Access Denied
          </div>
        </div>
      )}
    </>
  );
};

export default BlurPage;