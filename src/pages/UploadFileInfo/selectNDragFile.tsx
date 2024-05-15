import { Heading } from "components/Heading";
import { Img } from "components/Img";
import React, { useState } from "react";
import { Text, Button } from "../../components";

const SelectNDragFile = () => {
  const [file, setFile] = useState(null);

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    // console.log(event.dataTransfer.files);
    // setFiles(event.dataTransfer.files);
    const droppedFile = event.dataTransfer.files[0];
    setFile(droppedFile);
  };

  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  return (
    <>
      <div className="flex md:flex-col items-center mt-3.5 border-black-900 border border-solid">
        <Text
          size="md"
          as="p"
          className="flex justify-center items-center h-[45px] pl-[26px] pr-[35px] py-3 md:p-5 sm:px-5 !text-gray-400_01 border-indigo-800 border border-solid bg-white-A700_01"
        >
          Choose files to upload
        </Text>
        <input
          type="file"
          className="hidden"
          id="fileInput"
          onChange={handleFileInputChange}
        />
        <label
          htmlFor="fileInput"
          // id={inputId}
          className="flex self-start items-center justify-center h-[43px] px-[35px] md:p-5 sm:px-5 text-white-A700_01 text-center text-base font-medium bg-indigo-800 min-w-[177px] rounded-[3px] cursor-pointer"
        >
          Browse Files
        </label>
      </div>

      <div onDragOver={handleDragOver} onDrop={handleDrop} className="w-full">
        <div className="flex flex-col items-center justify-center w-full md:w-full mt-[22px] gap-12 p-14 py-[75px] md:p-5 border-gray-400 border border-dashed bg-gray-100">
          <Img
            src="images/img_line_md_cloud_upload_loop.svg"
            alt="linemdcloud_one"
            className="h-[86px] w-[86px] mt-2.5"
          />
          <Heading size="md" as="h1" className="!text-gray-500_02">
            Drag and drop files here
          </Heading>
        </div>
        {file && (
          <div className="mt-4 text-[#4270bb] text-md">
            <ul>
              {/* {Array.from(file).map((file: File, idx: number) => (
                <li key={idx}>{file.name}</li>
              ))} */}
              <li>{file.name}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default SelectNDragFile;
