"use client";
import React, { useEffect } from "react";
import CategoryDisplay from "./CategoryDisplay";
import {
  HeaderItems,
  ServiceItem,
  ServiceItems1,
  ServiceItems2,
  ServiceItems3,
  ServiceItems4,
} from "@assets/item";
import { useData } from "@context/DataProviders";

const Category = ({ Params, searchParams }: any) => {
  const [ParamsName, setParamsName] = React.useState("");
  const [TopicOption, setTopicOption] = React.useState<any>([]);
  const [Selected, setSelected] = React.useState("");
  const [Data, setData] = React.useState([]);
  const { Posts } = useData();
  useEffect(() => {
    if (Params === "thiet-ke-nha-pho") {
      if (searchParams !== undefined) {
        const sort = ServiceItem.filter((item) => item.value === searchParams);
        setParamsName(sort[0].label);
      } else {
        setTopicOption(ServiceItem);
        setParamsName("Nhà Phố");
      }
    } else if (Params === "thiet-ke-biet-thu") {
      if (searchParams !== undefined) {
        const sort = ServiceItems1.filter(
          (item) => item.value === searchParams
        );

        setParamsName(sort[0].label);
      } else {
        setTopicOption(ServiceItems1);
        setParamsName("Biệt Thự");
      }
    } else if (Params === "thiet-ke-noi-that") {
      if (searchParams !== undefined) {
        const sort = ServiceItems2.filter(
          (item) => item.value === searchParams
        );

        setParamsName(sort[0].label);
      } else {
        setTopicOption(ServiceItems2);
        setParamsName("Nội Thất");
      }
    } else if (Params === "dich-vu-thiet-ke-thi-cong") {
      if (searchParams !== undefined) {
        const sort = ServiceItems3.filter(
          (item) => item.value === searchParams
        );

        setParamsName(sort[0].label);
      } else {
        setTopicOption(ServiceItems3);
        setParamsName("Dịch Vụ");
      }
    } else if (Params === "tin-tuc-xay-dung") {
      if (searchParams !== undefined) {
        const sort = ServiceItems4.filter(
          (item) => item.value === searchParams
        );

        setParamsName(sort[0].label);
      } else {
        setTopicOption(ServiceItems4);
        setParamsName("Tin tức");
      }
    }
  }, [Params, searchParams, Posts]);

  useEffect(() => {
    const newParams = "chuyen-muc/" + Params;
    let sort = Posts.filter((item: any) => item.topicUrl === newParams);
    if (searchParams === undefined) {
      console.log("1");
      setData(sort);
    } else {
      console.log("2");
      const sortType = sort.filter(
        (item: any) => item.typeUrl === searchParams
      );
      setData(sortType);
    }
  }, [Posts, Params, searchParams]);

  console.log(Data);
  return (
    <div>
      <div>
        <div className="w-full bg-bottom h-[30vh] bg-[url(https://firebasestorage.googleapis.com/v0/b/suanhacantho-3b53d.appspot.com/o/UI%2F4.jpg?alt=media&token=28fdc74f-2f48-4466-b8f8-5b0e3af81b2f)] bg-cover bg-no-repeat ">
          <div className="w-full h-[30vh] bg-[rgba(0,0,0,0.62)] text-white flex justify-center items-center">
            <h1 className="text-[30px] font-normal">
              Chuyên mục các {ParamsName}
            </h1>
          </div>
        </div>
      </div>
      <div className="d:w-[1300px] p:mx-2 d:mx-auto p:w-auto">
        {TopicOption && (
          <>
            <div className="flex justify-center d:flex-row p:flex-col gap-5 py-5">
              <div
                className={`${
                  Selected === ""
                    ? "bg-mainorange text-white"
                    : "bg-gray-100 text-black"
                }  px-2 py-1 rounded-lg font-light  cursor-pointer hover:scale-105 duration-300`}
                onClick={() => setSelected("")}
              >
                <p className="w-max"> Tất cả</p>
              </div>
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
                  <p className="w-max"> {item.label}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="w-[1300px] mx-auto pb-5">
        <CategoryDisplay Data={Data} />
      </div>
    </div>
  );
};

export default Category;
