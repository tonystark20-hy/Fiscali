import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Img, Heading, Button } from "../../components";
import { Input } from "../../components/Input";
import CovenantComplianceResultsRowupload from "../../components/CovenantComplianceResultsRowupload";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

export default function CovenantComplianceResultsPage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const [collapsed, setCollapsed] = React.useState(false);
  const navigate = useNavigate();

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  const NavigateUpload = () => {
    // Navigate to the '/reviewcovenantmatches' route
    navigate("/");
  };

  const NavigateFinancial = () => {
    // Navigate to the '/reviewcovenantmatches' route
    navigate("/reviewfinancialspreads");
  };

  const NavigateCovenant = () => {
    // Navigate to the '/reviewcovenantmatches' route
    navigate("/reviewcovenantmatches");
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

      <header className="flex justify-center items-center w-full pt-[15px] bg-gray shadow-md">
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
          <div className="flex items-center mt-5 gap-[26px] p-1.5">
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
                [`&:hover, &.ps-active`]: {
                  color: "#354365",
                  backgroundColor: "#eaeaea !important",
                },
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
              <Img
                src="images/img_frame_234.svg"
                alt="image_two"
                className="h-[10px] mt-[3px] mr-[3px]"
              />
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

        <div className="h-[1024px] w-full md:h-auto bg-white-A700_01 relative pl-10">
          <div className="flex flex-col items-start w-[82%] mb-[34px] mr-[41px] md:mr-0">
            <div className="flex md:flex-col items-end ml-[13px] gap-2 md:ml-0">
              <div className="flex flex-col items-start mb-[3px] md:p-5">
                <Text size="xl" as="p" className="z-[1]">
                  Covenant Compliance Results
                </Text>
                <div className="flex md:flex-col justify-between w-[83%] md:w-full mt-[9px] gap-5">
                  <div className="flex md:flex-col md:self-stretch gap-[7px] flex-1">
                    <div onClick={NavigateUpload} style={{ cursor: "pointer" }}>
                      <CovenantComplianceResultsRowupload
                        upload1="images/img_arrow_right.svg"
                        className="flex items-center gap-1"
                      />
                    </div>
                    <div
                      onClick={NavigateFinancial}
                      style={{ cursor: "pointer" }}
                    >
                      <CovenantComplianceResultsRowupload
                        upload="Review Financial Spreads"
                        upload1="images/img_arrow_right.svg"
                        className="flex items-center gap-1"
                      />
                    </div>
                    <div
                      onClick={NavigateCovenant}
                      style={{ cursor: "pointer" }}
                    >
                      <CovenantComplianceResultsRowupload
                        upload="Review Covenant Matches"
                        upload1="images/img_arrow_right.svg"
                        className="flex items-center gap-1"
                      />
                    </div>
                    <CovenantComplianceResultsRowupload
                      upload="Covenant Compliance Results"
                      active={true}
                      className="flex items-center gap-1 "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch mt-[69px] p-[22px] sm:p-5 bg-white-A700_01 shadow-xs">
              <div className="flex flex-col mt-[7px] mb-[74px]">
                <div className="flex md:flex-col justify-center items-center gap-7 z-[1]">
                  <div className="flex flex-col items-start md:self-stretch mb-[5px] flex-1">
                    <div className="flex gap-4 flex-wrap">
                      <Text as="p" className="self-start">
                        Sirius XM
                      </Text>
                      <Text as="p" className="self-end">
                        Fiscal Year Ended March 28, 2023
                      </Text>
                    </div>
                    <div className="flex sm:flex-col items-center mt-8 gap-2.5 p-2.5">
                      <div className="flex flex-col">
                        <Button className="flex items-center justify-center h-[20px] w-[20px] border-cyan-800 border border-solid bg-white-A700_01 rounded-md">
                          <Img src="images/img_check.svg" />
                        </Button>
                      </div>
                      <Text size="md" as="p" className="self-end">
                        Consolidated Leverage Ratio = 3.25&lt;3.75 Threshold
                      </Text>
                      <Img
                        src="images/img_vector.svg"
                        alt="vector_one"
                        className="h-[20px] w-[20px] sm:w-full"
                      />
                      <Img
                        src="images/img_material_symbols_info_outline.svg"
                        alt="material_one"
                        className="h-[24px] w-[24px] sm:w-full"
                      />
                    </div>
                    <div className="self-stretch ml-[30px] p-5 md:ml-0 bg-white-A700_01 rounded-[3px]">
                      <div className="flex sm:flex-col justify-center items-start gap-[15px]">
                        <Img
                          src="images/img_material_symbols_info_outline.svg"
                          alt="material_three"
                          className="h-[24px] w-[24px] sm:w-full"
                        />
                        <Text
                          size="md"
                          as="p"
                          className="w-[96%] sm:w-full !text-blue_gray-700"
                        >
                          “Consolidated Leverage Ratio” means on the last day of
                          any Fiscal Quarter, the ratio of (a) Adjusted Debt on
                          such day to (b) Consolidated EBITDAR for the period of
                          four consecutive Fiscal Quarters ending on such day
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-col items-center mt-[53px] ml-2.5 gap-2.5 md:ml-0">
                      <div className="flex flex-col">
                        <Button className="flex items-center justify-center h-[20px] w-[20px] border-cyan-800 border border-solid bg-white-A700_01 rounded-md">
                          <Img src="images/img_check.svg" />
                        </Button>
                      </div>
                      <Text size="md" as="p" className="self-start">
                        Indebtedness Covenant: Not Validated
                      </Text>
                      <Img
                        src="images/img_material_symbols_info_outline.svg"
                        alt="material_five"
                        className="h-[24px] w-[24px] sm:w-full"
                      />
                      <Img
                        src="images/img_vector.svg"
                        alt="vector_three"
                        className="h-[20px] w-[20px] sm:w-full"
                      />
                    </div>
                  </div>
                  <Img
                    src="images/img_lev_ratio.png"
                    alt="levratio_one"
                    className="self-end w-[40%] md:w-full object-cover"
                  />
                </div>
                <div className="flex md:flex-col justify-center items-start w-[97%] md:w-full mt-[-1px] gap-6">
                  <div className="md:self-stretch p-5 bg-white-A700_01 flex-1 rounded-[3px]">
                    <div className="flex sm:flex-col justify-center items-start gap-[15px]">
                      <Img
                        src="images/img_material_symbols_info_outline.svg"
                        alt="material_seven"
                        className="h-[24px] w-[24px] sm:w-full"
                      />
                      <Text
                        size="md"
                        as="p"
                        className="w-[96%] sm:w-full !text-blue_gray-700"
                      >
                        “Consolidated Leverage Ration” means on the last day of
                        any Fiscal Quarter, the ratio of (a) Adjusted Debt on
                        such day to (b) Consolidated EBITDAR for the period of
                        four consecutive Fiscal Quarters ending on such day
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="images/img_indebtedness.png"
                    alt="indebtedness"
                    className="w-[41%] md:w-full mt-[15px] object-cover"
                  />
                </div>
              </div>
            </div>
            <Button className="flex items-center justify-center h-[39px] mt-32 ml-[991px] px-[35px] md:ml-0 sm:px-5 text-white-A700_01 text-center text-base font-medium bg-indigo-800 rounded-[3px]">
              Export File
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
