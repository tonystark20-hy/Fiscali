import React from "react";
import { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, SelectBox, Button } from "../../components";
import CellComponent from "../../components/CellComponent";
import NumberComponent from "../../components/NumberComponent";
import CategoryRanking from "../../components/CategoryRanking";
import { ReactTable } from "../../components/ReactTable";
import ReviewFinancialSpreadsRowupload from "../../components/ReviewFinancialSpreadsRowupload";
import ReviewFinancialSpreadsScrollbar from "../../components/ReviewFinancialSpreadsScrollbar";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import { createColumnHelper } from "@tanstack/react-table";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { CloseSVG } from "../../assets/images";
import PopoverDialog from "components/PopoverDialog";
import { Popover, Button as ButtonMUI } from "@material-ui/core";

// import { useHistory } from 'react-router-dom';

const tableData = [
  {
    rowtablehead: "Revenues",
    subRows: [
      {
        rowtablehead: "Subscriber Revenues",
        millionsofusd: "6,614.00",
        categorylabels: "Revenues",
        rowconfidence: "High",
      },
      {
        rowtablehead: "Advertising Revenues",
        millionsofusd: "1,700.00",
        categorylabels: "Revenues",
        rowconfidence: "High",
      },
      {
        rowtablehead: "Other Revenues",
        millionsofusd: "151.00",
        categorylabels: "Revenues",
        rowconfidence: "High",
      },
      {
        rowtablehead: "Equipment Revenues",
        millionsofusd: "201.00",
        categorylabels: "Revenues",
        rowconfidence: "High",
      },
      {
        rowtablehead: "Total Revenues",
        millionsofusd: "8696.00",
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
        millionsofusd: "3,336.00",
        rowconfidence: "High",
      },
      {
        rowtablehead: "Revenue Share & Royalties",
        subRows: [
          {
            rowtablehead: "Programming & Comfort",
            millionsofusd: "559.00",
            categorylabels: "Cost of Goods Sold",
            rowconfidence: "High",
          },
          {
            rowtablehead: "Customer Service Center & Billing",
            millionsofusd: "501.00",
            categorylabels: "Cost of Goods Sold",
            rowconfidence: "High",
          },
          {
            rowtablehead: "Transmission",
            millionsofusd: "218.00",
            categorylabels: "Cost of Goods Sold",
            rowconfidence: "High",
          },
          {
            rowtablehead: "Cost of Equipment",
            millionsofusd: "18.00",
            categorylabels: "Cost of Goods Sold",
            rowconfidence: "High",
          },
          {
            rowtablehead: "Subscriber Acquisition Costs",
            millionsofusd: "325.00",
            categorylabels: "Cost of Goods Sold",
            rowconfidence: "High",
          },
          {
            rowtablehead: "Sales and Marketing",
            millionsofusd: "1056.00",
            categorylabels: "Cost of Goods Sold",
            rowconfidence: "High",
          },
          {
            rowtablehead: "Engineering, Design and Development",
            millionsofusd: "265.00",
            categorylabels: "R&D Expense",
            rowconfidence: "Low",
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
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const [collapsed, setCollapsed] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const navigate = useNavigate();
  // const history = useHistory();

  const [showTable, setShowTable] = useState(false);
  const [tablePosition, setTablePosition] = useState({ x: 0, y: 0 });

  const [anchor, setAnchor] = useState(null);

  const openPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(event.currentTarget);
  };

  // const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
  //   const { left, top } = event.currentTarget.getBoundingClientRect();

  //   // console.log({left, top})
  //   // console.log(window.scrollX)

  //   if (showTable) {
  //     setShowTable(false);
  //   } else {
  //     // setShowTable(true);
  //     setTablePosition({
  //       x: event.clientX - left / 2,
  //       y: event.clientY - top / 2,
  //     });
  //     // console.log(event.clientX);
  //     // console.log(event.clientY);
  //   }
  //   // console.log(tablePosition.x)
  //   // console.log(tablePosition.y)
  // };

  // const handleMouseLeave = () => {
  //   // setShowTable(false);
  // };

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
                {info.row.getIsExpanded() ? (
                  <img src="images/img_down_arw.svg" alt="Down Arrow" />
                ) : (
                  <img
                    src="images/img_down_arw.svg"
                    alt="Up Arrow"
                    style={{ transform: "rotateX(180deg)" }}
                  />
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

          // return <CellComponent value={selectedCategory} onChange={handleInputChange} />;
          return (
            <div className="cell-container">
              {/* <div className="left-blank"></div> */}
              <div className="center-content">
                <NumberComponent
                  initialValue={initialValue}
                  onChange={handleInputChange}
                  category={selectedCategory}
                />
              </div>
              <div className="right-blank"></div>
              {/* <div className="right-blank"></div> */}
            </div>
          );
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
                // onClick={handleClick}
                // onMouseLeave={handleMouseLeave}
                style={{ cursor: "pointer" }}
              >
                {/* <CellComponent value={selectedCategory} onChange={handleInputChange} /> */}
                <CellComponent
                  initialValue={initialValue}
                  onChange={handleInputChange}
                  category={selectedCategory}
                />
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
              onClick={openPopover}
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
                backgroundColor: `${
                  info?.getValue?.() == "High"
                    ? "#BAD8D8"
                    : info?.getValue?.() == "Medium"
                    ? "#FFE08E" // Equivalent to bg-yellow-200
                    : info?.getValue?.() == "Low"
                    ? "#F9CDD0" // Equivalent to bg-red-300
                    : "#FDFFFF" // Equivalent to bg-white-500
                }`,
              }}
            >
              {info?.getValue?.()}
              {/* <div> */}
              {/* <ButtonMUI
                  // variant="contained"
                  // color="secondary"
                  onClick={openPopover}
                ></ButtonMUI> */}
              <Popover
                open={Boolean(anchor)}
                anchorEl={anchor}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{ vertical: "bottom", horizontal: "left" }}
                onClose={() => setAnchor(null)}
              >
                this is a POPOVER
              </Popover>
              {/* </div> */}
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

  const categories = [
    { name: "G&A Expense", ranking: 1 },
    { name: "R&D Expense", ranking: 2 },
    { name: "Tax Expense", ranking: 3 },
  ];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    console.log(selectedCategory);
  };

  const handleInputChange = (value: string) => {
    // setSelectedCategory(value);
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

      <header className="flex justify-center items-center w-full  shadow-lg h-24 md:h-fit mb-2">
        <div className="flex w-[100%] md:w-full  ">
          <Img
            src="images/img_image_23.png"
            className="h-[60px] w-[200px] md:h-auto md:w-auto object-cover"
          />
        </div>
        <div className="whitespace-nowrap w-[94%] flex self-start justify-between my-auto ">
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

      <div className="h-[1024px] w-full md:h-auto bg-white-A700_02 relative flex ">
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
        <div className="flex md:flex-col justify-end items-start w-[82%] gap-6 pl-10">
          {/* <div className="flex flex-col w-[66%] top-[13%] right-0 left-0 m-auto absolute"> */}
          <div className="flex flex-col items-start md:self-stretch mt-14 md:p-5 flex-1">
            <Text size="xl" as="p">
              Review Financial Spreads
            </Text>
            <div className="flex md:flex-col justify-between w-[83%] md:w-full mt-[9px] gap-5">
              <div className="flex md:flex-col md:self-stretch gap-[7px] flex-1">
                <div onClick={NavigateUpload} style={{ cursor: "pointer" }}>
                  <ReviewFinancialSpreadsRowupload
                    upload1="images/img_arrow_right.svg"
                    status="activated"
                    className="flex items-center gap-1 "
                  />
                </div>
                <ReviewFinancialSpreadsRowupload
                  upload="Review Financial Spreads"
                  upload1="images/img_arrow_right.svg"
                  status="active"
                  className="flex items-center gap-1 "
                />

                <ReviewFinancialSpreadsRowupload
                  upload="Review Covenant Matches"
                  upload1="images/img_arrow_right.svg"
                  className="flex items-center gap-1 "
                />

                <ReviewFinancialSpreadsRowupload
                  upload="Covenant Compliance Results"
                  className="flex items-center gap-1 "
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
                12 Months, March 28, 2023
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
                <CategoryRanking
                  categories={categories}
                  onCategoryClick={handleCategoryClick}
                />
              </div>
            )}

            <Button
              className="flex whitespace-nowrap items-center justify-center h-[39px]  px-[35px]  text-white-A700_01 text-center text-base font-medium bg-indigo-800 rounded-[3px] my-20  ml-auto "
              onClick={handleNavigate}
            >
              Continue
            </Button>
          </div>

          {/* <Popover
            open={open}
            anchorOrigin={{
              vertical: "center",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            The content of the Popover.
          </Popover> */}
        </div>
      </div>
    </>
  );
}
