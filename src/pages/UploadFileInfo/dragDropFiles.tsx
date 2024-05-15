import { Heading } from "components/Heading";
import { Img } from "components/Img";
import { link } from "fs";
import React, { useState } from "react";

const DragDropFiles = () => {
  const [files, setFiles] = useState(null);
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    console.log(event.dataTransfer.files);
    setFiles(event.dataTransfer.files);
  };

  return (
    <>
      <div onDragOver={handleDragOver} onDrop={handleDrop} className="w-full">
        {/* <h1> Drag and drop files here</h1> */}
        <input
          type="file"
          multiple
          onChange={(event) => setFiles(event.target.files)}
          hidden
        />

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

        {files && (
          <div className="mt-4 text-[#4270bb] text-sm">
            <ul>
              {Array.from(files).map((file: File, idx: number) => (
                <li key={idx}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default DragDropFiles;

<div className="flex flex-col items-center justify-center w-[96%] md:w-full mt-[22px] gap-12 px-14 py-[75px] md:p-5 border-gray-400 border border-dashed bg-gray-100">
  <Img
    src="images/img_line_md_cloud_upload_loop.svg"
    alt="linemdcloud_one"
    className="h-[86px] w-[86px] mt-2.5"
  />
  <Heading size="md" as="h1" className="!text-gray-500_02">
    Drag and drop files here
  </Heading>
</div>;
