import Link from "next/link";
import React from "react";
import localFont from "next/font/local";

const UTMFleur = localFont({
  src: "../../../assets/fonts/UTMFleur.ttf",
  display: "swap",
});

const UTMAmerican = localFont({
  src: "../../../assets/fonts/UTMAmericanSans.ttf",
  display: "swap",
});

const ShortIntro = () => {
  return (
    <div className="bg-[url(https://firebasestorage.googleapis.com/v0/b/quangcaocokhixaydung.appspot.com/o/UI%2F201313823_1160040927807717_7589381226147591092_n.jpg?alt=media&token=675fe7a8-72a8-4c33-9dcf-35b463488a38)] bg-center bg-no-repeat">
      <div className="bg-[rgba(0,0,0,0.79)]">
        <div className="flex gap-2 py-5 p:px-0 d:px-5 d:flex-row p:flex-col">
          <div className=" flex-[45%] h-[500px] items-center justify-center flex">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/quangcaocokhixaydung.appspot.com/o/UI%2Fz4932908226542_5476382ff6d5349fc5e873c7c7672213.jpg?alt=media&token=caa0d827-2df5-4d3b-b59a-566a7d34464e"
              alt="banner"
              className=" object-contain border-4 border-white"
            />
          </div>
          <div className=" flex-[55%] p:px-0 d:px-10 text-white">
            <h3 className={`font-UTMFleur text-[40px] ${UTMFleur.className}`}>
              Giới thiệu
            </h3>
            <h3
              className={`font-UTMAmerican font-bold text-mainorange text-center text-[30px] leading-7 uppercase ${UTMAmerican.className}`}
            >
              Tại sao chọn Quảng Cáo, Cơ Khí Xây Dựng?
            </h3>
            <div className="indent-3 mt-5">
              <p>
                Công ty TNHH TM Dịch Vụ Quảng Cáo, Cơ Khí Xây Dựng chuyên hoạt
                động trong lĩnh vực quảng cáo biển hiệu, nhà thép tiền chế, công
                trình nhôm kính, nội thất showroom tại Thành Phố Cần Thơ và các
                tỉnh Miền Tây.
              </p>
            </div>
            <Link href={`/gioi-thieu`}>
              <div className="text-redPrimmary mt-5 hover:text-red-700 cursor-pointer">
                Đọc thêm _
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortIntro;
