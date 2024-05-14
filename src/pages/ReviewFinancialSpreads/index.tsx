import React from "react";
import { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button, SelectBox } from "../../components";
import CellComponent from "../../components/CellComponent";
import CategoryRanking from "../../components/CategoryRanking";
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
      {
        rowtablehead: "Total Revenues",
        millionsofusd: "8696.0",
        categorylabels: "Total Revenues",
        rowconfidence: "High",
      },
    ],
  },
  {},
  {
    rowtablehead: "Operating Expenses",
    subRows: [
      {
        rowtablehead: "Cost of Services",
        millionsofusd: "3,336",
        rowconfidence: "High",
      },
      {
        rowtablehead: "REvenue Share & Royalties",
        subRows: [
          {
            rowtablehead: "Programming & Comfort",
            millionsofusd: "559.0",
            categorylabels: "Cost of Goods Sold",
            rowconfidence: "High",
          },
          {
            rowtablehead: "Customer Service Center & Billing",
            millionsofusd: "501.0",
            categorylabels: "Cost of Goods Sold",
            rowconfidence: "High",
          },
          {
            rowtablehead: "Transmission",
            millionsofusd: "218.0",
            categorylabels: "Cost of Goods Sold",
            rowconfidence: "High",
          },
          {
            rowtablehead: "Cost of Equipment",
            millionsofusd: "18.0",
            categorylabels: "Cost of Goods Sold",
            rowconfidence: "High",
          },
          {
            rowtablehead: "Subscriber Acquisition Costs",
            millionsofusd: "325.0",
            categorylabels: "Cost of Goods Sold",
            rowconfidence: "High",
          },
          {
            rowtablehead: "Sales and Marketing",
            millionsofusd: "1056.0",
            categorylabels: "Cost of Goods Sold",
            rowconfidence: "High",
          },
        ],
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

const isMainRow = (row) => row.depth === 0;
// const tableRef = useRef(null);

export default function ReviewFinancialSpreadsPage() {
  const [collapsed, setCollapsed] = React.useState(false);
  const navigate = useNavigate();
  // const history = useHistory();

  const [showTable, setShowTable] = useState(false);
  const [tablePosition, setTablePosition] = useState({ x: 0, y: 0 });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = event.currentTarget.getBoundingClientRect();

    // console.log({left, top})
    // console.log(window.scrollX)

    if (showTable) {
      setShowTable(false);
    } else {
      setShowTable(true);
      setTablePosition({
        x: event.clientX - left / 2,
        y: event.clientY - top / 2,
      });
      console.log(event.clientX);
      console.log(event.clientY);
    }
    // console.log(tablePosition.x)
    // console.log(tablePosition.y)
  };

  const handleMouseLeave = () => {
    // setShowTable(false);
  };

  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper<TableRowType>();
    return [
      tableColumnHelper.accessor("rowtablehead", {
        cell: (info) => (
          <div className="flex justify-start items-center">
            <Heading
              as="h4"
              className={`flex justify-start pl-2 items-center h-[36px] border-indigo-50 ${
                info?.getValue?.() === "Total Revenues" ? "font-bold" : ""
              }`}
              style={{ color: "black" }}
            >
              {info?.getValue?.()}
            </Heading>

            {info.row.getCanExpand() && (
              <button
                onClick={info.row.getToggleExpandedHandler()}
                style={{
                  cursor: "pointer",
                  paddingLeft: "15px",
                  paddingTop: "2.5px",
                }}
              >
                {/* {info.row.getIsExpanded() ? ' ▲ ' : ' ▼ '} */}
                {/* {info.row.getIsExpanded() ? "∧" : "∨"} */}
                {info.row.getIsExpanded() ? (
                  <img
                    src="images/img_down_arw.svg"
                    alt="Up Arrow"
                    style={{ transform: "rotateX(180deg)" }}
                  />
                ) : (
                  <img src="images/img_down_arw.svg" alt="Down Arrow" />
                )}
              </button>
            )}
            {/* </Heading> */}
          </div>
        ),
        header: ({ table }) => (
          <Heading
            as="h1"
            className="flex justify-center items-center h-[36px] bg-white-A700"
            style={{ color: "black" }}
          >
            {/* Revenues */}
          </Heading>
        ),
        meta: { width: "25%" },
      }),
      tableColumnHelper.accessor("millionsofusd", {
        cell: (info) => {
          const initialValue = info?.getValue?.();

          return <CellComponent initialValue={initialValue} />;
        },
        header: (info) => (
          <Heading
            as="h1"
            className="flex justify-start pl-2 items-center h-[36px] border-indigo-50"
            style={{ color: "black" }}
          >
            Millions of USD
          </Heading>
        ),
        meta: { width: "15%" },
      }),
      tableColumnHelper.accessor("categorylabels", {
        cell: (info) => {
          const initialValue = info?.getValue?.();
          return (
            <>
              <div
                onClick={handleClick}
                // onMouseLeave={handleMouseLeave}
                style={{ cursor: "pointer" }}
              >
                <CellComponent initialValue={initialValue} />
              </div>
            </>
          );
        },
        header: (info) => (
          <Heading
            as="h2"
            className="flex justify-start pl-2 items-center h-[36px] border-indigo-50"
            style={{ color: "black" }}
          >
            Category Labels
          </Heading>
        ),
        meta: { width: "15%" },
      }),
      tableColumnHelper.accessor("rowconfidence", {
        cell: (info) => (
          <div className="flex justify-start pl-2 md:w-full p-2 border-indigo-50">
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
                    ? "#038C8C"
                    : info?.getValue?.() == "Medium"
                    ? "#CCB400"
                    : info?.getValue?.() == "Low"
                    ? "#DF4D5A"
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
            className="flex justify-start pl-2 items-center h-[36px] border-indigo-50"
            style={{ color: "black" }}
          >
            Confidence Score
          </Heading>
        ),
        meta: { width: "15%" },
      }),
      tableColumnHelper.accessor("rowview", {
        cell: (info) => (
          <div className="flex justify-center">
            {info.row.depth > 0 && info.row.subRows ? (
              <div className="h-[36px] flex items-center justify-center">
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
            ) : (
              <div className="h-[36px] w-[41px] flex items-center justify-center"></div>
            )}
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
        meta: { width: "1%" },
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

      {/* <header className="flex justify-center items-center w-full pt-[15px]">
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
      </header> */}
      <header className="flex justify-center items-center w-full  shadow-lg h-24 md:h-fit ">
        <div className="flex w-[100%] md:w-full  ">
          <Img
            src="images/img_image_23.png"
            className="h-[60px] w-[200px] md:h-auto md:w-auto object-cover"
          />
        </div>

        {/* <div className="my-auto flex self-start justify-between items-center whitespace-nowrap w-[94%] md:w-full 
        ml-0.5 gap-5 md:ml-0"> */}
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

      <div className="h-[1024px] w-full md:h-auto bg-white-A700_02 relative flex">
        <Sidebar
          width="205px !important"
          collapsedWidth="80px !important"
          collapsed={collapsed}
          className="flex flex-col h-screen pb-9 gap-[21px] top-0 md:p-5 sm:pb-5 bg-gray-50 shadow-sm !sticky overflow-auto md:hidden"
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
        <div className="flex md:flex-col justify-end items-start w-[82%] gap-6 pl-10">
          {/* <div className="flex flex-col w-[66%] top-[13%] right-0 left-0 m-auto absolute"> */}
          <div className="flex flex-col items-start md:self-stretch mt-14 md:p-5 flex-1">
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
                  active={true}
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
              <Text as="p" className="!font-medium pr-1">
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

            {showTable && (
              <div
                style={{
                  position: "absolute",
                  left: tablePosition.x,
                  top: tablePosition.y,
                }}
                onClick={() => setShowTable(false)}
              >
                <CategoryRanking initialValue={""} />
              </div>
            )}

            <Button
              className="flex items-center justify-center h-[39px] mt-[51px] mr-[30%] ml-[60%] px-[15px] mb-5 md:ml-0 sm:px-5 text-white-A700_01 text-center text-base font-medium bg-indigo-800 rounded-[3px] "
              onClick={handleNavigate}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
