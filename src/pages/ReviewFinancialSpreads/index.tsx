import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button, SelectBox } from "../../components";
import CellComponent from "../../components/CellComponent";
import { ReactTable } from "../../components/ReactTable";
import ReviewFinancialSpreadsRowupload from "../../components/ReviewFinancialSpreadsRowupload";
import ReviewFinancialSpreadsScrollbar from "../../components/ReviewFinancialSpreadsScrollbar";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import { createColumnHelper } from "@tanstack/react-table";
import "./index.css";
import { useNavigate } from "react-router-dom";
// import { useHistory } from 'react-router-dom';

const tableData = [
  {
    rowtablehead: "Revenues",
    subRows: [
      {
        rowtablehead: "Subscriber Revenues",
        millionsofusd: "6,614.0",
        categorylabels: "Revenues",
        rowconfidence: "Low",
      },
      {
        rowtablehead: "Advertising Revenues",
        millionsofusd: "1,700.0",
        categorylabels: "Revenues",
        rowconfidence: "Medium",
      },
      {
        rowtablehead: "Other Revenues",
        millionsofusd: "151.0",
        categorylabels: "Revenues",
        rowconfidence: "High",
      },
      {
        rowtablehead: "Equipment Revenues",
        millionsofusd: "201.0",
        categorylabels: "Revenues",
        rowconfidence: "High",
      },
      {
        rowtablehead: "Gross Profit",
        millionsofusd: "3,653",
        categorylabels: "Revenues",
        rowconfidence: "High",
      },
    ],
  },
  {
    rowtablehead: "Total Revenues",
    rowview: "images/img_check.svg",
  },
  {},
  {
    rowtablehead: "Expenses",
    subRows: [
      {
        rowtablehead: "Total other operating expenses, net",
        millionsofusd: "3,336",
        rowconfidence: "High",
      },
      {
        rowtablehead: "Operating Income",
        millionsofusd: "317",
        rowconfidence: "High",
      },
    ],
  },
];

type TableRowType = {
  rowtablehead?: string;
  millionsofusd?: string;
  categorylabels?: any;
  rowconfidence?: any;
  rowview?: any;
  subRows?: TableRowType[];
};

