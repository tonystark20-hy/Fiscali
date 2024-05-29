import { Img, Text } from "components";
import React from "react";

export const Header = () => {
  return (
    <header className="flex justify-center items-center w-full  shadow-lg h-24 md:h-fit mb-2">
      <div className="flex w-[100%] md:w-full cursor-pointer ">
        <Img
          src="images/img_image_23.png"
          className="h-[60px] w-[200px] md:h-auto md:w-auto object-cover"
        />
      </div>
      <div className="whitespace-nowrap w-[94%] flex self-start justify-between my-auto ">
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
    </header>
  );
};
