import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Img, Heading, Button } from "../../components";
import {Input} from '../../components/Input';

import CovenantComplianceResultsRowupload from "../../components/CovenantComplianceResultsRowupload";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import { useNavigate } from 'react-router-dom';
import './index.css'


export default function UploadFileInfoPage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const [collapsed, setCollapsed] = React.useState(false);

  const navigate = useNavigate();

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  function handleFileChange(files) {
    const fileInput = document.getElementById('fileInput');
    const fileInputLabel = document.getElementById('fileInputLabel');
  
    console.log("file")

    if (files.length > 0) {
      fileInputLabel.textContent = files[0].name; // Display the chosen file name
    } else {
      fileInputLabel.textContent = 'Browse Files'; // Reset label text if no file is chosen
    }
  }

  return (
    <>
      <Helmet>
        <title>Fiscali 2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      <header className="flex justify-center items-center w-full pt-[15px]">
              <div className="flex w-[100%] md:w-full">
                <Img
                  src="images/img_image_23.png"
                  className="h-[60px] w-[200px] md:h-auto md:w-auto object-cover"
                />
              </div>
            
          <div className="flex self-start justify-between items-center w-[94%] md:w-full ml-0.5 gap-5 md:ml-0">
            <div className="w-[13%] object-cover"></div>
            <div className="flex items-center gap-[17px] p-5">
              <Img src="images/img_fluent_person_12_regular.svg" alt="fluentperson" className="self-start h-[16px]" />
              <Text as="p">Henry Coleman</Text>
            </div>
          </div>

      </header>

      <div className="h-[1024px] w-full md:h-auto bg-white-A700_01 relative flex">
        <Sidebar
          width="205px !important"
          collapsedWidth="80px !important"
          collapsed={collapsed}
          className="flex flex-col h-screen pb-9 top-0 md:p-5 sm:pb-5 bg-gray-50 shadow-sm !sticky overflow-auto md:hidden"
        >

          <Input
            name="search"
            placeholder={`Search`}
            value={searchBarValue}
            onChange={(e: string) => setSearchBarValue(e)}
            prefix={
              <Img
                src="images/img_fluentsearch16regular.svg"
                alt="fluent:search-16-regular"
                className="cursor-pointer"
              />
            }
            suffix={
              searchBarValue?.length > 0 ? (
                <CloseSVG onClick={() => setSearchBarValue("")} height={16} width={16} fillColor="#aeaeb2ff" />
              ) : null
            }
            className="flex items-center justify-center w-[90%] h-[32px] mt-[21px] pl-[7px] pr-[35px] gap-2 sm:pr-5 text-gray-500_01 text-xs font-medium border-gray-300 border border-solid rounded-[10px]"
          />
          <div className="flex items-center mt-5 gap-[26px] p-1.5">
            <div className="flex items-center gap-1">
              <Img src="images/img_fluent_text_bul.svg" alt="image" className="h-[20px] w-[20px]" />
              <Text as="p">Client Companies</Text>
            </div>
            <Img src="images/img_frame_234.svg" alt="image_one" className="h-[10px]" />
          </div>
          <Text size="xs" as="p" className="self-start mt-[3px] !text-gray-500">
            Sirius XM
          </Text>
          <Menu
            menuItemStyles={{
              button: {
                padding: "9px 9px 9px 36px",
                alignSelf: "start",
                gap: "8px",
                color: "#9d9d9d",
                fontWeight: 500,
                fontSize: "12px",
                [`&:hover, &.ps-active`]: { color: "#354365", backgroundColor: "#eaeaea !important" },
              },
            }}
            className="flex flex-col self-stretch items-center w-full mt-[15px] pb-[15px]"
          >
            <div className="flex flex-col self-stretch gap-[0.22px]">
              <MenuItem>Microsoft</MenuItem>
              <MenuItem>Caterpillar</MenuItem>
            </div>
            <div className="flex self-stretch justify-between items-start mt-0.5 gap-5">
              <div className="flex items-center mb-[3px] ml-[3px] gap-1">
                <Img
                  src="images/img_fluent_history_20_filled.svg"
                  alt="fluenthistory"
                  className="self-start h-[16px] w-[16px]"
                />
                <Text as="p" className="self-end">
                  Yearly Report
                </Text>
              </div>
              <Img src="images/img_frame_234.svg" alt="image_two" className="h-[10px] mt-[3px] mr-[3px]" />
            </div>
            <div className="flex flex-col self-stretch gap-[0.22px]">
              <MenuItem>2021-2022</MenuItem>
              <MenuItem>2020-2021</MenuItem>
              <MenuItem>2019-2020</MenuItem>
              <MenuItem
                icon={
                  <Img
                    src="images/img_fluent_form_new_20_regular.svg"
                    alt="fluentformnew"
                    className="h-[20px] w-[20px]"
                  />
                }
              >
                New Report
              </MenuItem>
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
            <div className="flex flex-col self-start items-start mt-[61px]">
              <Heading size="xs" as="p" className="ml-[13px] md:ml-0 !text-blue_gray-700">
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
                icon={<Img src="images/img_fluent_chat_bub.svg" alt="fluentchatbub" className="h-[16px] w-[16px]" />}
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

        <div className="h-[1024px] w-full md:h-auto bg-white-A700_01 relative pl-10">
          <div className="flex flex-col items-start w-[81%] mb-[37px] mr-[76px] md:mr-0 pl-10">

            <Text size="xl" as="p">
              Upload Documents
            </Text>
            <div className="flex md:flex-col mt-[11px] gap-[7px]">
              <CovenantComplianceResultsRowupload
                upload1="images/img_arrow_right.svg"
                className="flex items-center gap-1 md:p-5"
              />
              <CovenantComplianceResultsRowupload
                upload="Review Financial Spreads"
                upload1="images/img_arrow_right.svg"
                className="flex items-center gap-1 md:p-5"
              />
              <CovenantComplianceResultsRowupload
                upload="Review Covenant Matches"
                upload1="images/img_arrow_right.svg"
                className="flex items-center gap-2 md:p-5"
              />
              <div className="flex md:p-5">
                <CovenantComplianceResultsRowupload upload="Covenant Compliance Results" className="flex items-end" />
              </div>
            </div>
            <Text size="lg" as="p" className="mt-[23px]">
              Upload Financial Statement
            </Text>
            <Text size="md" as="p" className="mt-[9px]">
              Please upload PDF, Word or HTML file below. Please keep file size under 10 MB.
            </Text>
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
              />
              <label
                htmlFor="fileInput"
                className="flex self-start items-center justify-center h-[43px] px-[35px] md:p-5 sm:px-5 text-white-A700_01 text-center text-base font-medium bg-indigo-800 min-w-[177px] rounded-[3px] cursor-pointer"
              >
                Browse Files
              </label>
            </div>

{/* <input
  type="file"
  id="fileInput"
  // className="hidden-input"
  onChange={(e) => handleFileChange(e.target.files)}
/>
<label
  htmlFor="fileInput"
  className="flex self-start items-center justify-center h-[43px] px-[35px] md:p-5 sm:px-5 text-white-A700_01 text-center text-base font-medium bg-indigo-800 min-w-[177px] rounded-[3px] cursor-pointer"
  id="fileInputLabel"
>
  Browse Files
</label> */}

            <div className="flex flex-col items-center justify-center w-[96%] md:w-full mt-[22px] gap-12 px-14 py-[75px] md:p-5 border-gray-400 border border-dashed bg-gray-100">
              <Img
                src="images/img_line_md_cloud_upload_loop.svg"
                alt="linemdcloud_one"
                className="h-[86px] w-[86px] mt-2.5"
              />
              <Heading size="md" as="h1" className="!text-gray-500_02">
                Drag and drop files here
              </Heading>
            </div>
            <Text size="lg" as="p" className="mt-[53px]">
              Upload Credit Agreement
            </Text>
            <Text size="md" as="p" className="mt-[22px]">
              Please upload PDF, Word or HTML file below. Please keep file size under 10 MB.
            </Text>
            <div className="flex md:flex-col items-center mt-5 border-black-900 border border-solid">
              <Text
                size="md"
                as="p"
                className="flex justify-center items-center h-[45px] pl-[26px] pr-[35px] py-3 md:p-5 sm:px-5 !text-gray-400_01 border-indigo-800 border border-solid bg-white-A700_01"
              >
                Choose files to upload
              </Text>
              <Button className="flex self-start items-center justify-center h-[43px] px-[35px] md:p-5 sm:px-5 text-white-A700_01 text-center text-base font-medium bg-indigo-800 min-w-[177px] rounded-[3px]">
                Browse Files
              </Button>
            </div>
            <div className="flex flex-col items-center justify-center w-[96%] md:w-full mt-[22px] gap-12 px-14 py-[75px] md:p-5 border-gray-400 border border-dashed bg-gray-100">
              <Img
                src="images/img_line_md_cloud_upload_loop.svg"
                alt="linemdcloud_one"
                className="h-[86px] w-[86px] mt-2.5"
              />
              <Heading size="md" as="h1" className="!text-gray-500_02">
                Drag and drop files here
              </Heading>
            </div>
            <Button className="flex items-center justify-center h-[39px] mt-[51px] ml-[942px] px-[35px] mb-5 md:ml-0 sm:px-5 text-white-A700_01 text-center text-base font-medium bg-indigo-800 rounded-[3px]"
            onClick={() => navigate('reviewfinancialspreads')}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>


    </>
  );
}
