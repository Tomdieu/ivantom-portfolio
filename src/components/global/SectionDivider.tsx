import React from "react";

type Props = {};

const SectionDivider = (props: Props) => {
  return (
    <hr
      // style={{
      //   width: 100,
      //   backgroundColor: "rgb(244,230,190)",
      //   height: 5,
      //   marginTop: 5,
      //   marginBottom: 30,
      //   borderRadius: 5,
      // }}
      className="w-28 bg-slate-200 h-1 mt-1 mb-7 rounded-2xl"
    />
  );
};

export default SectionDivider;
