import React, { useEffect, useState } from "react";

const Loader = ({ targetPercentage }) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
    const updateLoader = () => {
      const increment = 1; 
      const newPercentage = currentPercentage + increment;

      if (newPercentage <= targetPercentage) {
        setCurrentPercentage(newPercentage);
      } else {
        setCurrentPercentage(targetPercentage); // Ensure it doesn't go beyond the targetPercentage
      }
    };

    const intervalId = setInterval(updateLoader, 10); // You can adjust the interval duration

    return () => clearInterval(intervalId);
  }, [currentPercentage, targetPercentage]);

  return (
    <div className="loader-container">
      <div className="loader-bar" style={{ width: `${currentPercentage}%` }}></div>
    </div>
  );
};

export default Loader;
