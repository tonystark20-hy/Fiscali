import React from "react";
import { Img } from "./..";

interface Props {
  className?: string;
}

export default function ReviewFinancialSpreadsScrollbar({ ...props }: Props) {
  return (
    <div {...props}>
      <Img src="images/img_arrow_gray_800_7x7.svg" alt="arrow_three" className="h-[7px] w-[7px] mt-1" />
      <div className="self-stretch h-[25px] bg-gray-400_01" />
      <Img src="images/img_arrow_gray_800.svg" alt="arrow_five" className="h-[7px] w-[7px] mt-[900px] mb-1" />
    </div>
  );
}
