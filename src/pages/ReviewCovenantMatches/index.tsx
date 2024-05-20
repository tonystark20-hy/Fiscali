import React from "react";
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

// const tableData = [
//   { rowtablehead: "Net Revenue", millionsofusd: "6,614.0" },
//   { rowtablehead: "Cost of Goods Sold", millionsofusd: "(2,506.6)" },
//   { rowtablehead: "Gross Profit", millionsofusd: "3,653" },
//   {
//     notes:
//       "Sg&A includes 269.5 \nDepreciation and \nAmortization expense in \ncash flow statement",
//     definitionofcom:
//       "(c) depreciation and amortization expense, \n(d) amortization of intangibles(including, \nbut not limited to, goodwill) and organization \ncosts",
//     rowconfidence: "High",
//     rowview: "images/img_check.svg",
//   },
//   {
//     definitionofcom:
//       "(ii) any extraordinary or non-recurring non-cash\n income or gains (including, whether or not \notherwise included sa a separate item in the \nstatement of such Consolidated Net Income for \nsuch period, gains on the sales of assets \noutside of the ordinary course of business)",
//     rowconfidence: "High",
//     rowview: "images/img_check.svg",
//   },
//   {
//     definitionofcom:
//       "(g) Chargers incured during such period in \nconnection with restructuring or reorganization \nchange, including without limitation post-closing\n restructuring, reorganization and/or\n intergration charges or costs",
//     rowconfidence: "Medium",
//   },
//   {
//     rowtablehead: "Total other operating expenses, net",
//     millionsofusd: "(3，336.）",
//   },
//   { rowtablehead: "Operating Income", millionsofusd: "317" },
// ];

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
        millionsofusd: "3653.00",

      },
      {
        rowtablehead: "Selling, general and administrative expenses",
        millionsofusd: "3,237.00",
        notes: "Sg&A includes 269.5 Depreciation and Amortization expense in cash flow statement",
        definitionofcom: "(c) depreciation and amortization expense, \n(d) amortization of intangibles(including, \nbut not limited to, goodwill) and organization \ncosts",
        rowconfidence: "High"
      },
      {
        rowtablehead: "Impairment of assets",
        millionsofusd: "31.60",
        definitionofcom: "(ii) any extraordinary or non-recurring non-cash\n income or gains (including, whether or not \notherwise included sa a separate item in the \nstatement of such Consolidated Net Income for \nsuch period, gains on the sales of assets \noutside of the ordinary course of business)",
        rowconfidence: "High"
      },
      {
        rowtablehead: "Restructuring and other charges",
        millionsofusd: "8,096.00",
        definitionofcom: "(g) Chargers incured during such period in \nconnection with restructuring or reorganization \nchange, including without limitation post-closing\n restructuring, reorganization and/or\n intergration charges or costs",
        rowconfidence: "Medium"
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

export default function ReviewCovenantMatchesPage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const [collapsed, setCollapsed] = React.useState(false);
  const navigate = useNavigate();

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
            Definition of Components
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

      <header className="flex justify-center items-center w-full shadow-lg h-24 md:h-fit mb-2">
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

      <div className="h-[1024px] w-full md:h-auto bg-white-A700_01 relative flex">
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
              data={tableData}
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
