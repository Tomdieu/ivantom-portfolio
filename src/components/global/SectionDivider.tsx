import React from "react";

type Props = {};

const SectionDivider = (props: Props) => {
  return (
    <hr
      style={{
        width: 100,
        backgroundColor: "rgb(244,230,190)",
        height: 5,
        marginTop: 5,
        marginBottom: 30,
        borderRadius: 5,
      }}
    />
  );
};

export default SectionDivider;
