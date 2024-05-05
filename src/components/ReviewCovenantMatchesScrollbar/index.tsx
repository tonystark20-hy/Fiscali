import React from "react";
import { Img } from "./..";

interface Props {
  className?: string;
}

export default function ReviewCovenantMatchesScrollbar({ ...props }: Props) {
  return (
    <div {...props}>
      <Img src="images/img_arrow_gray_800.svg" alt="arrow_one" className="h-[7px] w-[7px] mt-1" />
      <div className="self-stretch h-[25px] w-[13px] bg-gray-400_02" />
      <Img src="images/img_arrow.svg" alt="arrow_three" className="h-[7px] w-[7px] mt-[900px] mb-1" />
    </div>
  );
}
