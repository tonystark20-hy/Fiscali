import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import ReviewFinancialSpreads from "pages/ReviewFinancialSpreads";
import CovenantComplianceResults from "pages/CovenantComplianceResults";
import ReviewCovenantMatches from "pages/ReviewCovenantMatches";
import UploadFileInfo from "pages/UploadFileInfo";
import LoginPage from "pages/LoginPage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/uploadfileinfo", element: <UploadFileInfo /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <LoginPage />,
    },  
    {
      path: "reviewfinancialspreads",
      element: <ReviewFinancialSpreads />,
    },
    {
      path: "covenantcomplianceresults",
      element: <CovenantComplianceResults />,
    },
    {
      path: "reviewcovenantmatches",
      element: <ReviewCovenantMatches />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
