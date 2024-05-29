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
      {/* <header className="flex justify-center items-center w-full shadow-lg h-24 md:h-fit mb-2">
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
      </header> */}

      <div className="w-full md:h-auto bg-white-A700_01 relative flex h-full">
        {/* <Col md className="border-2 border-blue-500 border-dashed"> */}

        <Sidebar
          width="250px !important"
          collapsedWidth="80px !important"
          collapsed={collapsed}
          className="md:hidden relative px-2 flex flex-col pb-9 md:p-5 sm:pb-5 bg-gray-50 shadow-lg h-full m-0  border-2 border-blue-500 border-dashed"
        >
          <Input
            name="search"
            placeholder={`Search Company`}
            value={searchBarValue}
            onChange={(e: string) => setSearchBarValue(e)}
            prefix={
              <Img
                src="images/img_fluent_search_16_regular.svg"
                alt="fluent:search-16-regular"
                className="cursor-pointer"
              />
            }
            suffix={
              searchBarValue?.length > 0 ? (
                <CloseSVG
                  onClick={() => setSearchBarValue("")}
                  height={16}
                  width={16}
                  fillColor="#aeaeb2ff"
                />
              ) : null
            }
            className="flex items-center justify-center w-[90%] h-[32px] mt-[21px] pl-[7px] pr-[35px] gap-2 sm:pr-5 text-gray-500_01 text-xs font-medium border-gray-300 border border-solid rounded-[10px]"
          />
          <div className="flex items-center mt-5 justify-between p-1.5 pr-8">
            <div className="flex items-center gap-1">
              <Img
                src="images/img_fluent_text_bul.svg"
                alt="image"
                className="h-[20px] w-[20px]"
              />
              <Text as="p">Client Companies</Text>
            </div>
            <Img
              src="images/img_frame_234.svg"
              alt="image_one"
              className="h-[10px]"
            />
          </div>

          <Menu
            menuItemStyles={{
              button: {
                padding: "9px 9px 9px 36px",
                alignSelf: "start",
                gap: "8px",
                color: "#9d9d9d",
                fontWeight: 500,
                fontSize: "12px",
                [`&:hover, &.ps-active`]: {
                  color: "#354365",
                  backgroundColor: "#eaeaea !important",
                },
              },
            }}
            className="flex flex-col self-stretch items-center w-full  pb-[15px]"
          >
            <div className="flex flex-col self-stretch gap-[0.22px]">
              <MenuItem>Sirius XM</MenuItem>

              <MenuItem>Microsoft</MenuItem>
              <MenuItem>Caterpillar</MenuItem>
            </div>

            <div className="flex items-center  justify-between p-1.5 pr-8">
              <div className="flex items-center gap-1">
                <Img
                  src="images/img_fluent_history_20_filled.svg"
                  alt="fluenthistory"
                  className="h-[20px] w-[20px]"
                />
                <Text as="p">Yearly Report</Text>
              </div>
              <Img
                src="images/img_frame_234.svg"
                alt="image_one"
                className="h-[10px]"
              />
            </div>
            <div className="flex flex-col self-stretch gap-[0.22px]">
              <MenuItem>2021-2022</MenuItem>
              <MenuItem>2020-2021</MenuItem>
              <MenuItem>2019-2020</MenuItem>
            </div>
            <div className="flex flex-col self-start ">
              <MenuItem
                icon={
                  <Img
                    src="images/img_fluent_form_new_20_regular.svg"
                    alt="fluentformnew"
                    className=" h-[20px] w-[20px]"
                  />
                }
              >
                New Report
              </MenuItem>
            </div>
            <div className="flex flex-col self-start items-start mt-[21px]">
              <Heading
                size="xs"
                as="p"
                className="ml-[13px] md:ml-0 !text-blue_gray-700"
              >
                User
              </Heading>
              <MenuItem
                icon={
                  <Img
                    src="images/img_fluent_person_12_regular.svg"
                    alt="fluentperson"
                    className="h-[16px] w-[16px]"
                  />
                }
              >
                My Account
              </MenuItem>
            </div>
            <div className="flex flex-col self-start items-start ">
              <Heading
                size="xs"
                as="p"
                className="ml-[13px] md:ml-0 !text-blue_gray-700"
              >
                Admin
              </Heading>
              <MenuItem
                icon={
                  <Img
                    src="images/img_fluent_people_team_16_regular.svg"
                    alt="fluentpeople"
                    className="h-[16px] w-[16px]"
                  />
                }
              >
                Account Management
              </MenuItem>
            </div>
            <div className="self-stretch h-px mt-[273px] bg-gray-400_03" />
            <div className="flex flex-col gap-[0.22px]">
              <MenuItem
                icon={
                  <Img
                    src="images/img_fluent_alert_32_regular.svg"
                    alt="fluentalertthir"
                    className="h-[16px] w-[16px]"
                  />
                }
              >
                Notifications
              </MenuItem>
              <MenuItem
                icon={
                  <Img
                    src="images/img_fluent_chat_bub.svg"
                    alt="fluentchatbub"
                    className="h-[16px] w-[16px]"
                  />
                }
              >
                Support
              </MenuItem>
              <MenuItem
                icon={
                  <Img
                    src="images/img_fluent_settings_16_regular.svg"
                    alt="fluentsettings"
                    className="h-[20px] w-[20px]"
                  />
                }
              >
                Settings
              </MenuItem>
            </div>
          </Menu>
        </Sidebar>

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
