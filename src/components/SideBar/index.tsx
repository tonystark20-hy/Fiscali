import React, { useState, useEffect, useRef } from "react";
import { Img, Text, Heading, Button, SelectBox } from "..";
import "./index.css";
import { CloseSVG } from "../../assets/images";
import { Input } from "../../components/Input";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import "./index.css";


const SideBar = () => {
    const [searchBarValue, setSearchBarValue] = React.useState("");
    const [collapsed, setCollapsed] = React.useState(false);

  return (
    <Sidebar
    width="250px !important"
    collapsedWidth="80px !important"
    collapsed={collapsed}
    className="shadow-lg"
    >
      <div className="sidebar-content">
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
      className="flex flex-col self-stretch items-center w-full"
    >
      <div className="flex flex-col self-stretch gap-[0.22px]">
        <MenuItem>Sirius XM</MenuItem>

        <MenuItem>Microsoft</MenuItem>
        <MenuItem>Caterpillar</MenuItem>
      </div>

      <div className="flex items-center  justify-between p-1.5">
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
      <div className="self-stretch flex" />
      <div className="sidebar-footer">
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
      </div>
    </Menu>
    </div>
    </Sidebar>
  );
};

export default SideBar;
