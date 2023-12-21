"use client";
import Input from "@components/admin/Item/Input";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import { notification } from "antd";
import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { SiGmail } from "react-icons/si";

const HomeContact = () => {
  const { ContactData } = useData();
  const { setIsLoading } = useStateProvider();
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [content, setContent] = React.useState("");

  const HandleDiscard = () => {
    setName("");
    setPhone("");
    setEmail("");
    setContent("");
  };

  const HandleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    if (!name || !phone) {
      notification["warning"]({
        message: "Thao tác KHÔNG thành công !",
        description: `
           Vui lòng nhập đầy đủ THÔNG TIN !`,
      });
      setIsLoading(false);
    } else {
      const dataFields = [
        { title: "Họ Tên:", value: name },
        { title: "SĐT:", value: phone },
        { title: "Email:", value: email },

        { title: "Nội dung lời nhắn:", value: content },
      ];
      let data: any = {};

      dataFields?.forEach((field) => {
        data[field.title] = field.value;
      });

      const response = await fetch(
        `https://formsubmit.co/ajax/thanhb1906564@student.ctu.edu.vn`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        notification["success"]({
          message: "Thành công !",
          description: `
             Chúng tôi sẽ liên hệ trong thời gian sớm nhất !`,
        });
        setIsLoading(false);
        HandleDiscard();
      } else {
        setIsLoading(false);
        notification["error"]({
          message: "Lỗi !",
          description: `
             Lỗi không xác định !`,
        });
      }
    }
  };
  return (
    <>
      <div className="p:w-auto p:mx-2 d:w-[1300px] d:mx-auto  ">
        <div className="grid p:grid-cols-1 d:grid-cols-2 gap-10 py-5 font-LexendDeca">
          <div className="flex flex-col">
            <h2 className="py-5 text-[20px]  font-semibold">
              Chúng tôi luôn lắng nghe bạn!
            </h2>
            <div className="flex flex-col gap-2">
              <Input
                Input={true}
                text="Họ tên*"
                Value={name}
                setValue={setName}
              />
              <Input
                Input={true}
                text="Số điện thoại*"
                Value={phone}
                setValue={setPhone}
              />
              <Input
                Input={true}
                text="Email"
                Value={email}
                setValue={setEmail}
              />

              <div className="flex flex-col gap-2">
                <label className="font-semibold ">Nội dung lời nhắn</label>
                <textarea
                  className="p-2 border border-mainorange outline-none"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              <div className="flex justify-center mt-3">
                <div
                  className="bg-mainorange hover:bg-orange-600 duration-300 cursor-pointer uppercase px-14 text-white rounded-full py-2"
                  onClick={(e) => HandleSubmit(e)}
                >
                  Gửi yêu cầu{" "}
                </div>
              </div>
            </div>
          </div>
          <div className=" font-LexendDeca font-extralight flex w-full  justify-start  items-start gap-3 flex-col">
            <h3 className="text-[48px] font-light ">
              <strong className="font-bold">Liên hệ</strong> với chúng tôi
            </h3>

            <div className=" py-3 flex flex-col gap-3">
              <p className="font-[18px]  ">
                Hãy để lại thông tin đầy đủ theo mẫu bên cạnh, Tôi sẽ liên hệ hỗ
                trợ bạn trong thời gian sớm nhất.
              </p>
              <p className="text-redPrimmary ">* là các thông tin bắt buộc</p>
            </div>
            <div className="">
              <div className="flex flex-col gap-5">
                <h1 className="text-[26px] font-bold">Liên hệ</h1>
                <div className="w-10 h-1 bg-black"></div>
              </div>

              <div className="mt-5 flex flex-col gap-5">
                <div>
                  <div className="flex items-center gap-2">
                    <CiLocationOn className="" />

                    <h2>Địa chỉ chúng tôi:</h2>
                  </div>
                  <p className="font-semibold">{ContactData.address}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <SiGmail className="" />

                    <h2>Email chúng tôi:</h2>
                  </div>

                  <p className="font-semibold">{ContactData.gmail}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <BsPhone className="" />

                    <h2>Điện thoại:</h2>
                  </div>
                  <p className="font-semibold">{ContactData.phone}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <AiOutlineClockCircle className="" />

                    <h2>Thời gian làm việc:</h2>
                  </div>
                  <p className="font-semibold">{ContactData.worktime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[40vh] w-full ">
        <iframe
          src={ContactData.location}
          className="h-full w-full outline-none"
        >
          {" "}
        </iframe>
      </div>
    </>
  );
};

export default HomeContact;
