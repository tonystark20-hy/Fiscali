import React, { useState } from 'react';

const Checkbox = ({ initialChecked }) => {
  const [isChecked, setIsChecked] = useState(initialChecked);

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//   };

  return (
    <div className="h-[36px] flex items-center justify-center">
    <input
      type="checkbox"
      checked={isChecked}
      style={{
        appearance: "none", // Hide default checkbox appearance
        width: "20px",
        height: "20px",
        borderRadius: "15%", // Rounded checkbox
        border: "2px solid #4CAF50", // Green border
        backgroundColor: isChecked ? '#4CAF50' : '#fff', // Green background if checked
        position: "relative",
        cursor: "pointer", // Show pointer cursor when hovering
        transition: "background-color 0.3s ease", // Smooth transition for background color change
      }}
    />
    </div>
  );
};

export default Checkbox;