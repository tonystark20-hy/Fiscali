import React, { useState } from 'react';
import { Img, Text, Heading, Button, SelectBox } from "../../components";

const CellComponent: React.FC<{ initialValue: string }> = ({ initialValue }) => {
  const [value, setValue] = useState<string>(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Text
      as="p"
      className="flex items-center h-[36px] !font-normal bg-white-A700"
    >
      <input 
        type="text" 
        className="text-left" 
        value={value} 
        onChange={handleChange} 
      />
    </Text>
  );
};

export default CellComponent;