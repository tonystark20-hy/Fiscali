import React, {useState} from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Img, Heading, Button, SelectBox } from "../../components";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import CovenantComplianceResultsRowupload from "../../components/CovenantComplianceResultsRowupload";
import { ReactTable } from "../../components/ReactTable";
import ReviewCovenantMatchesScrollbar from "../../components/ReviewCovenantMatchesScrollbar";
import { createColumnHelper } from "@tanstack/react-table";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import CellComponent from "../../components/CellComponent";
import SideBar from "components/SideBar";
import Header from "components/Header";
import NumberComponent from "../../components/NumberComponent";
import CategoryRanking from "../../components/CategoryRanking";


const tableData = [
  {
    rowtablehead: "Spread Line Items",
    subRows: [
      {
        rowtablehead: "Net Revenues",
        millionsofusd: "6,614.00",
      },
      {
        rowtablehead: "Cost of Goods Sold",
        millionsofusd: "2,506.60",
      },
      {
        rowtablehead: "Gross Profit",
        millionsofusd: "3,653.00",
      },
      {
        rowtablehead: "Selling, general and administrative expenses",
        millionsofusd: "3,237.00",
        notes:
          "SG&A includes 269.5 Depreciation and Amortization expense in cash flow statement",
        definitionofcom:
          "(c) depreciation and amortization expense, (d) amortization of intangibles(including, but not limited to, goodwill) and organization costs",
        rowconfidence: "High",
      },
      {
        rowtablehead: "Impairment of assets",
        millionsofusd: "31.60",
        definitionofcom:
          "(ii) any extraordinary or non-recurring non-cash income or gains (including, whether or not otherwise included sa a separate item in the statement of such Consolidated Net Income for such period, gains on the sales of assets outside of the ordinary course of business)",
        rowconfidence: "High",
      },
      {
        rowtablehead: "Restructuring and other charges",
        millionsofusd: "8,096.00",
        definitionofcom:
          "(g) Chargers incured during such period in connection with restructuring or reorganization change, including without limitation post-closing restructuring, reorganization and/or intergration charges or costs",
        rowconfidence: "Medium",
        rowview: true,
      },
      {
        rowtablehead: "Total other operating expenses, net",
        millionsofusd: "3,336.00",
      },
      {
        rowtablehead: "Operating Profit",
        millionsofusd: "317.00",
      },
    ],
  },
];

type TableRowType = {
  rowtablehead?: string;
  millionsofusd?: string;
  notes?: any;
  definitionofcom?: any;
  rowconfidence?: any;
  rowview?: any;
};

const categories = [
  { name: "Restructuring Expense", ranking: 1 },
  { name: "Impairment Charge", ranking: 2 },
  { name: "M&A Expense", ranking: 3 },
];



