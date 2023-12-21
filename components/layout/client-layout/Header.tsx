"use client";
import {
  HeaderItems,
  ServiceItem,
  ServiceItems1,
  ServiceItems2,
  ServiceItems3,
  ServiceItems4,
} from "@assets/item";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { FaCaretDown, FaSearch } from "react-icons/fa";
import HeaderDropDown from "./Items/HeaderDropDown";
import { useData } from "@context/DataProviders";
import { IoIosMenu } from "react-icons/io";
import { Drawer, Modal } from "antd";
import { useRouter } from "next/navigation";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [openSearchMB, setOpenSearchMB] = useState(false);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [searchRs, setSearchRs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  const { TradeMarkData } = useData();
  const HandleNavigate = (url: any) => {
    setOpen(false);
    router.push(url);
  };
  return (
    <div className="fixed w-full z-50 top-0">
      <div className="bg-[rgba(60,60,60,1)] d:block p:hidden">
        <div className="w-[1300px] flex  justify-center mx-auto items-center py-1">
          <div className="col-span-2 flex items-center gap-4">
            {HeaderItems.slice(0, 4).map((item, index) => (
              <div key={index} className="relative group/main">
                <Link
                  href={`/${item.value}`}
                  className="px-3 py-5 w-max font-normal text-white flex items-center gap-1 hover:text-mainorange duration-300 hover:border-b border-b-0 border-mainorange "
                  key={index}
                >
                  {item.label}
                  {(item.label === "Nhà Phố" ||
                    item.label === "Biệt Thự" ||
                    item.label === "Nội Thất") && <FaCaretDown className="" />}
                </Link>
                {item.label === "Nhà Phố" && (
                  <HeaderDropDown
                    ServiceItem={ServiceItem}
                    Url="thiet-ke-nha-pho"
                  />
                )}
                {item.label === "Biệt Thự" && (
                  <HeaderDropDown
                    ServiceItem={ServiceItems1}
                    Url="thiet-ke-biet-thu"
                  />
                )}
                {item.label === "Nội Thất" && (
                  <HeaderDropDown
                    ServiceItem={ServiceItems2}
                    Url="thiet-ke-noi-that"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex w-full justify-center ">
            <div className="mx-20 flex justify-center w-full bg-none">
              <img
                src={TradeMarkData.websiteLogo}
                alt="logo"
                className="h-[70px]"
              />
            </div>
          </div>
          <div className="col-span-2 flex items-center gap-4  ">
            {HeaderItems.slice(4, 8).map((item, index) => (
              <div key={index} className="relative group/main">
                <Link
                  href={`/${item.value}`}
                  className="px-3 w-max py-5 font-normal text-white flex items-center gap-1  hover:text-mainorange duration-300 hover:border-b border-b-0 border-mainorange "
                  key={index}
                >
                  {item.label}
                  {(item.label === "Dịch Vụ" || item.label === "Tin tức") && (
                    <FaCaretDown className="" />
                  )}
                </Link>
                {item.label === "Dịch Vụ" && (
                  <HeaderDropDown
                    ServiceItem={ServiceItems3}
                    Url="dich-vu-thiet-ke-thi-cong"
                  />
                )}
                {item.label === "Tin tức" && (
                  <HeaderDropDown
                    ServiceItem={ServiceItems4}
                    Url="tin-tuc-xay-dung"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="d:hidden p:block bg-mainNormalBlue ">
        <div className="h-[84px] fixed z-50 w-full top-0 bg-white  text-black shadow-xl">
          <div className="px-4 w-full flex justify-between items-center">
            <Link href={`/`} className="h-[84px] w-[87px]">
              <img
                src={TradeMarkData.websiteLogo}
                alt="Logo"
                className="w-full h-full p-2"
              />
            </Link>
            <div className="flex gap-2">
              <div
                className="text-[22px] p-2"
                onClick={() => setOpenSearchMB(!openSearchMB)}
              >
                <FaSearch />
              </div>
              <div className="text-[22px] p-2" onClick={() => setOpen(true)}>
                <IoIosMenu />
              </div>
            </div>
          </div>
          {openSearchMB && (
            <div className=" relative bg-white py-3">
              <div className="border rounded-full bg-white border-mainblue flex items-center ">
                <div className=" pl-4 w-full  justify-between items-center grid grid-cols-7">
                  <input
                    type="text"
                    className="outline-none mr-2 col-span-6 text-mainblue"
                    placeholder="Tìm kiếm"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <div>
                    <div
                      className={`${
                        search ? "block" : "hidden"
                      }  bg-gray-500 text-gray-300 w-max p-1 rounded-full text-[10px] cursor-pointer`}
                      onClick={() => setSearch("")}
                    >
                      <RxCross2 />
                    </div>
                  </div>
                </div>
                <div className="bg-mainblue py-3 px-6 text-white rounded-r-full cursor-pointer">
                  <FaSearch />
                </div>
              </div>
              {search && (
                <div className="absolute w-full bg-gray-50 top-full flex flex-col shadow-inner z-50 mt-2">
                  <div className=" flex flex-col">
                    {searchRs.map((product: any, idx: number) => (
                      <Link
                        href={`$chi-tiet-san-pham/${product.url}`}
                        key={idx}
                        className="cursor-pointer p-2 hover:bg-gray-100"
                      >
                        {product.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <>
          <Drawer
            placement="left"
            closable={false}
            width={300}
            onClose={() => setOpen(false)}
            open={open}
          >
            <div className=" ">
              <div onClick={() => HandleNavigate("/")} className="p-5">
                <img src={TradeMarkData.websiteLogo} alt="logo" />
              </div>

              <div>
                <div className="flex flex-col mt-2 ">
                  {HeaderItems.map((item: any, idx: number) => (
                    <div
                      onClick={() => HandleNavigate(`/${item.value}`)}
                      className="cursor-pointer border-b hover:text-red-500 duration-300 py-2"
                      key={idx}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Drawer>
        </>
        <>
          <Modal
            closeIcon={false}
            open={isModalOpen}
            onCancel={() => setIsModalOpen(false)}
            footer={false}
          >
            <div className=" relative bg-white py-3">
              <div className="border rounded-full bg-white border-mainblue flex items-center ">
                <div className=" pl-4 w-full  justify-between items-center grid grid-cols-7">
                  <input
                    type="text"
                    className="outline-none mr-2 col-span-6 text-mainblue"
                    placeholder="Tìm kiếm"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <div>
                    <div
                      className={`${
                        search ? "block" : "hidden"
                      }  bg-gray-500 text-gray-300 w-max p-1 rounded-full text-[10px] cursor-pointer`}
                      onClick={() => setSearch("")}
                    >
                      <RxCross2 />
                    </div>
                  </div>
                </div>
                <div className="bg-mainblue py-3 px-6 text-white rounded-r-full cursor-pointer">
                  <FaSearch />
                </div>
              </div>
              {search && (
                <div className="absolute w-full bg-gray-50 top-full flex flex-col shadow-inner z-50 mt-2">
                  <div className=" flex flex-col">
                    {searchRs.map((product: any, idx: number) => (
                      <Link
                        href={`$chi-tiet-san-pham/${product.url}`}
                        key={idx}
                        className="cursor-pointer p-2 hover:bg-gray-100"
                      >
                        {product.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Modal>
        </>
      </div>
    </div>
  );
};

export default Header;
