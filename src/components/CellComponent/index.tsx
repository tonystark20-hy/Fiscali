import React, { useState, useEffect  } from "react";
import { Img, Text, Heading, Button, SelectBox } from "../../components";

interface CellComponentProps {
  initialValue: string;
  onChange: (value: string) => void;
  category: string;
}

const CellComponent: React.FC<CellComponentProps> = ({ initialValue, onChange, category }) => {
  // const CellComponent: React.FC<CellComponentProps> = ({ initialValue }) => {
  const [value, setValue] = useState<string>(initialValue);


  useEffect(() => {
    console.log("Updated category prop:", category);
    // setValue(category)
  }, [category]);



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <Text
      as="p"
      className="flex items-center  !font-normal bg-white-A700"
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
