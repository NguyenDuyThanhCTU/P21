import Category from "@components/client/Post/Category";
import { getAllDataProps, getDataByTypeProps } from "@lib/get-data";
import moment from "moment";
import { Metadata } from "next";

import React from "react";
import { AiOutlineClockCircle, AiOutlineUser } from "react-icons/ai";

export const metadata: Metadata = {
  title: "Tin tức | Camera Vstarcam ",
  description: "Camera Vstarcam - An Lành Cho Gia Đình Việt",
};

const NewsDetailPage = async ({ params }: { params: { slug: string } }) => {
  const Data = await getDataByTypeProps("posts", "url", params.slug);
  const DataCategory = await getAllDataProps("posts");

  const markup = { __html: Data[0]?.content };
  const DetailPostDate = moment
    .unix(Data[0]?.createdAt.seconds)
    .format("MMMM DD, YYYY");
  return (
    <div className="p:w-auto d:w-[1300px] p:mx-2 d:mx-auto grid p:grid-cols-1 d:grid-cols-7 font-LexendDeca font-extralight gap-10">
      <div className="border h-max border-gray-400 col-span-2 d:block p:hidden">
        <div className="p-3 ">
          <h2 className="text-[20px] uppercase text-center pb-2 border-b border-black">
            Bài viết liên quan
          </h2>
          <Category Data={DataCategory} />
        </div>
      </div>
      <div className="p:col-auto d:col-span-5">
        <div className=" pb-5 border-b flex flex-col gap-4">
          <h3 className=" text-[34px] font-normal">{Data[0]?.title}</h3>
          <div className="flex gap-5">
            <div className="uppercase p-1 text-blue-500 border border-blue-500 ">
              {Data[0]?.topic}
            </div>
            <div className="flex items-center gap-1 text-gray-400 pr-5 border-r">
              <AiOutlineClockCircle />
              <p className="">{DetailPostDate}</p>
            </div>
            <div className="flex items-center gap-1 text-gray-400">
              <AiOutlineUser />
              <p className=""> HoangTuan</p>
            </div>
          </div>
        </div>
        {markup && (
          <div
            className="font-LexendDeca font-extralight mt-5 flex-col flex gap-3"
            dangerouslySetInnerHTML={markup}
          ></div>
        )}
      </div>
      <div className="border h-max border-gray-400 p:col-auto d:col-span-2 d:hidden p:block">
        <div className="p-3 ">
          <h2 className="text-[20px] uppercase text-center pb-2 border-b border-black">
            Bài viết liên quan
          </h2>
          <Category Data={DataCategory} />
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
