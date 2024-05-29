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

  // const handleChange = (event) => {
  //   onFinderClick(event.target.value);
  // };

  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const handleFileClick = (file: string) => {
    setSelectedFile(file);
    onFinderClick(file);
  };

  return (
    <div>
      <table id="cr">
        <thead>
          <tr>
            <th>Folders</th>
            <th>Files</th>
          </tr>
        </thead>
        <tbody>
          {filenames.map((category, index) => (
            <tr key={index}>
              <td
                className={
                  category.folders === "Documents"
                    ? "bg-[#2963d9] text-white-A700_02"
                    : ""
                }
                // bg-[#dcdcdc]
              >
                {category.folders}
              </td>
              <td
                className={`${
                  selectedFile === category.files
                    ? "bg-[#2963d9] text-white-A700_02"
                    : ""
                }  cursor-pointer`}
                onClick={() => handleFileClick(category.files)}
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
