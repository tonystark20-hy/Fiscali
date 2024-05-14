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

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const tableData = [
  { rowtablehead: "Net Revenue", millionsofusd: "6,614.0" },
  { rowtablehead: "Cost of Goods Sold", millionsofusd: "(2,506.6)" },
  { rowtablehead: "Gross Profit", millionsofusd: "3,653" },
  {
    notes:
      "Sg&A includes 269.5 \nDepreciation and \nAmortization expense in \ncash flow statement",
    definitionofcom:
      "(c) depreciation and amortization expense, \n(d) amortization of intangibles(including, \nbut not limited to, goodwill) and organization \ncosts",
    rowconfidence: "High",
    rowview: "images/img_check.svg",
  },
  {
    definitionofcom:
      "(ii) any extraordinary or non-recurring non-cash\n income or gains (including, whether or not \notherwise included sa a separate item in the \nstatement of such Consolidated Net Income for \nsuch period, gains on the sales of assets \noutside of the ordinary course of business)",
    rowconfidence: "High",
    rowview: "images/img_check.svg",
  },
  {
    definitionofcom:
      "(g) Chargers incured during such period in \nconnection with restructuring or reorganization \nchange, including without limitation post-closing\n restructuring, reorganization and/or\n intergration charges or costs",
    rowconfidence: "Medium",
  },
  {
    rowtablehead: "Total other operating expenses, net",
    millionsofusd: "(3，336.）",
  },
  { rowtablehead: "Operating Income", millionsofusd: "317" },
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
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper<TableRowType>();
    return [
      tableColumnHelper.accessor("rowtablehead", {
        cell: (info) => (
          <Heading
            as="h4"
            className="flex justify-center items-center h-[36px] border-indigo-50"
          >
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <div className="md:self-stretch flex-1">
            <SelectBox
              name="tablehead"
              placeholder={`Spread Line Items`}
              options={dropDownOptions}
              className="pl-2.5 pr-[35px] py-[9px] sm:pr-5 text-black-900 text-sm font-bold border-indigo-50"
            />
          </div>
        ),
        meta: { width: "331px" },
      }),
      tableColumnHelper.accessor("millionsofusd", {
        cell: (info) => (
          <Text
            as="p"
            className="flex justify-center items-center h-[36px] !font-normal border-teal-50"
          >
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Heading
            as="h1"
            className="flex justify-center items-center h-[36px] border-indigo-50"
          >
            Millions of USD
          </Heading>
        ),
        meta: { width: "140px" },
      }),
      tableColumnHelper.accessor("notes", {
        cell: (info) => (
          <div className="flex justify-center">
            <div className="h-[36px] w-full border-indigo-50" />
          </div>
        ),
        header: (info) => (
          <Heading
            as="h2"
            className="flex justify-center items-center h-[36px] border-indigo-50"
          >
            Notes
          </Heading>
        ),
        meta: { width: "173px" },
      }),
      tableColumnHelper.accessor("definitionofcom", {
        cell: (info) => (
          <div className="md:self-stretch flex-1">
            <div className="h-[36px] border-indigo-50" />
          </div>
        ),
        header: (info) => (
          <Heading
            as="h3"
            className="flex justify-center items-center h-[36px] border-indigo-50"
          >
            Definition of Components
          </Heading>
        ),
        meta: { width: "309px" },
      }),
      tableColumnHelper.accessor("rowconfidence", {
        cell: (info) => (
          <div className="flex justify-center">
            <div className="h-[36px] w-full border-indigo-50" />
          </div>
        ),
        header: (info) => (
          <div className="flex">
            <Button className="flex items-center justify-center h-[36px] px-[11px] text-black-900 text-center text-sm font-bold border-indigo-50 min-w-[147px]">
              Confidence Score
            </Button>
          </div>
        ),
        meta: { width: "147px" },
      }),
      tableColumnHelper.accessor("rowview", {
        cell: (info) => (
          <div className="flex justify-center">
            <div className="h-[36px] w-[41px] border-indigo-50" />
          </div>
        ),
        header: (info) => (
          <div className="flex">
            <div className="h-[36px] w-[41px] border-indigo-50" />
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

      <header className="flex justify-center items-center w-full shadow-lg h-24 md:h-fit ">
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
            <div className="flex">
              <MenuItem
                icon={
                  <Img
                    src="images/img_fluentsearch16regular.svg"
                    alt="fluentsearch"
                    className="h-[16px] w-[16px]"
                  />
                }
              >
                Search Company{" "}
              </MenuItem>
            </div>
            <div className="flex items-center mt-[18px] gap-[26px] p-1.5">
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
            <div className="flex flex-col self-stretch gap-[0.82px]">
              <MenuItem>Sirius XM</MenuItem>
              <MenuItem>Microsoft</MenuItem>
              <MenuItem>Caterpillar</MenuItem>
            </div>
            <div className="flex self-stretch justify-between items-start gap-5 p-1">
              <div className="flex items-center ml-0.5 gap-1 md:ml-0">
                <Img
                  src="images/img_fluent_history_20_filled.svg"
                  alt="fluenthistory"
                  className="self-start h-[16px] w-[16px]"
                />
                <Text as="p" className="self-end">
                  Yearly Report
                </Text>
              </div>
              <Img
                src="images/img_frame_234.svg"
                alt="image_two"
                className="h-[10px] mt-[3px] mr-0.5 md:mr-0"
              />
            </div>
            <div className="flex flex-col self-stretch gap-[0.82px]">
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
              <MenuItem>Admin</MenuItem>
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
            <div className="self-stretch h-px mt-[321px] bg-gray-400_03" />
            <div className="flex flex-col gap-[0.82px]">
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
                    className="flex items-center gap-1 "
                  />
                </div>
                <div onClick={NavigateFinancial} style={{ cursor: "pointer" }}>
                  <CovenantComplianceResultsRowupload
                    upload="Review Financial Spreads"
                    upload1="images/img_arrow_right.svg"
                    className="flex items-center gap-1 "
                  />
                </div>
                <CovenantComplianceResultsRowupload
                  upload="Review Covenant Matches"
                  upload1="images/img_arrow_right.svg"
                  active={true}
                  className="flex items-center gap-1 "
                />

                <CovenantComplianceResultsRowupload
                  upload="Covenant Compliance Results"
                  className="flex items-center gap-1 "
                />
              </div>
            </div>
            <Text size="md" as="p" className="mt-2.5 ml-2.5 md:ml-0">
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
              className="flex items-center justify-center h-[39px] mt-[51px] ml-[1300px] px-[15px] mb-5 md:ml-0 sm:px-5 text-white-A700_01 text-center text-base font-medium bg-indigo-800 rounded-[3px] right-40 absolute bottom-12"
              onClick={handleNavigate}
            >
              Continue
            </Button>
          </div>

          {/* <ReviewCovenantMatchesScrollbar className="flex flex-col items-center justify-center w-[17px] md:p-5 bg-blue_gray-50" /> */}
        </div>
      </div>
    </>
  );
}
