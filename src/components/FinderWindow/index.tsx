import React, { useState } from "react";
import "./index.css";

interface TableComponentProps {
  filenames: Category[];
  onFinderClick: (category: string) => void;
}

interface Category {
  folders: string;
  files: string;
}

// const CategoryRanking: React.FC<{ initialValue: string }> = ({ initialValue }) => {

const FinderWindow: React.FC<TableComponentProps> = ({
  filenames,
  onFinderClick,
}) => {
  const [value, setValue] = useState();

  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const handleFileClick = (file: string) => {
    setSelectedFile(file);
    onFinderClick(file);
  };

  return (
    <div className=" mb-40">
      <table id="cr">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filenames.map((category, index) => (
            <tr
              key={index}
              className={`${
                selectedFile === category.folders
                  ? "bg-[#2963d9] text-white-A700_02 rounded-3xl"
                  : "text-black-900"
              }  cursor-pointer whitespace-nowrap`}
              onClick={() => handleFileClick(category.folders)}
            >
              <td
                className={`${
                  selectedFile === category.folders ? "bg-[#2963d9]" : ""
                }`}
              >
                {category.folders}
              </td>
              <td
                className={`${
                  selectedFile === category.folders ? "bg-[#2963d9] " : ""
                }`}
              >
                {category.files}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinderWindow;
