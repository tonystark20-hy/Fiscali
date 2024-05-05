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
      className="flex justify-center items-center h-[36px] !font-normal border-teal-50 border border-solid bg-white-A700"
    >
      <input 
        type="text" 
        className="mr-2 w-16 text-center" 
        value={value} 
        onChange={handleChange} 
      />
    </Text>
  );
};

export default CellComponent;