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
  const [loginSuccess, setLoginSuccess] = React.useState(false);

  let element = useRoutes([
    {
      path: "/",
      element: <UploadFileInfo loginSuccess={loginSuccess} />,
    },
    { path: "*", element: <NotFound /> },
    {
      path: "/login",
      element: (
        <LoginPage
          loginSuccess={loginSuccess}
          setLoginSuccess={setLoginSuccess}
        />
      ),
    },
    {
      path: "reviewfinancialspreads",
      element: <ReviewFinancialSpreads loginSuccess={loginSuccess} />,
    },
    {
      path: "covenantcomplianceresults",
      element: <CovenantComplianceResults loginSuccess={loginSuccess} />,
    },
    {
      path: "reviewcovenantmatches",
      element: <ReviewCovenantMatches loginSuccess={loginSuccess} />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
