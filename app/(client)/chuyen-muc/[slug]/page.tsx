// import Category from "@components/client/Category/Category";
import Category from "@components/client/Category/Category";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Chuyên Mục | Quảng Cáo, Cơ Khí Xây Dựng",
  description: "Hoàng Tuấn - Uy tín tạo niềm tin, Kiến tạo để vươn xa",
};

const CategoryPage = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: any };
}) => {
  // const searchKeyParams: any = searchParams.search;
  const typeParam: any = searchParams.type;

  return (
    <>
      <Category Params={params.slug} searchParams={searchParams.type} />
    </>
  );
};

export default CategoryPage;
