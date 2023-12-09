import React from "react";
import Card from "./Card";

const Forground = () => {
  const data = [
    {
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      fileSize: "0.9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        fileSize: "0.9mb",
        close: true,
        tag: {
          isOpen: true,
          tagTitle: "Download Now",
          tagColor: "green",
        },
      },
      {
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        fileSize: "0.9mb",
        close: true,
        tag: {
          isOpen: true,
          tagTitle: "Download Now",
          tagColor: "green",
        },
      },
  ];
  return (
    <div className="fixed top-0 w-full left-0 z-[3] h-full gap-10 flex flex-wrap p-5">
      {data.map((item, i) => {
        return (
          <Card
           data={item}
          />
        );
      })}
    </div>
  );
};

export default Forground;
