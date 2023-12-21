import { HeaderItems, ServiceItems3, ServiceItems4 } from "@assets/item";
import HomeContact from "@components/client/Home/HomeContact";
import HomeNews from "@components/client/Home/HomeNews";

import HomeSlide from "@components/client/Home/HomeSlide";
import HomeVideo from "@components/client/Home/HomeVideo";
import ShortIntro from "@components/client/Home/ShortIntro";
import PostDisplay from "@components/client/Post/PostDisplay";
import { getAllDataProps, getDataByTypeProps } from "@lib/get-data";
import { getAll } from "firebase/remote-config";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Trang Chủ | Quảng Cáo, Cơ Khí Xây Dựng",
  description: "Hoàng Tuấn - Uy tín tạo niềm tin, Kiến tạo để vươn xa",
};

const HomePage = async () => {
  const Data = await getDataByTypeProps("posts", "topic", "Tin tức");

  return (
    <div>
      <HomeSlide />
      <div className="p:w-auto d:w-[1200px] p:mx-2 d:mx-auto hi">
        <ShortIntro />
      </div>
      <PostDisplay
        Type=""
        Topic="CÁC DỰ ÁN CỦA CTY Quảng Cáo, Cơ Khí Xây Dựng"
        TopicOption={HeaderItems.slice(1, 4)}
      />
      <PostDisplay
        Type="Service"
        Topic="CÁC Dịch Vụ của CTY Quảng Cáo, Cơ Khí Xây Dựng"
        TopicOption={ServiceItems3}
      />
      <HomeVideo />
      <HomeNews Data={Data} />
      <div className="bg-gray-100">
        {" "}
        <HomeContact />
      </div>
    </div>
  );
};

export default HomePage;
