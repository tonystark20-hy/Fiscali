import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Img, Heading, Button } from "../../components";
import { Input } from "../../components/Input";

import CovenantComplianceResultsRowupload from "../../components/CovenantComplianceResultsRowupload";
import { useNavigate } from "react-router-dom";
import "./index.css";

import SelectNDragFile from "./selectNDragFile";
import SideBar from "components/SideBar";
import Header from "components/Header";
import BlurPage from "components/BlurPage";
import { Container, Col, Row } from "react-bootstrap";

export default function UploadFileInfoPage({ loginSuccess }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const [collapsed, setCollapsed] = React.useState(false);

  const navigate = useNavigate();

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  const [isFinancialSelected, setIsFinancialSelected] = React.useState(false);
  const [isCreditSelected, setIsCreditSelected] = React.useState(false);

  // function handleFileChange(files) {
  //   const fileInput = document.getElementById("fileInput");
  //   const fileInputLabel = document.getElementById("fileInputLabel");

  //   console.log("file");

  //   if (files.length > 0) {
  //     fileInputLabel.textContent = files[0].name; // Display the chosen file name
  //   } else {
  //     fileInputLabel.textContent = "Browse Files"; // Reset label text if no file is chosen
  //   }
  // }
  useEffect(() => {
    if (!loginSuccess) {
      navigate("login");
    }
  }, [loginSuccess]);

  console.log("loginSuccess:", loginSuccess);

  const handleFinancialChange = (isSelected) => {
    setIsFinancialSelected(isSelected);
    console.log(isSelected)
    console.log(isFinancialSelected)
  };

  const handleCreditChange = (isSelected) => {
    setIsCreditSelected(isSelected);
    console.log(isCreditSelected)
  };

  return (
    <>
      {!loginSuccess && <BlurPage />}
      <Helmet>
        <title>Fiscali</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>

      <div className="app-container">
        <div className="w-full bg-white-A700_01 relative flex">
          <SideBar />

          <div className="content-container flex md:flex-col justify-end items-start w-[82%] pl-10">
            <div className="flex flex-col items-start md:self-stretch mt-14 flex-1">
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
                Please upload PDF, Word or HTML file below. Please keep file
                size under 10 MB.
              </Text>
              
              <SelectNDragFile onFileChange={handleFinancialChange} />

              <Text size="lg" as="p" className="mt-[53px]">
                Upload Credit Agreement
              </Text>
              <Text size="md" as="p" className="mt-[22px]">
                Please upload PDF, Word or HTML file below. Please keep file
                size under 10 MB.
              </Text>

              <SelectNDragFile onFileChange={handleCreditChange} />

              <Button
                className="flex whitespace-nowrap items-center justify-center h-[39px]  px-[35px]  text-white-A700_01 text-center text-base font-medium bg-indigo-800 rounded-[3px] mt-20  ml-auto "
                onClick={() => navigate("/reviewfinancialspreads")}
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
