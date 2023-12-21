import Introduction from "@components/client/Introduction/Introduction";
import { getDataByTypeProps } from "@lib/get-data";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Giới Thiệu | Sửa Nhà Cần Thơ",
  description: "Sửa Nhà Cần Thơ - An Lành Cho Gia Đình Việt",
};

const IntroductionPage = async () => {
  return (
    <div>
      <div className="flex flex-col d:w-[1300px] d:mx-auto p:w-auto p:mx-2 py-5">
        <div className="border-b pb-2">
          <div className="uppercase font-bold text-[1.5rem] ">
            <div className="hover:text-mainblue before:w-[50px] before:h-[1px] before:inline-block  before:bg-black before:mr-2 text-center cursor-default">
              Tại sao chọn Dịch vụ của Hoàng Tuấn
            </div>
          </div>
          <div className="text-center">
            Quảng cáo, Cơ Khí Xây Dựng Hoàng Tuấn là một trong những đơn vị hàng
            đầu về lĩnh vực Tư Vấn, Thiết Kế Chuyên thi công Cổng Sắt, Nhôm,
            Inox, Lan Can, Cầu Thang, Nội Thất, Vách Ngăn, Công Trình Nhôm Kín,
            Nhà Thép Tiền Chế, Quảng Cáo Biển Hiệu, Nội Thất Showroom... Trên
            phạm vi TP. Cần Thơ và các tỉnh Miền Tây.
          </div>
        </div>
        <div className="mt-4">
          <Introduction />
        </div>
      </div>
    </div>
  );
};

export default IntroductionPage;
