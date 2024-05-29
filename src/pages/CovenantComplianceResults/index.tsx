import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Img, Heading, Button } from "../../components";
import { Input } from "../../components/Input";
import CovenantComplianceResultsRowupload from "../../components/CovenantComplianceResultsRowupload";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "components/SideBar";
import Header from "components/Header";


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

      <Header/>

      <div className="h-full w-full bg-white-A700_01 relative flex ">

        <SideBar/>

        <div className="flex md:flex-col justify-end items-start w-[82%] gap-6 pl-10 mb-20">
          <div className="flex flex-col items-start md:self-stretch mt-14 md:p-5 flex-1">
            <Text size="xl" as="p">
              Covenant Compliance Results
            </Text>
            <div className="flex md:flex-col justify-between w-[83%] md:w-full mt-[9px] gap-5">
              <div className="flex md:flex-col md:self-stretch gap-[7px] flex-1">
                <div onClick={NavigateUpload} style={{ cursor: "pointer" }}>
                  <CovenantComplianceResultsRowupload
                    upload1="images/img_arrow_right.svg"
                    status="activated"
                    className="flex items-center gap-1"
                  />
                </div>
                <div onClick={NavigateFinancial} style={{ cursor: "pointer" }}>
                  <CovenantComplianceResultsRowupload
                    upload="Review Financial Spreads"
                    upload1="images/img_arrow_right.svg"
                    status="activated"
                    className="flex items-center gap-1"
                  />
                </div>
                <div onClick={NavigateCovenant} style={{ cursor: "pointer" }}>
                  <CovenantComplianceResultsRowupload
                    upload="Review Covenant Matches"
                    upload1="images/img_arrow_right.svg"
                    status="activated"
                    className="flex items-center gap-1"
                  />
                </div>
                <CovenantComplianceResultsRowupload
                  upload="Covenant Compliance Results"
                  status="active"
                  className="flex items-center gap-1 "
                />
              </div>
            </div>

            <Container
              fluid
              className="h-full self-stretch mt-[50px] p-[22px] sm:p-5 bg-white-A700_01 shadow-sm"
            >
              <div className="flex gap-4 flex-wrap">
                <Text as="p" className="self-start">
                  Sirius XM
                </Text>
                <Text as="p" className="self-end">
                  Fiscal Year Ended March 28, 2023
                </Text>
              </div>
              <Row className="">
                <Col lg className="flex flex-col md:mb-0 ">
                  <div className="h-full flex md:flex-col justify-center items-center gap-7 z-[1]">
                    <div className="flex flex-col items-start md:self-stretch flex-1">
                      <div className="flex sm:flex-col items-center mt-8 gap-2.5 p-2.5">
                        <div className="flex flex-col">
                          <div className=" flex items-center justify-center">
                            <input
                              type="checkbox"
                              defaultChecked={false}
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
                            “Consolidated Leverage Ratio” means on the last day
                            of any Fiscal Quarter, the ratio of (a) Adjusted
                            Debt on such day to (b) Consolidated EBITDAR for the
                            period of four consecutive Fiscal Quarters ending on
                            such day 5504854
                          </Text>
                        </div>
                      </div>
                      <div className="flex sm:flex-col items-center  ml-2.5 gap-2.5 md:ml-0">
                        <div className="flex flex-col">
                          {/* <Button className="flex items-center justify-center h-[20px] w-[20px] border-cyan-800 border border-solid bg-white-A700_01 rounded-md">
                            <Img src="images/img_check.svg" />
                          </Button> */}
                          <div className=" flex items-center justify-center">
                            <input
                              type="checkbox"
                              defaultChecked={false}
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
                        </div>
                        <Text size="md" as="p" className="self-start">
                          Indebtedness Covenant: Not Validated
                        </Text>
                        <Img
                          src="images/img_vector.svg"
                          alt="vector_three"
                          className="h-[20px] w-[20px] sm:w-full"
                        />
                        <Img
                          src="images/img_material_symbols_info_outline.svg"
                          alt="material_five"
                          className="h-[24px] w-[24px] sm:w-full"
                        />
                      </div>
                    </div>
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
                          “Consolidated Leverage Ration” means on the last day
                          of any Fiscal Quarter, the ratio of (a) Adjusted Debt
                          on such day to (b) Consolidated EBITDAR for the period
                          of four consecutive Fiscal Quarters ending on such day
                        </Text>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg className="my-auto justify-center items-center pt-4 ">
                  <Img
                    src="images/img_lev_ratio.png"
                    alt="levratio_one"
                    className="max-w-full h-auto justify-center self-center"
                  />
                  <Img
                    src="images/img_indebtedness.png"
                    alt="indebtedness"
                    className=" max-w-full h-auto mt-20"
                  />
                </Col>
              </Row>
            </Container>
            <Button className="flex whitespace-nowrap items-center justify-center h-[39px]  px-[35px]  text-white-A700_01 text-center text-base font-medium bg-indigo-800 rounded-[3px] mt-20  ml-auto ">
              Export File
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
