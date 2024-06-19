import { Heading } from "components/Heading";
import { Img } from "components/Img";
import React, { useState } from "react";
import { Text, Button } from "../../components";
// import FinderWindow from "../../components/FinderWindow";
import FinderWindow from "../../components/FinderWindow";
import Finder from "./finder";

const SelectNDragFile = () => {
  const [file, setFile] = useState(null);
  const [finder, setFinder] = useState(false);
  const [selectedFilename, setSelectedFilename] = useState<string>("");
  const [uploadedFile, setUploadedFile] = useState<string>("");
  const [screenshot, setScreenshot] = useState(null);

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

  const openFinder = () => {
    setFinder(!finder);
    setSelectedFilename("");
  };

  const uploadFile = () => {
    setFinder(!finder);
    if (selectedFilename.length > 0) {
      setUploadedFile(selectedFilename);
    }
  };

  const filenames = [
    { folders: "Documents", files: "SiriusXM 10-K - FY2021" },
    {
      folders: "Desktop",
      files: "SiriusXM Credit Agreement - Dated 12.05.2012",
    },
    { folders: "Downloads", files: "" },
    // { folders: " ", files: " " },
    // { folders: " ", files: " " },
  ];

  const handleFinderClick = (filename: string) => {
    setSelectedFilename(filename);
    console.log(selectedFilename);
  };

  return (
    <>
      <div className="relative flex md:flex-col items-center mt-3.5 border-black-900 border border-solid">
        <Text
          size="md"
          as="p"
          className="flex justify-center items-center h-[45px] pl-[26px] pr-[35px] py-3 md:p-5 sm:px-5 !text-gray-400_01 border-indigo-800 border border-solid bg-white-A700_01 w-[50%] md:w-full whitespace-nowrap"
        >
          Choose files to upload
        </Text>
        {/* <input
          type="file"
          className="hidden"
          id="fileInput"
          onChange={handleFileInputChange}
        /> */}
        {/* <label
          htmlFor="fileInput"
          // id={inputId}
          className="flex self-start items-center justify-center h-[43px] px-[35px] md:p-5 sm:px-5 text-white-A700_01 text-center text-base font-medium bg-indigo-800 min-w-[177px] rounded-[3px] cursor-pointer"
        >
          Browse Files
        </label> */}
        <button
          onClick={openFinder}
          className="flex self-start items-center justify-center h-[43px] px-[35px] md:p-5 sm:px-5 text-white-A700_01 text-center text-base font-medium bg-indigo-800 min-w-[177px] rounded-[3px] cursor-pointer md:w-full w-[50%]"
        >
          Browse Files
        </button>

        {finder && (
          <>
            <div
              className="fixed inset-0 bg-gray-800 bg-opacity-90 z-30"
              // Close finder when clicking outside
            ></div>{" "}
            <div className="fixed inset-0 flex items-center justify-center z-40">
              <div className=" w-fit h-fit text-black-900 bg-gray-300 font-medium  shadow-2xl z-40 rounded-[6px]">
                <div className="relative flex flex-col h-full p-4">
                  <FinderWindow
                    filenames={filenames}
                    onFinderClick={handleFinderClick}
                  />
                  <div className="relative ml-auto mt-10">
                    <button
                      onClick={openFinder}
                      className="text-white-A700_01 text-center text-base font-medium bg-indigo-800 min-w-[100px] rounded-[3px] cursor-pointer mr-2"
                    >
                      cancel
                    </button>
                    <button
                      disabled={selectedFilename.length === 0}
                      onClick={
                        selectedFilename.length > 0 ? uploadFile : undefined
                      }
                      className={`text-white-A700_01 text-center text-base font-medium min-w-[100px] rounded-[3px] relative ml-auto mt-auto ${
                        selectedFilename.length > 0
                          ? "cursor-pointer bg-indigo-800"
                          : "cursor-not-allowed bg-white text-[#c6c6c6]"
                      }`}
                    >
                      upload
                    </button>
                  </div>
                  <Finder />
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div onDragOver={handleDragOver} onDrop={handleDrop} className="w-full">
        {uploadedFile.length > 0 && (
          <>
            <div className="mt-2 text-[#4270bb] text-md">
              Uploaded: {uploadedFile}{" "}
            </div>
            <div className="w-[80%] mt-2 border-2 border-solid  border-gray-500 border-opacity-20">
              {uploadedFile === "SiriusXM 10-K - FY2021" ? (
                <img src="/images/financial_statement.png" alt="" />
              ) : (
                <img src="/images/credit_agreement.png" alt="" />
              )}
            </div>
          </>
        )}

        {!uploadedFile && (
          <div className="flex flex-col items-center justify-center w-[90%] mt-[22px] gap-12 p-14 py-[75px] md:p-5 border-gray-400 border border-dashed bg-gray-100">
            <Img
              src="images/img_line_md_cloud_upload_loop.svg"
              alt="linemdcloud_one"
              className="h-[86px] w-[86px] mt-2.5"
            />
            <Heading size="md" as="h1" className="!text-gray-500_02">
              Drag and drop files here
            </Heading>
          </div>
        )}
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
