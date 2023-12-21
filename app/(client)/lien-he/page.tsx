import Contact from "@components/client/Contact/Contact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Liên Hệ | Quảng Cáo, Cơ Khí Xây Dựng",
  description: "Hoàng Tuấn - Uy tín tạo niềm tin, Kiến tạo để vươn xa",
};

const ContactPage = () => {
  return (
    <div>
      <div className="flex flex-col d:w-[1300px] d:mx-auto p:w-auto p:mx-2 py-5">
        <>
          <Contact />
        </>
      </div>
    </div>
  );
};

export default ContactPage;
