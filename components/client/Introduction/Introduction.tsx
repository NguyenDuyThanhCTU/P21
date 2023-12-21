"use client";
import { useData } from "@context/DataProviders";
import React from "react";

const Introduction = () => {
  const { Introduction } = useData();

  const markup = { __html: Introduction?.content };
  return (
    <>
      <div dangerouslySetInnerHTML={markup} className="text-[18px] "></div>
    </>
  );
};

export default Introduction;
