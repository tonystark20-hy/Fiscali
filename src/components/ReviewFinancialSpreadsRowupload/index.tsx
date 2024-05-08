import React from "react";
import { Img, Text } from "./..";

interface Props {
  className?: string;
  upload?: string;
  upload1?: string;
  active?: boolean;
}

export default function ReviewFinancialSpreadsRowupload({
  upload = "Upload Documents ",
  upload1,
  active,
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex justify-end">
        <Text
          size="md"
          as="p"
          className={` mt-1.5 mb-1 ${
            active ? "text-black-900" : " !text-indigo-400"
          }`}
        >
          {upload}
        </Text>
      </div>
      {!!upload1 ? (
        <Img src={upload1} alt="upload" className="h-[33px]" />
      ) : null}
    </div>
  );
}
