import React, { useState, useEffect, useRef } from "react";
import { Img, Text, Heading, Button, SelectBox } from "..";
import "./index.css";
import { CloseSVG } from "../../assets/images";
import { Input } from "../../components/Input";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

const Header = ({ loginSuccess }) => {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const [collapsed, setCollapsed] = React.useState(false);
  const navigate = useNavigate();

  const navigateUpload = () => {
    // Navigate to the '/reviewcovenantmatches' route
    navigate("/");
  };

  return (
    <header className="flex justify-center items-center w-full shadow-lg h-24 md:h-fit mb-2">
      <div className="flex w-[100%] md:w-full  ">
        <Img
          src="images/img_image_23.png"
          onClick={() => navigateUpload()}
          style={{ cursor: "pointer" }}
          className="h-[60px] w-[200px] md:h-auto md:w-auto object-cover"
        />
      </div>
      {loginSuccess && (
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
      )}
    </header>
  );
};

export default Header;
