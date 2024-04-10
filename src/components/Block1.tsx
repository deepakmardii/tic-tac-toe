import React from "react";

interface BlockProps {
  value?: string | null;
  onClick?: () => void;
}

const Block: React.FC<BlockProps> = (props) => {
  return (
    <>
      <div
        onClick={props.onClick}
        className="border border-black h-20 w-20 cursor-pointer flex justify-center items-center text-5xl"
      >
        {props.value}
      </div>
    </>
  );
};

export default Block;
