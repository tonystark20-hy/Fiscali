import React from "react";
import { Img, Text } from "./..";

interface Props {
  className?: string;
  upload?: string;
  upload1?: string;
  status?: string;
}

export default function CovenantComplianceResultsRowupload({
  upload = "Upload Documents ",
  upload1,
  status,
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex">
        <Text
          size="md"
          as="p"
          className={` mt-1.5 mb-1 ${
            status === "active"
              ? "!containertext-black-900"
              : status === "activated"
              ? "!text-indigo-400"
              : "!text-[#aaaaaa]"
          }`}
        >
          {upload}
        </Text>
      </div>
      {!!upload1 ? (
        <Img src={upload1} alt="upload" className="h-[33px] " />
      ) : null}
    </div>
  );
}
