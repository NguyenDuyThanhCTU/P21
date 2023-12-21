import Link from "next/link";
import React from "react";

const PostCard = ({ Data }: any) => {
  return (
    <Link href={`/tin-tuc/${Data.url}`}>
      {" "}
      <div className="border-2 border-[rgba(60,60,60,1)] p:h-auto d:h-[400px] cursor-pointer">
        <div className="p-1 h-full">
          <div className="p:h-[200px] d:h-[350px] overflow-hidden ">
            <img
              src={Data.image}
              alt="product"
              className="h-full w-full object-cover hover:scale-105 duration-300"
            />
          </div>
          <div className="bg-[#595858] d:text-[16px] p:text-[14px] py-2 text-center text-white font-light truncate">
            {Data.title}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
