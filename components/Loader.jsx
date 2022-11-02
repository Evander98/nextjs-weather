import Image from "next/image";
import React from "react";
import Storm from "../public/Storm.gif";

const Loader = () => {
  return (
    <>
      <Image className="w-[200px] m-auto block" src={Storm} alt="Loading..." />
    </>
  );
};

export default Loader;
