import React, { useEffect } from "react";
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
import SideBar from "components/SideBar";
import Header from "components/Header";
import BlurPage from "components/BlurPage";
import Checkbox from "components/Checkbox";

// import { useHistory } from 'react-router-dom';

type TableDataType = {
  rowtablehead: string;
  subRows: {
    rowtablehead: string;
    millionsofusd: string;
    categorylabels: string;
    rowconfidence: string;
    showcategory: boolean;
  }[];
};

const tableData = [
  {
    rowtablehead: "Revenues",
    subRows: [
      {
        rowtablehead: "Subscriber Revenues",
        millionsofusd: "6,614.00",
        categorylabels: "Revenues",
        rowconfidence: "High",
        rowview: false,
        checked: true,
      },
      {
        rowtablehead: "Advertising Revenues",
        millionsofusd: "1,700.00",
        categorylabels: "Revenues",
        rowconfidence: "High",
        rowview: false,
        checked: true,
      },
      {
        rowtablehead: "Other Revenues",
        millionsofusd: "151.00",
        categorylabels: "Revenues",
        rowconfidence: "High",
        rowview: false,
        checked: true,
      },
      {
        rowtablehead: "Equipment Revenues",
        millionsofusd: "201.00",
        categorylabels: "Revenues",
        rowconfidence: "High",
        rowview: false,
        checked: true,
      },
      {
        rowtablehead: "Total Revenues",
        millionsofusd: "8,696.00",
        categorylabels: "Total Revenues",
        rowconfidence: "High",
        rowview: false,
        checked: true,
      },
    ],
  },
  {
    rowtablehead: "",
    millionsofusd: "",
    categorylabels: "",
    rowconfidence: "",
  },
  {
    rowtablehead: "Operating Expenses",
    subRows: [
      {
        rowtablehead: "Cost of Services",
      },
      {
        rowtablehead: "Revenue Share & Royalties",
        subRows: [
          {
            rowtablehead: "Programming & Comfort",
            millionsofusd: "559.00",
            categorylabels: "Cost of Goods Sold",
            rowconfidence: "High",
            rowview: false,
            checked: true,
          },
          {
            rowtablehead: "Customer Service Center & Billing",
            millionsofusd: "501.00",
            categorylabels: "Cost of Goods Sold",
            rowconfidence: "High",
            rowview: false,
            checked: true,
          },
          {
            rowtablehead: "Transmission",
            millionsofusd: "218.00",
            categorylabels: "Cost of Goods Sold",
            rowconfidence: "High",
            rowview: false,
            checked: true,
          },
          {
            rowtablehead: "Cost of Equipment",
            millionsofusd: "18.00",
            categorylabels: "Cost of Goods Sold",
            rowconfidence: "High",
            rowview: false,
            checked: true,
          },
          {
            rowtablehead: "Subscriber Acquisition Costs",
            millionsofusd: "325.00",
            categorylabels: "Cost of Goods Sold",
            rowconfidence: "High",
            rowview: false,
            checked: true,
          },
          {
            rowtablehead: "Sales and Marketing",
            millionsofusd: "1,056.00",
            categorylabels: "Cost of Goods Sold",
            rowconfidence: "High",
            rowview: false,
            checked: true,
          },
          {
            rowtablehead: "Engineering, Design and Development",
            millionsofusd: "265.00",
            categorylabels: "R&D Expense",
            rowconfidence: "Low",
            originalconfidence: "Low",
            rowview: false,
            checked: false,
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
  originalconfidence?: any;
  rowview?: boolean;
  checked?: boolean;
  subRows?: TableRowType[];
};

const isMainRow = (row) => row.depth === 0;
// const tableRef = useRef(null);

export default function ReviewFinancialSpreadsPage({ loginSuccess }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const [collapsed, setCollapsed] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [data, setData] = useState(tableData);
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(true);
  // const history = useHistory();

  const [showTable, setShowTable] = useState(false);
  const [tablePosition, setTablePosition] = useState({ x: 0, y: 0 });

  const tableColumns = React.useMemo(() => {
    // toggleAllRowsExpanded(true)
    const tableColumnHelper = createColumnHelper<TableRowType>();
    return [
      tableColumnHelper.accessor("rowtablehead", {
        cell: (info) => {
          // const [expanded, setExpanded] = useState(true);
          // setExpanded(true)
          // let expanded = true
          // info.row.toggleExpanded(expanded)

          return (
            <>
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
                // onClick={() => setExpanded(!expanded)}
                // onClick={() => expanded = !expanded}
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
          </>
          )
        },
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
              <div className="right-blank"></div>
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
          const id = info?.cell.id;
          // console.log(initialValue);
          const col = id.split("_")[1];
          const row = id.split("_")[0];
          // console.log(row);
          // console.log(col);

          return (
            <>
              <div style={{ cursor: "pointer" }}>
                <CellComponent
                  initialValue={initialValue}
                  onChange={handleInputChange}
                  category={selectedCategory}
                />
              </div>

              {info.row.original.rowview && (info.row.original.originalconfidence === "Low" || info.row.original.originalconfidence === "Medium") && (
                <div className="relative">
                  <div className="category-ranking-container">
                    <CategoryRanking
                      categories={categories}
                      col={col}
                      row={row}
                      onCategoryClick={handleCategoryClick}
                    />
                  </div>
                </div>
              )}
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
        cell: (info) => {
          const id = info?.cell.id;
          // console.log(id);
          const col = id.split("_")[1];
          const row = id.split("_")[0];

          return (
            <>
              <div className="flex justify-start pl-2 md:w-full p-2 border-indigo-50">
                <Heading
                  // onClick={() => openPopover(row, col)}
                  onMouseOver={() => openPopover(row, col)}
                  as="p"
                  className={`flex justify-center items-center h-[20px] px-2.5 py-px rounded-[10px] ${
                    info?.getValue?.() === "High"
                      ? "bg-green-300"
                      : info?.getValue?.() === "Medium"
                      ? "bg-yellow-200"
                      : info?.getValue?.() === "Low"
                      ? "bg-red-300"
                      : "bg-white-500"
                  }`}
                  style={{
                    color: `${
                      info?.getValue?.() === "High"
                        ? "#038C8C"
                        : info?.getValue?.() === "Medium"
                        ? "#CCB400"
                        : info?.getValue?.() === "Low"
                        ? "#DF4D5A"
                        : "white"
                    }`,
                    backgroundColor: `${
                      info?.getValue?.() === "High"
                        ? "#BAD8D8"
                        : info?.getValue?.() === "Medium"
                        ? "#FFE08E" // Equivalent to bg-yellow-200
                        : info?.getValue?.() === "Low"
                        ? "#F9CDD0" // Equivalent to bg-red-300
                        : "#FDFFFF" // Equivalent to bg-white-500
                    }`,
                    cursor: "pointer",
                  }}
                >
                  {info?.getValue?.()}
                </Heading>
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
            Confidence Score
          </Heading>
        ),
        meta: { width: "15%" },
      }),
      tableColumnHelper.accessor("rowview", {
        cell: (info) => {
          const id = info?.cell.id;
          const row = id.split("_")[0];
          return (
            <>
          <div className="flex justify-center">
            {info.row.depth > 0 &&
            info.row.subRows &&
            info.row.original.categorylabels !== undefined ? (
              <div className="h-[36px] flex items-center justify-center">
                <input
                  type="checkbox"
                  // defaultChecked={info.row.original.rowconfidence === "High"}
                  checked={info.row.original.checked}
                  // onClick={() => handleCheckboxChange(row)}
                  onChange={() => handleCheckboxChange(row)}
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
              // <Checkbox initialChecked={info.row.original.checked} onChange={handleCheckboxChange(row)}/>
            ) : (
              <div className="h-[36px] w-[41px] flex items-center justify-center"></div>
            )}
          </div>
          </>
          )
        },
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

  const updateCheck = (
    data: any,
    indices: string[],
    depth: number = 0
  ): void => {
    if (depth === indices.length - 1) {
      data[indices[depth]]["checked"] = !data[indices[depth]]["checked"];
    } else {
      console.log(depth)
      updateCheck(data[indices[depth]].subRows, indices, depth + 1);
    }
  };

  const handleCheckboxChange = (row: string) => {
    const updatedTableData = [...data];
    const rowSplit = row.split(".");
    updateCheck(updatedTableData, rowSplit);
    setData(updatedTableData);
  }

  const updateRow = (
    data: any,
    indices: string[],
    col: string,
    category: any,
    depth: number = 0
  ): void => {
    if (depth === indices.length - 1) {
      data[indices[depth]][col] = category;
      data[indices[depth]]["rowconfidence"] = "High";
      data[indices[depth]]["rowview"] = false;
      data[indices[depth]]["checked"] = true;
    } else {
      console.log(depth)
      updateRow(data[indices[depth]].subRows, indices, col, category, depth + 1);
    }
  };

  const handleCategoryClick = (col: string, row: string, category: string) => {
    setSelectedCategory(category);
    // console.log("row, col, category: ", row, col, category);

    const updatedTableData = [...data];

    const rowSplit = row.split(".");

    updateRow(updatedTableData, rowSplit, col, category);

    // Update the state with the modified table data
    setData(updatedTableData);

    // console.log(data);
  };

  const updatePopOver = (
    data: any,
    indices: string[],
    col: string,
    depth: number = 0
  ): void => {
    if (depth === indices.length - 1) {
      data[indices[depth]]["rowview"] = !data[indices[depth]]["rowview"];
    } else {
      // console.log(depth)
      updatePopOver(data[indices[depth]].subRows, indices, col, depth + 1);
    }
  };

  const openPopover = (row: string, col: string) => {
    const updatedTableData = [...data];

    const rowSplit = row.split(".");

    updatePopOver(updatedTableData, rowSplit, col);

    setData(updatedTableData);
  };

  const handleInputChange = (value: string) => {
    // setSelectedCategory(value);
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

      <div className="h-[1024px] w-full md:h-auto bg-white-A700_02 relative flex ">
        <SideBar />

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
              data={data}
            />

            <Button
              className="flex whitespace-nowrap items-center justify-center h-[39px]  px-[35px]  text-white-A700_01 text-center text-base font-medium bg-indigo-800 rounded-[3px] my-20  ml-auto "
              onClick={handleNavigate}
            >
              Continue
            </Button>
            {/* <div>
              <button
                // variant="contained"
                // color="secondary"
                onClick={openPopover}
                className="text-red-400 bg-yellow-300"
              >
                POPUPPPOP
              </button>
              <Popover
                open={Boolean(anchor)}
                anchorEl={anchor}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                onClose={() => setAnchor(null)}
              >
                popovre bottom text
              </Popover>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
