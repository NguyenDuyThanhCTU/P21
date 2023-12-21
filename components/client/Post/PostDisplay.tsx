"use client";
import React, { useEffect } from "react";
import PostCard from "./PostCard";
import { useData } from "@context/DataProviders";
import Lottie from "lottie-react";
import ProductNotFound from "@assets/animation/ProductNotFound.json";
import Link from "next/link";

const PostDisplay = ({ Topic, TopicOption, Type }: any) => {
  const [Selected, setSelected] = React.useState("");
  const [DataSort, setDataSort] = React.useState([]);
  const [Data, setData] = React.useState([]);
  const { Posts, Videos } = useData();

  useEffect(() => {
    if (Type === "") {
      setDataSort(Posts);
      setSelected("Quảng cáo biển hiệu");
    }
    if (Type === "Service") {
      const sort = Posts.filter((item: any) => item.topic === "Dịch Vụ");
      console.log(sort);
      if (sort) {
        setDataSort(sort);
        setSelected("Báo giá Thiết kế kiến trúc");
      }
    } else if (Type === "News") {
      const sort = Posts.filter((item: any) => item.topic === "Tin tức");

      if (sort) {
        setDataSort(sort);
        setSelected("Cẩm nang xây nhà");
      }
    }
  }, [Posts]);

  useEffect(() => {
    let sort: any;
    if (Type === "") {
      if (Selected === "Quảng cáo biển hiệu") {
        sort = Posts;
      } else {
        sort = DataSort.filter((item: any) => item.topic === Selected);
      }
    } else {
      if (Selected === "Báo giá Thiết kế kiến trúc") {
        sort = DataSort.filter((item: any) => item.topic === "Dịch Vụ");
      } else {
        sort = DataSort.filter((item: any) => item.type === Selected);
      }
    }

    if (sort) {
      setData(sort);
    }
  }, [Selected, DataSort]);

  return (
    <>
      <div className="my-10 d:mx-auto h-[1px] bg-mainorange p:w-auto p:mx-2  d:w-[1400px] "></div>
      <div className="p:w-auto d:w-[1200px] mx-auto">
        <h2 className="text-center w-full text-[22px] font-light uppercase">
          {Topic}
        </h2>
        <div className="mt-4 ">
          {TopicOption && (
            <div className="flex d:flex-row p:flex-col justify-center gap-5 px-2 text-center">
              {TopicOption.map((item: any, index: number) => (
                <div
                  className={`${
                    Selected === item.label
                      ? "bg-mainorange text-white"
                      : "bg-gray-100 text-black"
                  }  px-2 py-1 rounded-lg font-light  cursor-pointer hover:scale-105 duration-300`}
                  key={index}
                  onClick={() => setSelected(item.label)}
                >
                  {item.label}
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          {Type === "Youtube" ? (
            <div className="grid grid-cols-2 gap-5">
              {Videos.map((item: any, index: number) => (
                <div key={index}>
                  <iframe
                    height="315"
                    src={item.embedurl}
                    title="YouTube video player"
                    className="w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
              ))}
            </div>
          ) : (
            <>
              {Data.length !== 0 ? (
                <>
                  <div className="grid p:grid-cols-2 d:grid-cols-3 gap-3  mt-4 px-2">
                    {Data.map((item: any, index: number) => (
                      <div key={index}>
                        {" "}
                        <PostCard Data={item} />
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="flex justify-center">
                  <div className="w-[30%]">
                    <Lottie animationData={ProductNotFound} />
                    <h2 className="text-center text-[20px] font-light ">
                      Không tìm thấy dịch vụ
                    </h2>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      ;
    </>
  );
};

export default PostDisplay;
