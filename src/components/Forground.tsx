import React,{useRef} from "react";
import Card from "./Card";

const Forground = () => {
    const ref = useRef(null)
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
    <div ref={ref} className="fixed top-0 w-full left-0 z-[3] h-full gap-10 flex flex-wrap p-5">
      {data.map((item, i) => {
        return (
          <Card
           data={item}
           refrence ={ref}
          />
        );
      })}
    </div>
  );
};

export default Forground;
