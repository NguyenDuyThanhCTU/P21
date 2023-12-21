"use client";
import { Modal } from "antd";
import Link from "next/link";
import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

const HomeVideo = () => {
  const [OpenModel, setOpenModel] = React.useState(false);
  return (
    <div className="bg-white py-10 d:w-[1400px] d:mx-auto p:w-auto p:mx-2">
      <div className="font-LexendDeca font-extralight">
        <div className="font-bold uppercase text-[30px] pb-2 border-b-2 border-black w-full flex justify-center">
          <h2>Video</h2>
        </div>
        <div className="bg-[url(https://firebasestorage.googleapis.com/v0/b/quangcaocokhixaydung.appspot.com/o/4.jpg?alt=media&token=697e88f4-b1ea-47f6-a23c-ca3bbc5b8516)] bg-no-repeat bg-cover p:h-auto d:h-[50vh] bg-center p:w-auto  d:w-[900px] mx-auto mt-5">
          <div
            className="h-[50vh] flex justify-center items-center text-mainyellow bg-[rgba(0,0,0,0.5)]"
            onClick={() => setOpenModel(true)}
          >
            <div className="text-[50px] p-6 rounded-full border hover:scale-110 duration-300 cursor-pointer border-mainyellow bg-[rgba(255,255,255,0.5)]">
              <BsFillPlayFill />
            </div>
          </div>
        </div>
        <div className="mt-10 flex gap-5 d:flex-row p:flex-col">
          <div className="flex-1 bg-[url(https://firebasestorage.googleapis.com/v0/b/quangcaocokhixaydung.appspot.com/o/1.jpg?alt=media&token=53409ffb-3651-4f5a-b79c-819edcda8e4e)] bg-no-repeat bg-cover h-[40vh] bg-center mx-auto mt-5">
            <div className="h-[40vh] flex justify-start items-end p-10 text-mainyellow bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(255,255,255,0.3)] duration-[5000ms]">
              <div>
                <h2 className="uppercase text-[20px] font-bold">
                  {" "}
                  Bạn cần hỗ trợ?
                </h2>
                <div className="mt-2">
                  {" "}
                  <Link
                    href={`/lien-he`}
                    className="text-mainyellow mt-2 py-2  px-4 rounded-full bg-white border border-mainyellow font-normal cursor-pointer hover:text-white hover:bg-mainorange  hover:border-white duration-300"
                  >
                    Liên hệ
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-[url(https://firebasestorage.googleapis.com/v0/b/quangcaocokhixaydung.appspot.com/o/3.jpg?alt=media&token=610f4d7d-704d-4a6e-8ecd-0a45655947df)] bg-no-repeat bg-cover h-[40vh] bg-center mx-auto mt-5">
            <div className="h-[40vh] flex justify-start items-end p-10 text-mainyellow bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(255,255,255,0.3)] duration-[5000ms]">
              <div>
                <h2 className="uppercase text-[20px] font-bold">
                  Tin tức mới nhất
                </h2>
                <div className="mt-2">
                  {" "}
                  <Link
                    href={`/tin-tuc`}
                    className="text-mainyellow w-max mt-2 py-2 px-4 rounded-full bg-white border border-mainyellow font-normal cursor-pointer hover:text-white hover:bg-mainorange  hover:border-white duration-300"
                  >
                    Xem ngay
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <>
        <Modal
          open={OpenModel}
          closable={false}
          width={1000}
          onCancel={() => setOpenModel(false)}
          footer={false}
        >
          <>
            <iframe
              width="100%"
              height="600"
              src="https://www.youtube.com/embed/P9t1UGnvAew"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </>
        </Modal>
      </>
    </div>
  );
};

export default HomeVideo;
