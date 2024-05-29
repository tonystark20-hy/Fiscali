import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Img, Heading, Button } from "../../components";
import { Input } from "../../components/Input";

import CovenantComplianceResultsRowupload from "../../components/CovenantComplianceResultsRowupload";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import "./index.css";

import SelectNDragFile from "./selectNDragFile";
import SideBar from "components/SideBar";
import { Container, Col, Row } from "react-bootstrap";

export default function UploadFileInfoPage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const [collapsed, setCollapsed] = React.useState(false);

  const navigate = useNavigate();

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  function handleFileChange(files) {
    const fileInput = document.getElementById("fileInput");
    const fileInputLabel = document.getElementById("fileInputLabel");

    console.log("file");

    if (files.length > 0) {
      fileInputLabel.textContent = files[0].name; // Display the chosen file name
    } else {
      fileInputLabel.textContent = "Browse Files"; // Reset label text if no file is chosen
    }
  }

  return (
    <>
      <Helmet>
        <title>Fiscali 2</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <header className="flex justify-center items-center w-full shadow-lg h-24 md:h-fit mb-2">
        <div className="flex w-[100%] md:w-full  ">
          <Img
            src="images/img_image_23.png"
            className="h-[60px] w-[200px] md:h-auto md:w-auto object-cover"
          />
        </div>
        <div className="whitespace-nowrap w-[94%] flex self-start justify-between  my-auto ">
          <div className="w-[13%] object-cover"></div>
          <div className="flex item-center gap-[17px] px-5 ">
            <Img
              src="images/img_fluent_person_12_regular.svg"
              alt="fluentperson"
              className="self-start h-[19px]"
            />
            <Text as="p">Henry Coleman</Text>
          </div>
        </div>
      </header>

      <div className="w-full md:h-auto bg-white-A700_01 relative flex h-full">

        <SideBar/>

        <div className="flex md:flex-col justify-end items-start w-[82%] gap-6 pl-10 mb-20">
          <div className="flex flex-col items-start md:self-stretch mt-14 flex-1 w-full">
            <Text size="xl" as="p">
              Upload Documents
            </Text>
            <div className="flex md:flex-col justify-between w-[83%] md:w-full mt-[9px] gap-5">
              <div className="flex md:flex-col md:self-stretch gap-[7px] flex-1">
                <CovenantComplianceResultsRowupload
                  upload1="images/img_arrow_right.svg"
                  status="active"
                  className="flex items-center gap-1 text-red-400"
                />

                <CovenantComplianceResultsRowupload
                  upload="Review Financial Spreads"
                  upload1="images/img_arrow_right.svg"
                  className="flex items-center gap-1 "
                />

                <CovenantComplianceResultsRowupload
                  upload="Review Covenant Matches"
                  upload1="images/img_arrow_right.svg"
                  className="flex items-center gap-1 "
                />

                <CovenantComplianceResultsRowupload
                  upload="Covenant Compliance Results"
                  className="flex items-center gap-1 "
                />
              </div>
            </div>

            <Text size="lg" as="p" className="mt-[23px]">
              Upload Financial Statement
            </Text>
            <Text size="md" as="p" className="mt-[9px]">
              Please upload PDF, Word or HTML file below. Please keep file size
              under 10 MB.
            </Text>
            <SelectNDragFile />

            <Text size="lg" as="p" className="mt-[53px]">
              Upload Credit Agreement
            </Text>
            <Text size="md" as="p" className="mt-[22px]">
              Please upload PDF, Word or HTML file below. Please keep file size
              under 10 MB.
            </Text>

            <SelectNDragFile />

            <Button
              className="flex whitespace-nowrap items-center justify-center h-[39px]  px-[35px]  text-white-A700_01 text-center text-base font-medium bg-indigo-800 rounded-[3px] mt-20  ml-auto "
              onClick={() => navigate("reviewfinancialspreads")}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
