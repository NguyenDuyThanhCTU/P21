import React from "react";

const NewsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" bg-no-repeat bg-cover bg-center bg-[url(https://firebasestorage.googleapis.com/v0/b/vstarcamvietnam-ebe57.appspot.com/o/2.jpg?alt=media&token=072f382e-0f17-499e-a48b-f1e238736150)] ">
      <div className="bg-[rgba(255,255,255,0.8)] ">
        <div className=" p:py-2 d:py-16   p:w-auto d:w-[1300px] p:mx-auto d:mx-auto grid p:grid-cols-1 d:grid-cols-7 font-LexendDeca font-extralight gap-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default NewsLayout;