export default function ReviewCovenantMatchesPage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const [collapsed, setCollapsed] = React.useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState(tableData);

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
    } else {
      console.log(depth)
      updateRow(data[indices[depth]].subRows, indices, col, category, depth + 1);
    }
  };

  const handleCategoryClick = (col: string, row: string, category: string) => {
    // console.log("row, col, category: ", row, col, category);
  
    const updatedTableData = [...data];
  
    const rowSplit = row.split(".");
  
    updateRow(updatedTableData, rowSplit, col, category);

    // Update the value of the cell
    // updatedTableData[rowSplit[0]].subRows[rowSplit[1]][
    //   col
    // ] = category;
    // updatedTableData[rowSplit[0]].subRows[rowSplit[1]][
    //   "rowconfidence"
    // ] = "High";
    // updatedTableData[rowSplit[0]].subRows[rowSplit[1]][
    //   "rowview"
    // ] = false;
  
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

    // updatedTableData[rowSplit[0]].subRows[rowSplit[1]][
    //   "rowview"
    // ] =
    //   !updatedTableData[rowSplit[0]].subRows[rowSplit[1]][
    //     "rowview"
    //   ];

    setData(updatedTableData);
  };

  const handleInputChange = (value: string) => {
    // setSelectedCategory(value);
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

          return (

            <div className="cell-container">
            {/* <div className="left-blank"></div> */}
            <div className="center-content">
              <NumberComponent
                initialValue={initialValue}
                onChange={handleInputChange}
                category={initialValue}
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
      tableColumnHelper.accessor("notes", {
        cell: (info) => {
          const initialValue = info?.getValue?.();

          // return <CellComponent value={selectedCategory} onChange={handleInputChange} />;
          return (
            <CellComponent
              initialValue={initialValue}
              onChange={handleInputChange}
              category={initialValue}
            />
          );
        },
        header: (info) => (
          <Heading
            as="h1"
            className="flex justify-start pl-2 items-center h-[36px] border-indigo-50"
            style={{ color: "black" }}
          >
            Notes
          </Heading>
        ),
        meta: { width: "15%" },
      }),
      tableColumnHelper.accessor("definitionofcom", {
        cell: (info) => {
          const initialValue = info?.getValue?.();
          const id = info?.cell.id;
          const col = id.split("_")[1];
          const row = id.split("_")[0];
          // return <CellComponent value={selectedCategory} onChange={handleInputChange} />;
          return (
            <>
              <div style={{ cursor: "pointer" }}>
              <CellComponent
                initialValue={initialValue}
                onChange={handleInputChange}
                category={initialValue}
              />
              </div>
              {info.row.original.rowview && (
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
            as="h1"
            className="flex justify-start pl-2 items-center h-[36px] border-indigo-50"
            style={{ color: "black" }}
          >
            Definition of Components
          </Heading>
        ),
        meta: { width: "15%" },
      }),
      tableColumnHelper.accessor("rowconfidence", {
        cell: (info) => {
          const id = info?.cell.id;
          console.log(id);
          const col = id.split("_")[1];
          const row = id.split("_")[0];

          return (
            <>
              <div className="flex justify-start pl-2 md:w-full p-2 border-indigo-50">
                <Heading
                  onClick={() => openPopover(row, col)}
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

  const handleNavigate = () => {
    // Navigate to the '/reviewcovenantmatches' route
    navigate("/covenantcomplianceresults");
  };

  const NavigateUpload = () => {
    // Navigate to the '/reviewcovenantmatches' route
    navigate("/");
  };

  const NavigateFinancial = () => {
    // Navigate to the '/reviewcovenantmatches' route
    navigate("/reviewfinancialspreads");
  };

  return (
    <>
      <Helmet>
        <title>Fiscali 2</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>

      <div className="h-[1024px] w-full md:h-auto bg-white-A700_01 relative flex">

        <SideBar/>
        
        <div className="flex md:flex-col justify-end items-start w-[82%] gap-6 pl-10">
          <div className="flex flex-col items-start md:self-stretch mt-14 md:p-5 flex-1">
            <Text size="xl" as="p">
              Review Covenant Matches
            </Text>
            <div className="flex md:flex-col justify-between w-[83%] md:w-full mt-[9px] gap-5">
              <div className="flex md:flex-col md:self-stretch gap-[7px] flex-1">
                <div onClick={NavigateUpload} style={{ cursor: "pointer" }}>
                  <CovenantComplianceResultsRowupload
                    upload1="images/img_arrow_right.svg"
                    status="activated"
                    className="flex items-center gap-1 "
                  />
                </div>
                <div onClick={NavigateFinancial} style={{ cursor: "pointer" }}>
                  <CovenantComplianceResultsRowupload
                    upload="Review Financial Spreads"
                    upload1="images/img_arrow_right.svg"
                    status="activated"
                    className="flex items-center gap-1 "
                  />
                </div>
                <CovenantComplianceResultsRowupload
                  upload="Review Covenant Matches"
                  upload1="images/img_arrow_right.svg"
                  status="active"
                  className="flex items-center gap-1 "
                />

                <CovenantComplianceResultsRowupload
                  upload="Covenant Compliance Results"
                  status="inactivated"
                  className="flex items-center gap-1 "
                />
              </div>
            </div>
            <Text size="md" as="p" className="mt-2.5 md:ml-0">
              Please review line items and click on any row to amend. You will
              need to confirm all unchecked boxes before proceeding.{" "}
            </Text>
            <Text size="lg" as="p" className="mt-[38px]">
              EBITDAR Definition
            </Text>
            <Text as="p" className="mt-4">
              Sirius XM
            </Text>
            <Text as="p" className="mt-2">
              Fiscal Year Ended March 28, 2023
            </Text>
            <ReactTable
              bodyProps={{ className: "" }}
              headerProps={{ className: "md:flex-col" }}
              rowDataProps={{ className: "md:flex-col" }}
              className="self-stretch mt-1.5 shadow-lg"
              columns={tableColumns}
              data={data}
            />
            <Button
              className="lex whitespace-nowrap items-center justify-center h-[39px]  px-[35px]  text-white-A700_01 text-center text-base font-medium bg-indigo-800 rounded-[3px] my-20  ml-auto "
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
