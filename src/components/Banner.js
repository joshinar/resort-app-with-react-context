import React from "react";

export default function Banner({ children, title, subTitle }) {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div />
      <p>{subTitle}</p>
      {children}
    </div>
  );
}
