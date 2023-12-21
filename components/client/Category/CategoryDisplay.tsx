import React from "react";
import PostCard from "../Post/PostCard";
import Lottie from "lottie-react";
import ProductNotFound from "@assets/animation/ProductNotFound.json";

const CategoryDisplay = ({ Data }: any) => {
  return (
    <>
      {Data.length !== 0 ? (
        <>
          <div className="grid grid-cols-3 gap-3  mt-4">
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
  );
};

export default CategoryDisplay;