export default function ReviewFinancialSpreadsPage() {
  const [collapsed, setCollapsed] = React.useState(false);
  const navigate = useNavigate();
  // const history = useHistory();

  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper<TableRowType>();
    return [
      tableColumnHelper.accessor("rowtablehead", {
        cell: (info) => (
          <div className="flex justify-between items-center">
            <Heading
              as="h4"
              className={`flex justify-center items-center h-[36px] border-indigo-50 ${
                info?.getValue?.() === "Total Revenues" ? "font-bold" : ""
              }`}
              style={{ color: "black" }}
            >
              {info?.getValue?.()}
            </Heading>

            {info.row.getCanExpand() && (
              <button
                onClick={info.row.getToggleExpandedHandler()}
                style={{ cursor: "pointer" }}
              >
                {/* {info.row.getIsExpanded() ? ' ▲ ' : ' ▼ '} */}
                {info.row.getIsExpanded() ? " ∧ " : " ∨ "}
              </button>
            )}
          </div>
        ),
        header: ({ table }) => <div className="md:self-stretch flex-1"></div>,
        meta: { width: "331px" },
      }),
      tableColumnHelper.accessor("millionsofusd", {
        cell: (info) => {
          const initialValue = info?.getValue?.();
          return <CellComponent initialValue={initialValue} />;
        },
        header: (info) => (
          <Heading
            as="h1"
            className="flex justify-center items-center h-[36px] border-indigo-50"
            style={{ color: "black" }}
          >
            Millions of USD
          </Heading>
        ),
        meta: { width: "140px" },
      }),
      tableColumnHelper.accessor("categorylabels", {
        cell: (info) => {
          const initialValue = info?.getValue?.();
          return <CellComponent initialValue={initialValue} />;
        },
        header: (info) => (
          <Heading
            as="h2"
            className="flex justify-center items-center h-[36px] border-indigo-50"
            style={{ color: "black" }}
          >
            Category Labels
          </Heading>
        ),
        meta: { width: "173px" },
      }),
      tableColumnHelper.accessor("rowconfidence", {
        cell: (info) => (
          <div className="flex justify-center md:w-full p-2 border-indigo-50">
            <Heading
              as="p"
              className={`flex justify-center items-center h-[20px] px-2.5 py-px rounded-[10px] ${
                info?.getValue?.() == "High"
                  ? "bg-green-300"
                  : info?.getValue?.() == "Medium"
                  ? "bg-yellow-200"
                  : info?.getValue?.() == "Low"
                  ? "bg-red-300"
                  : "bg-white-500"
              }`}
              style={{
                color: `${
                  info?.getValue?.() == "High"
                    ? "green"
                    : info?.getValue?.() == "Medium"
                    ? "#CCB400"
                    : info?.getValue?.() == "Low"
                    ? "red"
                    : "white"
                }`,
              }}
            >
              {info?.getValue?.()}
            </Heading>
          </div>
        ),
        header: (info) => (
          <Heading
            as="h2"
            className="flex justify-center items-center h-[36px] border-indigo-50"
            style={{ color: "black" }}
          >
            Confidence Score
          </Heading>
        ),
        meta: { width: "173px" },
      }),
      tableColumnHelper.accessor("rowview", {
        cell: (info) => (
          <div className="flex justify-center">
            {info.row.depth > 0 && info.row.subRows ? (
              <div className="h-[36px] w-[41px] border-indigo-50 flex items-center justify-center">
                <input
                  type="checkbox"
                  defaultChecked={info.row.original.rowconfidence === "High"}
                  style={{
                    appearance: "none", // Hide default checkbox appearance
                    width: "20px",
                    height: "20px",
                    borderRadius: "15%", // Rounded checkbox
                    border: "2px solid #4CAF50", // Green border
                    // backgroundColor: '#fff',
                    position: "relative",
                    cursor: "pointer", // Show pointer cursor when hovering
                    transition: "background-color 0.3s ease", // Smooth transition for background color change
                  }}
                />
              </div>
            ) : null}
          </div>
        ),
        header: (info) => (
          <div className="flex">
            <div
              className="h-[36px] w-[41px] border-indigo-50 flex items-center justify-center"
              style={{ color: "black" }}
            ></div>
          </div>
        ),
        meta: { width: "41px" },
      }),
    ];
  }, []);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  const handleNavigate = () => {
    // Navigate to the '/reviewcovenantmatches' route
    navigate("/reviewcovenantmatches");
  };

  const NavigateUpload = () => {
    // Navigate to the '/reviewcovenantmatches' route
    navigate("/");
  };

  return (
    <>
      <Helmet>
        <title>Fiscali</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
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
            <Img
              src="images/img_fluent_person_12_regular.svg"
              alt="fluentperson"
              className="self-start h-[16px]"
            />
            <Text as="p">Henry Coleman</Text>
          </div>
        </div>
      </header>

      <div className="h-[1024px] w-full bg-white-A700_02 relative flex">
        <Sidebar
          width="205px !important"
          collapsedWidth="80px !important"
          collapsed={collapsed}
          className="flex flex-col h-screen pb-9 gap-[23px] top-0 sm:pb-5 bg-gray-50 shadow-sm !sticky overflow-auto"
        >
          <Menu
            menuItemStyles={{
              button: {
                padding: "9px 9px 9px 36px",
                gap: "8px",
                alignSelf: "start",
                color: "#9d9d9d",
                fontWeight: 500,
                fontSize: "12px",
                [`&:hover, &.ps-active`]: {
                  color: "#354365",
                  backgroundColor: "#eaeaea !important",
                },
              },
            }}
            className="flex flex-col self-stretch items-center w-full pb-4"
          >
            <div className="flex justify-center">
              <MenuItem
                icon={
                  <Img
                    src="images/img_fluent_search_16_regular.svg"
                    alt="fluentsearch"
                    className="h-[16px] w-[16px]"
                  />
                }
              >
                Search Company{" "}
              </MenuItem>
            </div>
            <div className="flex justify-center items-center mt-[18px] gap-[26px] p-1.5">
              <div className="flex justify-center items-center gap-1">
                <Img
                  src="images/img_fluent_text_bul.svg"
                  alt="image"
                  className="h-[20px] w-[20px]"
                />
                <Text as="p" className="!font-medium">
                  Client Companies
                </Text>
              </div>
              <Img
                src="images/img_frame_234.svg"
                alt="image_one"
                className="h-[10px]"
              />
            </div>
            <div className="flex flex-col self-stretch gap-[0.75px]">
              <MenuItem>Sirius XM</MenuItem>
              <MenuItem>Microsoft</MenuItem>
              <MenuItem>Caterpillar</MenuItem>
            </div>
            <div className="flex self-stretch justify-between items-start gap-5 p-1">
              <div className="flex justify-center items-center ml-0.5 gap-1 md:ml-0">
                <Img
                  src="images/img_fluent_history_20_filled.svg"
                  alt="fluenthistory"
                  className="self-start h-[16px] w-[16px]"
                />
                <Text as="p" className="self-end !font-medium">
                  Yearly Report
                </Text>
              </div>
              <Img
                src="images/img_frame_234.svg"
                alt="image_two"
                className="h-[10px] mt-[3px] mr-0.5 md:mr-0"
              />
            </div>
            <div className="flex flex-col self-stretch gap-[0.76px]">
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
            <div className="flex flex-col self-start items-start mt-[66px] gap-4">
              <Heading size="xs" as="p" className="!text-blue_gray-700">
                Admin
              </Heading>
              <div className="flex items-center gap-2">
                <Img
                  src="images/img_fluent_people_team_16_regular.svg"
                  alt="fluentpeople"
                  className="self-start h-[16px] w-[16px]"
                />
                <Text as="p" className="self-end !font-medium">
                  Account Management
                </Text>
              </div>
            </div>
            <div className="self-stretch h-px mt-[273px] bg-gray-400_02" />
            <div className="flex flex-col gap-[0.75px]">
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

        <div className="flex flex-col w-[66%] top-[13%] right-0 left-0 m-auto absolute">
          <Text size="xl" as="p">
            Review Financial Spreads
          </Text>
          <div className="flex md:flex-col justify-between mt-[5px] gap-5">
            <div className="flex md:flex-col gap-[7px] md:p-5 flex-1">
              <div onClick={NavigateUpload} style={{ cursor: "pointer" }}>
                <ReviewFinancialSpreadsRowupload
                  upload1="images/img_arrow_right.svg"
                  className="flex justify-center items-center gap-1"
                />
              </div>
              <ReviewFinancialSpreadsRowupload
                upload="Review Financial Spreads"
                upload1="images/img_arrow_right.svg"
                className="flex justify-center items-center gap-1"
              />
              <ReviewFinancialSpreadsRowupload
                upload="Review Covenant Matches"
                upload1="images/img_arrow_right.svg"
                className="flex justify-center items-center gap-1"
              />
              <ReviewFinancialSpreadsRowupload
                upload="Covenant Compliance Results"
                className="flex justify-center items-center gap-1"
              />
            </div>
          </div>
          <Text size="md" as="p" className="mt-3">
            Please review line items and click on any row to amend. You will
            need to confirm all unchecked boxes before proceeding.{" "}
          </Text>
          <Text size="lg" as="p" className="mt-9 ml-[7px] md:ml-0">
            Income Statement
          </Text>
          <Text as="p" className="mt-[15px] ml-[7px] md:ml-0 !font-medium">
            Sirius XM
          </Text>
          <div className="flex mt-2 ml-[7px] md:ml-0">
            <Text as="p" className="!font-medium">
              For the Fiscal Period Ending
            </Text>
            <Text as="p" className="ml-[-2px] text-right !font-medium">
              12 Months, Dec-31-2021
            </Text>
          </div>

          <ReactTable
            bodyProps={{ className: "" }}
            headerProps={{ className: "md:flex-col" }}
            rowDataProps={{ className: "md:flex-col" }}
            className="self-stretch mt-1.5 shadow-lg"
            columns={tableColumns}
            data={tableData}
          />

          <Button
            className="flex items-center justify-center h-[39px] mt-[51px] ml-[1000px] px-[15px] mb-5 md:ml-0 sm:px-5 text-white-A700_01 text-center text-base font-medium bg-indigo-800 rounded-[3px]"
            onClick={handleNavigate}
          >
            Continue
          </Button>
        </div>

        {/* <div className="flex flex-col items-end bottom-[3%] right-[3%] m-auto bg-white-A700_02 shadow-xs absolute">

          <div className="self-stretch">
            <div className="flex md:flex-col justify-center">
              <SelectBox
                name="tablehead"
                placeholder={`Revenue`}
                options={dropDownOptions}
                className="pl-2.5 pr-[35px] py-[9px] sm:pr-5 text-black-900 text-sm font-bold border-indigo-50 border border-solid bg-white-A700 flex-1"
              />
              <Heading
                as="h1"
                className="flex justify-center items-center h-[36px] pl-2.5 pr-[35px] py-[9px] sm:pr-5 !text-black-900 border-indigo-50 border border-solid bg-white-A700"
              >
                Millions of USD
              </Heading>
              <Heading
                as="h2"
                className="flex justify-center items-center h-[36px] pl-2.5 pr-[35px] py-[9px] sm:pr-5 !text-black-900 border-indigo-50 border border-solid bg-white-A700"
              >
                Category Labels
              </Heading>
              <Heading
                as="h3"
                className="flex justify-center items-center h-[36px] pl-2.5 pr-[22px] py-[9px] sm:pr-5 !text-black-900 border-indigo-50 border border-solid bg-white-A700"
              >
                Confidence Score
              </Heading>
              <div className="h-[36px] w-[4%] border-indigo-50 border border-solid bg-white-A700" />
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-col self-stretch pt-9 gap-px sm:pt-5">
                <div className="flex md:flex-col md:p-5 flex-1">
                  <Text
                    as="p"
                    className="flex justify-center items-center h-[36px] pl-[18px] pr-[35px] py-[9px] sm:pr-5 border-indigo-50 border border-solid bg-white-A700"
                  >
                    Advertising Revenues
                  </Text>
                  <Text
                    as="p"
                    className="flex justify-center items-center h-[36px] pl-2.5 pr-[35px] py-[9px] sm:pr-5 border-teal-50 border border-solid bg-white-A700"
                  >
                    1,700.0
                  </Text>
                  <Text
                    as="p"
                    className="flex justify-center items-center h-[36px] pl-2.5 pr-[35px] py-[9px] sm:pr-5 border-teal-50 border border-solid bg-white-A700"
                  >
                    Revenues
                  </Text>
                  <div className="flex w-[14%] md:w-full p-2 border-indigo-50 border border-solid bg-white-A700">
                    <Heading
                      as="h4"
                      className="flex justify-center items-center h-[20px] px-2.5 py-px !text-lime-900 bg-amber-200 rounded-[10px]"
                    >
                      Medium
                    </Heading>
                  </div>
                  <div className="flex justify-center w-[4%] md:w-full p-[7px] border-indigo-50 border border-solid bg-white-A700">
                    <div className="self-start h-[20px] w-[20px] border-blue_gray-500 border border-solid bg-white-A700_02 rounded-md" />
                  </div>
                </div>
                <div className="flex md:flex-col md:p-5 flex-1">
                  <div className="flex md:flex-col flex-1">
                    <Text
                      as="p"
                      className="flex justify-center items-center h-[36px] pl-[18px] pr-[35px] py-[9px] sm:pr-5 border-indigo-50 border border-solid bg-white-A700"
                    >
                      Subscriber Revenues
                    </Text>
                    <Text
                      as="p"
                      className="flex justify-center items-center h-[36px] pl-2.5 pr-[35px] py-[9px] sm:pr-5 border-teal-50 border border-solid bg-white-A700"
                    >
                      6,614.0
                    </Text>
                    <Text
                      as="p"
                      className="flex justify-center items-center h-[36px] pl-2.5 pr-[35px] py-[9px] sm:pr-5 border-teal-50 border border-solid bg-white-A700"
                    >
                      Revenues
                    </Text>
                    <div className="flex w-[14%] md:w-full p-2 border-indigo-50 border border-solid bg-white-A700">
                      <Heading
                        as="h5"
                        className="flex justify-center items-center h-[20px] px-2.5 py-px !text-red-400 bg-red-100 rounded-[10px]"
                      >
                        Low
                      </Heading>
                    </div>
                  </div>
                  <div className="flex w-[4%] md:w-full p-[7px] border-indigo-50 border border-solid bg-white-A700">
                    <div className="self-start h-[20px] w-[20px] border-blue_gray-500 border border-solid bg-white-A700_02 rounded-md" />
                  </div>
                </div>
                <div className="flex md:flex-col md:p-5 flex-1">
                  <div className="flex md:flex-col flex-1">
                    <Text
                      as="p"
                      className="flex justify-center items-center h-[36px] pl-[18px] pr-[35px] py-[9px] sm:pr-5 border-indigo-50 border border-solid bg-white-A700"
                    >
                      Other Revenues
                    </Text>
                    <Text
                      as="p"
                      className="flex justify-center items-center h-[36px] pl-2.5 pr-[35px] py-[9px] sm:pr-5 border-teal-50 border border-solid bg-white-A700"
                    >
                      151.0
                    </Text>
                    <Text
                      as="p"
                      className="flex justify-center items-center h-[36px] pl-2.5 pr-[35px] py-[9px] sm:pr-5 border-teal-50 border border-solid bg-white-A700"
                    >
                      Revenues
                    </Text>
                    <div className="flex w-[14%] md:w-full p-2 border-indigo-50 border border-solid bg-white-A700">
                      <Heading
                        as="h6"
                        className="flex justify-center items-center h-[20px] px-2.5 py-px bg-teal-100 rounded-[10px]"
                      >
                        High
                      </Heading>
                    </div>
                  </div>
                  <div className="flex justify-center p-1.5 border-indigo-50 border border-solid bg-white-A700">
                    <Button className="flex self-end items-center h-[20px] w-[20px] border-cyan-800 border border-solid bg-white-A700_02 rounded-md">
                      <Img src="images/img_check.svg" />
                    </Button>
                  </div>
                </div>
                <div className="flex md:flex-col md:p-5 flex-1">
                  <Text
                    as="p"
                    className="flex justify-center items-center h-[36px] pl-[18px] pr-[35px] py-[9px] sm:pr-5 border-indigo-50 border border-solid bg-white-A700"
                  >
                    Equipment Revenues
                  </Text>
                  <Text
                    as="p"
                    className="flex justify-center items-center h-[36px] pl-2.5 pr-[35px] py-[9px] sm:pr-5 border-teal-50 border border-solid bg-white-A700"
                  >
                    201.0
                  </Text>
                  <Text
                    as="p"
                    className="flex justify-center items-center h-[36px] pl-2.5 pr-[35px] py-[9px] sm:pr-5 border-teal-50 border border-solid bg-white-A700"
                  >
                    Revenues
                  </Text>
                  <div className="flex w-[14%] md:w-full p-2 border-indigo-50 border border-solid bg-white-A700">
                    <Heading
                      as="p"
                      className="flex justify-center items-center h-[20px] px-2.5 py-px bg-teal-100 rounded-[10px]"
                    >
                      High
                    </Heading>
                  </div>
                  <div className="flex justify-center p-1.5 border-indigo-50 border border-solid bg-white-A700">
                    <Button className="flex self-end items-center justify-center h-[20px] w-[20px] border-cyan-800 border border-solid bg-white-A700_02 rounded-md">
                      <Img src="images/img_check.svg" />
                    </Button>
                  </div>
                </div>
                <div className="flex md:flex-col md:p-5 flex-1">
                  <Heading
                    as="p"
                    className="flex justify-center items-center h-[36px] pl-2.5 pr-[35px] py-[9px] sm:pr-5 !text-black-900 border-indigo-50 border border-solid bg-white-A700"
                  >
                    Total Revenue
                  </Heading>
                  <Heading
                    as="p"
                    className="flex justify-center items-center h-[36px] pl-2.5 pr-[35px] py-[9px] sm:pr-5 !text-black-900 border-indigo-50 border border-solid bg-white-A700"
                  >
                    8696.0
                  </Heading>
                  <Text
                    as="p"
                    className="flex justify-center items-center h-[36px] pl-2.5 pr-[35px] py-[9px] sm:pr-5 border-indigo-50 border border-solid bg-white-A700"
                  >
                    Total Revenue
                  </Text>
                  <div className="flex w-[14%] md:w-full p-2 border-indigo-50 border border-solid bg-white-A700">
                    <Heading
                      as="p"
                      className="flex justify-center items-center h-[20px] px-2.5 py-px bg-teal-100 rounded-[10px]"
                    >
                      High
                    </Heading>
                  </div>
                  <div className="flex justify-center p-1.5 border-indigo-50 border border-solid bg-white-A700">
                    <Button className="flex self-end items-center justify-center h-[20px] w-[20px] border-cyan-800 border border-solid bg-white-A700_02 rounded-md">
                      <Img src="images/img_check.svg" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col self-stretch gap-px">
                <div className="flex md:flex-col md:p-5 flex-1">
                  <div className="h-[36px] border-indigo-50 border border-solid bg-white-A700 flex-1" />
                  <div className="h-[36px] w-[16%] border-indigo-50 border border-solid bg-white-A700" />
                  <div className="h-[36px] w-[20%] border-indigo-50 border border-solid bg-white-A700" />
                  <div className="h-[36px] w-[14%] border-indigo-50 border border-solid bg-white-A700" />
                  <div className="h-[36px] w-[4%] border-indigo-50 border border-solid bg-white-A700" />
                </div>
                <div className="flex md:flex-col md:p-5 flex-1">
                  <Heading
                    as="p"
                    className="flex justify-center items-center h-[36px] pl-2.5 pr-[35px] py-[9px] sm:pr-5 !text-black-900 border-indigo-50 border border-solid bg-white-A700"
                  >
                    Operating Expenses
                  </Heading>
                  <div className="h-[36px] w-[16%] border-indigo-50 border border-solid bg-white-A700" />
                  <div className="h-[36px] w-[20%] border-indigo-50 border border-solid bg-white-A700" />
                  <div className="h-[36px] w-[14%] border-indigo-50 border border-solid bg-white-A700" />
                  <div className="h-[36px] w-[4%] border-indigo-50 border border-solid bg-white-A700" />
                </div>
                <div className="flex md:flex-col md:p-5 flex-1">
                  <Heading
                    as="p"
                    className="flex justify-center items-center h-[36px] pl-[26px] pr-[35px] py-[9px] sm:px-5 !text-black-900 border-indigo-50 border border-solid bg-white-A700"
                  >
                    Cost of Services
                  </Heading>
                  <div className="h-[36px] w-[16%] border-indigo-50 border border-solid bg-white-A700" />
                  <div className="h-[36px] w-[20%] border-indigo-50 border border-solid bg-white-A700" />
                  <div className="h-[36px] w-[14%] border-indigo-50 border border-solid bg-white-A700" />
                  <div className="h-[36px] w-[4%] border-indigo-50 border border-solid bg-white-A700" />
                </div>
              </div>
              <div className="flex flex-col self-stretch gap-px">
                <div className="flex md:flex-col md:p-5 flex-1">
                  <SelectBox
                    name="tablehead"
                    placeholder={`           Revenue Share & Royalties`}
                    options={dropDownOptions}
                    className="px-[35px] py-[9px] sm:px-5 text-black-900 text-sm font-bold border-indigo-50 border border-solid bg-white-A700 flex-1"
                  />
                  <Text
                    as="p"
                    className="flex justify-center items-center h-[36px] pl-2.5 pr-[35px] py-[9px] sm:pr-5 border-indigo-50 border border-solid bg-white-A700"
                  >
                    2,672.0
                  </Text>
                  <Text
                    as="p"
                    className="flex justify-center items-center h-[36px] pl-2.5 pr-[35px] py-[9px] sm:pr-5 border-indigo-50 border border-solid bg-white-A700"
                  >
                    Cost of Goods Sold
                  </Text>
                  <div className="flex w-[14%] md:w-full p-2 border-indigo-50 border border-solid bg-white-A700">
                    <Heading
                      as="p"
                      className="flex justify-center items-center h-[20px] px-2.5 py-px bg-teal-100 rounded-[10px]"
                    >
                      High
                    </Heading>
                  </div>
                  <div className="flex flex-col items-center justify-center w-[4%] md:w-full p-1.5 border-indigo-50 border border-solid bg-white-A700">
                    <Button className="flex items-center justify-center h-[20px] w-[20px] mt-1 border-cyan-800 border border-solid bg-white-A700_02 rounded-md">
                      <Img src="images/img_check.svg" />
                    </Button>
                  </div>
                </div>
                <div className="flex md:flex-col md:p-5 flex-1">
                  <Text
                    as="p"
                    className="flex justify-center items-center h-[36px] px-[35px] py-[9px] sm:px-5 border-indigo-50 border border-solid bg-white-A700"
                  >
                    Programming & Comfort
                  </Text>
                  <Text
                    as="p"
                    className="flex justify-center items-center h-[36px] pl-2.5 pr-[35px] py-[9px] sm:pr-5 border-indigo-50 border border-solid bg-white-A700"
                  >
                    559.0
                  </Text>
                  <Text
                    as="p"
                    className="flex justify-center items-center h-[36px] pl-2.5 pr-[35px] py-[9px] sm:pr-5 border-indigo-50 border border-solid bg-white-A700"
                  >
                    Cost of Goods Sold
                  </Text>
                  <div className="flex w-[14%] md:w-full p-2 border-indigo-50 border border-solid bg-white-A700">
                    <Heading
                      as="p"
                      className="flex justify-center items-center h-[20px] px-2.5 py-px bg-teal-100 rounded-[10px]"
                    >
                      High
                    </Heading>
                  </div>
                  <div className="flex flex-col items-center justify-center w-[4%] md:w-full p-1.5 border-indigo-50 border border-solid bg-white-A700">
                    <Button className="flex items-center justify-center h-[20px] w-[20px] mt-1 border-cyan-800 border border-solid bg-white-A700_02 rounded-md">
                      <Img src="images/img_check.svg" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col self-stretch">
                <div className="flex flex-col md:p-5">
                  <Text
                    as="p"
                    className="flex justify-center items-center h-[36px] px-[35px] py-[9px] sm:px-5 border-indigo-50 border border-solid bg-white-A700"
                  >
                    Customer Service Center & Billing
                  </Text>
                  <Text
                    as="p"
                    className="flex justify-center items-center h-[36px] px-[35px] py-[9px] sm:px-5 border-indigo-50 border border-solid bg-white-A700"
                  >
                    Transmission
                  </Text>
                  <Text
                    as="p"
                    className="flex justify-center items-center h-[36px] px-[35px] py-[9px] sm:px-5 border-indigo-50 border border-solid bg-white-A700"
                  >
                    Cost of Equipment
                  </Text>
                  <Text
                    as="p"
                    className="flex justify-center items-center h-[36px] px-[35px] py-[9px] sm:px-5 border-indigo-50 border border-solid bg-white-A700"
                  >
                    Subscriber Acquisition Costs
                  </Text>
                  <Text
                    as="p"
                    className="flex justify-center items-center h-[36px] px-[35px] py-[9px] sm:px-5 border-indigo-50 border border-solid bg-white-A700"
                  >
                    Sales and Marketing
                  </Text>
                  <Text
                    as="p"
                    className="flex justify-center items-center h-[36px] px-[35px] py-[9px] sm:px-5 border-indigo-50 border border-solid bg-white-A700"
                  >
                    Engineering, Design, and Development
                  </Text>
                </div>
                <div className="h-[216px] md:w-full flex-1 relative md:flex-none">
                  <div className="flex flex-col items-end justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <div className="flex flex-col self-stretch items-center">
                      <div className="flex flex-col self-stretch items-start">
                        <div className="flex flex-col self-stretch">
                          <div className="flex flex-col items-center">
                            <div className="flex flex-col self-stretch items-start">
                              <div className="flex sm:flex-col self-stretch">
                                <div className="flex sm:flex-col items-start sm:p-5 z-[1] flex-1">
                                  <Text
                                    as="p"
                                    className="flex justify-center items-center h-[36px] pl-2.5 pr-[35px] py-[9px] sm:pr-5 border-indigo-50 border border-solid bg-white-A700"
                                  >
                                    501.0
                                  </Text>
                                  <div className="flex flex-col ml-[-8px] sm:ml-0 shadow-xl flex-1">

                                  </div>
                                </div>
                                <div className="w-[23%] sm:w-full ml-[-100px] sm:p-5 sm:ml-0">
                                  <div className="flex flex-col items-start p-2 border-indigo-50 border border-solid bg-white-A700">
                                    <div className="flex justify-center bg-teal-100 rounded-[10px]">
                                      <Heading as="p" className="self-end">
                                        High
                                      </Heading>
                                    </div>
                                  </div>
                                  <div className="flex p-2 border-indigo-50 border border-solid bg-white-A700">
                                    <Heading
                                      as="p"
                                      className="flex justify-center items-center h-[20px] px-2.5 py-px bg-teal-100 rounded-[10px]"
                                    >
                                      High
                                    </Heading>
                                  </div>
                                  <div className="flex p-2 border-indigo-50 border border-solid bg-white-A700">
                                    <Heading
                                      as="p"
                                      className="flex justify-center items-center h-[20px] px-2.5 py-px bg-teal-100 rounded-[10px]"
                                    >
                                      High
                                    </Heading>
                                  </div>
                                  <div className="flex flex-col items-start p-2 border-indigo-50 border border-solid bg-white-A700">
                                    <div className="flex justify-center bg-teal-100 rounded-[10px]">
                                      <Heading as="p" className="self-end">
                                        High
                                      </Heading>
                                    </div>
                                  </div>
                                  <div className="flex p-2 border-indigo-50 border border-solid bg-white-A700">
                                    <Heading
                                      as="p"
                                      className="flex justify-center items-center h-[20px] px-2.5 py-px bg-teal-100 rounded-[10px]"
                                    >
                                      High
                                    </Heading>
                                  </div>
                                </div>
                              </div>
                              <Text
                                as="p"
                                className="flex justify-center items-center h-[36px] mt-[-36px] pl-2.5 pr-[35px] py-[9px] sm:pr-5 border-indigo-50 border border-solid bg-white-A700"
                              >
                                1056.0
                              </Text>
                            </div>
                            <div className="flex w-[41%] md:w-full mt-[-36px] p-[9px] border-indigo-50 border border-solid bg-white-A700">
                              <Text as="p">Cost of Goods Sold</Text>
                            </div>
                          </div>
                          <Img
                            src="images/img_vector_5.svg"
                            alt="vectorfive_one"
                            className="h-[14px] mt-[-7px] ml-[186px] md:ml-0"
                          />
                        </div>
                        <Text
                          as="p"
                          className="flex justify-center items-center h-[36px] mt-[-7px] pl-2.5 pr-[35px] py-[9px] sm:pr-5 border-indigo-50 border border-solid bg-white-A700"
                        >
                          265.0
                        </Text>
                      </div>
                      <div className="flex w-[41%] md:w-full mt-[-36px] p-2 border-indigo-50 border border-solid bg-white-A700">
                        <Text as="p" className="self-end">
                          R&D Expense
                        </Text>
                      </div>
                    </div>
                    <div className="flex w-[28%] md:w-full mt-[-36px] p-2 border-indigo-50 border border-solid bg-white-A700">
                      <Heading
                        as="p"
                        className="flex justify-center items-center h-[20px] px-2.5 py-px !text-red-400 bg-red-100 rounded-[10px]"
                      >
                        Low
                      </Heading>
                    </div>
                  </div>
                  <Text
                    as="p"
                    className="flex justify-center items-center h-[36px] pl-2.5 pr-[35px] left-0 top-[17%] py-[9px] m-auto sm:pr-5 border-indigo-50 border border-solid bg-white-A700 absolute"
                  >
                    218.0
                  </Text>
                  <Text
                    as="p"
                    className="flex justify-center items-center h-[36px] pl-2.5 pr-[35px] left-0 top-[33%] py-[9px] m-auto sm:pr-5 border-indigo-50 border border-solid bg-white-A700 absolute"
                  >
                    18.0
                  </Text>
                  <Text
                    as="p"
                    className="flex justify-center items-center h-[36px] pl-2.5 pr-[35px] bottom-[33%] left-0 py-[9px] m-auto sm:pr-5 border-indigo-50 border border-solid bg-white-A700 absolute"
                  >
                    325.0
                  </Text>
                  <div className="w-[41%] top-0 right-0 left-0 m-auto absolute">
                    <div className="flex p-[9px] border-indigo-50 border border-solid bg-white-A700">
                      <Text as="p">Cost of Goods Sold</Text>
                    </div>
                    <div className="flex p-[9px] border-indigo-50 border border-solid bg-white-A700">
                      <Text as="p">Cost of Goods Sold</Text>
                    </div>
                    <div className="flex p-[9px] border-indigo-50 border border-solid bg-white-A700">
                      <Text as="p">Cost of Goods Sold</Text>
                    </div>
                    <div className="flex p-[9px] border-indigo-50 border border-solid bg-white-A700">
                      <Text as="p">Cost of Goods Sold</Text>
                    </div>
                  </div>
                  <Img
                    src="images/img_vector_6.svg"
                    alt="vectorsix_three"
                    className="h-[11px] w-[10px] bottom-[13%] left-[33%] m-auto absolute"
                  />
                </div>
                <div className="w-[4%] md:w-full md:p-5">
                  <div className="flex flex-col items-center justify-center p-1.5 border-indigo-50 border border-solid bg-white-A700">
                    <Button className="flex items-center justify-center h-[20px] w-[20px] mt-1 border-cyan-800 border border-solid bg-white-A700_02 rounded-md">
                      <Img src="images/img_check.svg" />
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-center p-1.5 border-indigo-50 border border-solid bg-white-A700">
                    <Button className="flex items-center justify-center h-[20px] w-[20px] mt-1 border-cyan-800 border border-solid bg-white-A700_02 rounded-md">
                      <Img src="images/img_check.svg" />
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-center p-1.5 border-indigo-50 border border-solid bg-white-A700">
                    <Button className="flex items-center justify-center h-[20px] w-[20px] mt-1 border-cyan-800 border border-solid bg-white-A700_02 rounded-md">
                      <Img src="images/img_check.svg" />
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-center p-1.5 border-indigo-50 border border-solid bg-white-A700">
                    <Button className="flex items-center justify-center h-[20px] w-[20px] mt-1 border-cyan-800 border border-solid bg-white-A700_02 rounded-md">
                      <Img src="images/img_check.svg" />
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-center p-1.5 border-indigo-50 border border-solid bg-white-A700">
                    <Button className="flex items-center justify-center h-[20px] w-[20px] mt-1 border-cyan-800 border border-solid bg-white-A700_02 rounded-md">
                      <Img src="images/img_check.svg" />
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-center p-[7px] border-indigo-50 border border-solid bg-white-A700">
                    <div className="h-[20px] w-[20px] border-blue_gray-500 border border-solid bg-white-A700_02 rounded-md" />
                  </div>
                </div>
              </div>
              <Text
                as="p"
                className="flex self-start justify-center items-center h-px pt-2.5 pl-[18px] pr-[35px] sm:pr-5 border-indigo-50 border border-solid bg-white-A700"
              >
                Income form operations
              </Text>
              <Heading
                as="p"
                className="flex self-end justify-center items-center h-px pt-2.5 pl-2.5 pr-[35px] sm:pr-5 !text-black-900 border-indigo-50 border border-solid bg-white-A700"
              >
                2,035.0
              </Heading>
            </div>
          </div>
          <Text
            as="p"
            className="flex justify-center items-center h-px mt-9 mr-[424px] pt-2.5 pl-2.5 pr-[35px] md:mr-0 sm:pr-5 border-indigo-50 border border-solid bg-white-A700"
          >
            533.0
          </Text>
          <div className="h-px w-[4%] mt-9 border-indigo-50 border border-solid bg-white-A700" />
        </div>  */}
      </div>
    </>
  );
}
