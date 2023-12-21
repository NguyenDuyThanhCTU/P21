import { SiZalo } from "react-icons/si";
import {
  BsFacebook,
  BsMessenger,
  BsYoutube,
  BsBatteryCharging,
  BsFillSendExclamationFill,
  BsFillSendCheckFill,
  BsFillSendXFill,
} from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import {
  AiFillInstagram,
  AiOutlineProfile,
  AiOutlineSlack,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import {
  FaFirstOrderAlt,
  FaHome,
  FaRegNewspaper,
  FaTiktok,
} from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiNetworkChart, BiSlideshow } from "react-icons/bi";
import {
  TbCarouselHorizontal,
  TbCubeSend,
  TbListDetails,
  TbSlideshow,
} from "react-icons/tb";
import {
  MdAirlineSeatReclineNormal,
  MdManageAccounts,
  MdMiscellaneousServices,
  MdOutlineLocalCarWash,
  MdOutlinePostAdd,
} from "react-icons/md";
import { CgListTree, CgSize } from "react-icons/cg";
import { IoIosConstruct, IoMdColorWand } from "react-icons/io";
import { GiExitDoor } from "react-icons/gi";

import { CiViewList } from "react-icons/ci";
import { IconType } from "react-icons/lib";
import { IoFlashOutline } from "react-icons/io5";

interface IconMappingType {
  [key: string]: IconType;
}

export const IconMapping: IconMappingType = {
  IoFlashOutline: IoFlashOutline,
  MdManageAccounts: MdManageAccounts,
  SiZalo: SiZalo,
  BsFacebook: BsFacebook,
  HiOutlineUserGroup: HiOutlineUserGroup,
  BsMessenger: BsMessenger,
  AiFillInstagram: AiFillInstagram,
  FaTiktok: FaTiktok,
  AiOutlineTwitter: AiOutlineTwitter,
  BsYoutube: BsYoutube,
  BiSlideshow: BiSlideshow,
  TbListDetails: TbListDetails,
  TbSlideshow: TbSlideshow,
  BiNetworkChart: BiNetworkChart,
  MdOutlinePostAdd: MdOutlinePostAdd,
  AiOutlineUnorderedList: AiOutlineUnorderedList,
  CgListTree: CgListTree,
  FaFirstOrderAlt: FaFirstOrderAlt,
  AiOutlineSlack: AiOutlineSlack,
  BsBatteryCharging: BsBatteryCharging,
  IoMdColorWand: IoMdColorWand,
  MdAirlineSeatReclineNormal: MdAirlineSeatReclineNormal,
  CgSize: CgSize,
  MdOutlineLocalCarWash: MdOutlineLocalCarWash,
  TbCarouselHorizontal: TbCarouselHorizontal,
  GiExitDoor: GiExitDoor,
  AiOutlineProfile: AiOutlineProfile,
  BsFillSendExclamationFill: BsFillSendExclamationFill,
  BsFillSendCheckFill: BsFillSendCheckFill,
  TbCubeSend: TbCubeSend,
  BsFillSendXFill: BsFillSendXFill,
  CiViewList: CiViewList,
  MdMiscellaneousServices: MdMiscellaneousServices,
  FaHome: FaHome,
  IoIosConstruct: IoIosConstruct,
  FaRegNewspaper: FaRegNewspaper,
};

import paymentAnimation from "./animation/payment.json";
import policyAnimation from "./animation/policy.json";
import rulesAnimation from "./animation/rules.json";
import securityAnimation from "./animation/security.json";

export const ProductSidebarAdmin = [
  {
    name: "Giới thiệu",
    icon: "AiOutlineSlack",
  },
  {
    name: "Sản phẩm",
    icon: "FaFirstOrderAlt",
  },
  {
    name: "Sale",
    icon: "IoFlashOutline",
  },
  {
    name: "Đơn hàng",
    icon: "AiOutlineUnorderedList",
  },
  {
    name: "Chi nhánh",
    icon: "CgListTree",
  },
];

export const WebsiteSidebarAdmin = [
  {
    name: "Thông tin website",
    icon: "TbListDetails",
  },
  {
    name: "Slide trình chiếu",
    icon: "TbSlideshow",
  },
  {
    name: "Kênh truyền thông",
    icon: "BiNetworkChart",
  },
  {
    name: "Bài viết",
    icon: "MdOutlinePostAdd",
  },
  {
    name: "Video",
    icon: "BiSlideshow",
  },
  {
    name: "Tài khoản",
    icon: "MdManageAccounts",
  },
];

export const SocialMediaDashboard = [
  {
    title: "Trang zalo",
    icon: "SiZalo",
    image:
      "https://atpsoftware.vn/wp-content/uploads//2020/03/20211208103735_id_zalo-1.jpg",
    style: "hover:text-blue-400 hover:bg-white",
  },
  {
    title: "Facebook cá nhân",
    icon: "BsFacebook",
    image:
      "https://images.unsplash.com/photo-1633675254053-d96c7668c3b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZWJvb2slMjBsb2dvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    style: "hover:bg-white hover:text-blue-600",
  },
  {
    title: "Trang Fanpage",
    icon: "HiOutlineUserGroup",
    image:
      "https://img.freepik.com/premium-photo/3d-pile-facebook-logo-background-facebook-famous-social-media-platform_73903-705.jpg?w=2000",
    style: "hover:bg-white hover:text-black p-1",
  },
  {
    title: "Trang Messenger",
    icon: "BsMessenger",
    image:
      "https://img.freepik.com/premium-photo/3d-facebook-messenger-logo-application-blue-background-social-media-communication_73903-695.jpg",
    style: "hover:bg-white hover:text-blue-600 p-1",
  },
  {
    title: "Trang Instagram",
    icon: "AiFillInstagram",
    image: "https://images2.alphacoders.com/123/1230947.png",
    style: "hover:bg-pink-500 hover:text-white",
  },

  {
    title: "Trang Tiktok",
    icon: "FaTiktok",
    image: "https://images.alphacoders.com/112/1123670.png",
    style: "hover:bg-black hover:text-white p-1",
  },

  {
    title: "Trang Twitter",
    icon: "AiOutlineTwitter",
    image:
      "https://vietnix.vn/wp-content/uploads/2022/07/mang-xa-hoi-twitter.webp",
    style: "hover:bg-white hover:text-blue-600 p-1",
  },
  {
    title: "Trang YouTube",
    icon: "BsYoutube",
    image:
      "https://img.nhandan.com.vn/Files/Images/2021/04/13/3A708284_F5B8_407D_ADC0_339DBEE-1618275907021.jpeg",
    style: "hover:bg-red-600 hover:text-white p-1",
  },
];

export const OrderDashboardItems = [
  {
    name: "Mới",
    icon: "BsFillSendExclamationFill",
  },
  {
    name: "Đã phản hồi",
    icon: "BsFillSendCheckFill",
  },
  {
    name: "Đã thanh toán",
    icon: "TbCubeSend",
  },
  {
    name: "Hủy đơn",
    icon: "BsFillSendXFill",
  },
  {
    name: "Chi tiết đơn hàng",
    icon: "CiViewList",
  },
];

/*<---------------------------------------------------------- Custom System ----------------------------------------------------------> */

export const SocialMediaCustom = [
  {
    id: 0,
    title: "Trang zalo",
    icon: "SiZalo",
    image:
      "https://atpsoftware.vn/wp-content/uploads//2020/03/20211208103735_id_zalo-1.jpg",
    style: "hover:text-blue-600 hover:bg-white ",
  },
  {
    id: 1,
    title: "Facebook cá nhân",
    icon: "BsFacebook",
    image:
      "https://images.unsplash.com/photo-1633675254053-d96c7668c3b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZWJvb2slMjBsb2dvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    style: "hover:bg-white hover:text-blue-600",
  },

  {
    id: 5,
    title: "Trang Tiktok",
    icon: "FaTiktok",
    image: "https://images.alphacoders.com/112/1123670.png",
    style: "hover:bg-black hover:text-white p-1",
  },

  {
    id: 7,
    title: "Trang YouTube",
    icon: "BsYoutube",
    image:
      "https://img.nhandan.com.vn/Files/Images/2021/04/13/3A708284_F5B8_407D_ADC0_339DBEE-1618275907021.jpeg",
    style: "hover:bg-red-600 hover:text-white p-1",
  },
];

export const HeaderItems = [
  {
    label: "Trang Chủ",
    value: "",
  },

  {
    label: "Quảng cáo biển hiệu",
    value: "chuyen-muc/quang-cao-bien-hieu",
  },
  {
    label: "Nội Thất",
    value: "chuyen-muc/thiet-ke-noi-that",
  },
  {
    label: "Nhà Phố",
    value: "chuyen-muc/thiet-ke-nha-pho",
  },
  {
    label: "Giới thiệu",
    value: "gioi-thieu",
  },

  {
    label: "Dịch Vụ",
    value: "chuyen-muc/dich-vu-thiet-ke-thi-cong",
  },
  {
    label: "Tin tức",
    value: "chuyen-muc/tin-tuc-xay-dung",
  },
  {
    label: "Liên hệ",
    value: "lien-he",
  },
];

export const ToolsTipsSocialMediaItems = [
  {
    title: "zalo.me/...",
  },
  {
    title: "www.facebook.com/...",
  },
  {
    title: "www.facebook.com/plugins/page.php?href=....",
  },
  {
    title: "",
  },
  {
    title: "www.instagram.com/...",
  },
  {
    title: "www.tiktok.com/...",
  },
  {
    title: "www.twitter.com/...",
  },
  {
    title: "www.youtube.com/...",
  },
];

/*<-------------------------------------------------------------------------------------------------------------------- CUSTOM --------------------------------------------------------------------------------------------------------------------> */

export const TypeProductItems = [
  {
    label: "Wifi Camera",
    value: "wifi-camera",
  },
  {
    label: "Dual lens Camera",
    value: "dual-lens-camera",
  },
  {
    label: "4G Camera",
    value: "4g-camera",
  },
  {
    label: "Battery Camera",
    value: "battery-camera",
  },
  {
    label: "Camera Trọn bộ",
    value: "camera-tron-bo",
  },
  {
    label: "Phụ Kiện Camera",
    value: "phu-kien-camera",
  },
  {
    label: "Thiết Bị Thông Minh",
    value: "thiet-bi-thong-minh",
  },
];

export const TypeProductItems2 = [
  {
    label: "Sản phẩm khuyến mãi",
    value: "san-pham-khuyen-mai",
  },
  {
    label: "Sản phẩm bán chạy",
    value: "san-pham-ban-chay",
  },
  {
    label: "Sản phẩm mới",
    value: "san-pham-moi",
  },
  {
    label: "Sản phẩm nổi bật",
    value: "san-pham-noi-bat",
  },
];

export const TypePostItems = [
  {
    label: "Tin tức",
    value: "tin-tuc",
  },
  {
    label: "Chính sách bảo mật",
    value: "chinh-sach-bao-mat",
    animation: paymentAnimation,
  },
  {
    label: "Chính sách thanh toán",
    value: "chinh-sach-thanh-toan",
    animation: rulesAnimation,
  },
  {
    label: "Cam kết chất lượng dịch vụ",
    value: "cam-ket-chat-luong-dich-vu",
    animation: policyAnimation,
  },
  {
    label: "Chính sách bảo hành",
    value: "chinh-sach-bao-hanh",
    animation: securityAnimation,
  },
];

export const PolicyItems = [
  {
    label: "Giao nhận hàng",
    value: "giao-nhan-hang",
  },
  {
    label: "Chính sách đổi trả",
    value: "chinh-sach-doi-tra",
  },
  {
    label: "Chính sách đặt hàng",
    value: "chinh-sach-dat-hang",
  },
  {
    label: "Chính sách bảo mật",
    value: "chinh-sach-bao-mat",
  },
];

export const TopFooterItems = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/taphoa-605ab.appspot.com/o/fresher.14f2aadd.png?alt=media&token=be56aab4-f2c5-42a8-a6d8-4b32c7109211",
    label: "Hoàn trả không gặp rắc rối",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/taphoa-605ab.appspot.com/o/security.d7d83cc5.png?alt=media&token=8add07d2-33df-4a2c-b07a-1c983fc4b204",
    label: "Giao dịch an toàn",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/taphoa-605ab.appspot.com/o/free-ship.658704f1.png?alt=media&token=6642d93d-9c27-4113-affc-e6a02d8811b1",
    label: "Vận chuyển cực kỳ nhanh chóng",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/taphoa-605ab.appspot.com/o/support-24-24.1848cf83.png?alt=media&token=8fe9426e-066c-4be6-b0b2-21026be68d27",
    label: "Đảm bảo chất lượng",
  },
];

export const HomeServiceItems = [
  {
    content: "Dịch vụ vệ sinh chuyên nghiệp, uy tín, chất lượng hỗ trợ 24/7",
    title: "Vệ Sinh Công Nghiệp",
    image:
      "https://dichvuphuocthai.com/wp-content/uploads/2021/06/dich-vu-ve-sinh-cong-nghiep-tai-nha-trang.png",
    url: "dich-vu-ve-sinh/ve-sinh-cong-nghiep",
  },
  {
    content: "Sửa Nhà Cần Thơ cung cấp nhân viên tạp vụ văn phòng, gia đình,…",
    title: "Cung Cấp Tạp Vụ",
    image:
      "https://vesinhcongnghiepcantho.com/wp-content/uploads/2021/07/ve-sinh-hang-ngay.jpg.webp",
    url: "dich-vu-ve-sinh/cung-cap-tap-vu",
  },
  {
    content:
      "Dịch vụ văn phòng định kỳ, cung cấp tạp vụ văn phòng theo giờ, tổng vệ sinh,…",
    title: "Vệ Sinh Văn Phòng",
    image:
      "https://vesinhcongnghiepcantho.com/wp-content/uploads/2022/08/z2298558982938_e03603cccb6458a40f0bb265d79ed702-1200x800-1-e1630057235202.jpg.webp",
    url: "dich-vu-ve-sinh/ve-sinh-van-phong",
  },
  {
    content:
      "Dịch vụ vệ sinh nhà xưởng, quét mạng nhện, rửa nhà xưởng, vệ sinh đường ống…",
    title: "Vệ Sinh Nhà Xưởng",
    image:
      "https://vesinhcongnghiepcantho.com/wp-content/uploads/2021/07/26915c55257bc5259c6a.jpg.webp",
    url: "dich-vu-ve-sinh/ve-sinh-nha-xuong",
  },
  {
    content: "Dịch vụ lau kính tòa nhà cao tầng, vệ sinh kính, tẩy cặn oxi…",
    title: "Dịch Vụ Lau Kính",
    image:
      "https://vesinhcongnghiepcantho.com/wp-content/uploads/2021/07/dich-vu-lau-kinh-nha-cao-tang-tai-nha-trang-uy-tin.jpg.webp",
    url: "dich-vu-ve-sinh/dich-vu-lau-kinh",
  },
  {
    content: "Dịch vụ giặt thảm văn phòng, giặt nệm, giặt sofa tại nhà ",
    title: "Dịch Vụ Giặt Thảm, Nệm, Sofa",
    image:
      "https://vesinhcongnghiepcantho.com/wp-content/uploads/2021/06/dich-vu-giat-tham.jpg",
    url: "dich-vu-ve-sinh/dich-vu-giat-tham-nem-sofa",
  },
  {
    content: "Dịch vụ đánh bóng sàn đá Marble, Granite, Terrazzo,..",
    title: "Đánh Bóng Sàn Đá",
    image:
      "https://vesinhcongnghiepcantho.com/wp-content/uploads/2021/07/2932c34e3ea9cbf792b8-1024x614-1.jpg.webp",
    url: "dich-vu-ve-sinh/danh-bong-san-da",
  },
  {
    content: "Dịch vụ vệ sinh theo giờ, giúp việc theo giờ chuyên nghiệp",
    title: "Thi Công Sơn Epoxy",
    image:
      "https://vesinhcongnghiepcantho.com/wp-content/uploads/2022/02/thi-cong-son-phu-epoxy-lop-thu-nhat-.jpg.webp",
    url: "dich-vu-ve-sinh/thi-cong-son-epoxy",
  },
];

export const HomeServiceItems1 = [
  {
    title: "ĐẢM BẢO TIẾN ĐỘ",
    content:
      "Chúng tôi luôn bảo đảm tiến độ công việc trong mọi dự án. Nhanh chóng, hiệu quả và an toàn tuyệt đối. Chúng tôi làm việc 24/7.",
    image:
      "https://vesinhcongnghiepcantho.com/wp-content/uploads/2021/06/employer-icon-3.png",
  },
  {
    title: "DỊCH VỤ UY TÍN",
    content:
      "Với phương châm khách hàng là cốt lõi chúng tôi luôn luôn đảm bảo mọi quyền lợi cho khách hàng một cách tốt nhất.",
    image:
      "https://vesinhcongnghiepcantho.com/wp-content/uploads/2021/06/download.png",
  },
  {
    title: "GIÁ CÁ CẠNH TRANH",
    content:
      "Với đội ngũ nhân công giàu kinh nghiệm cùng máy móc hiện đại chúng tôi cam kết mang chính sách giá hợp lý nhất cho khách hàng.",
    image:
      "https://vesinhcongnghiepcantho.com/wp-content/uploads/2021/06/finpage_icon.png.webp",
  },
  {
    title: "ĐỘI NGŨ CHUYÊN NGHIỆP",
    content:
      "Chúng tôi có đội ngũ nhân viên nhiều kinh nghiệm trong lĩnh vực vệ sinh công nghiệp hiện đại. Sửa Nhà Cần Thơ luôn tiếp thu những kiến thức mới.",
    image:
      "https://vesinhcongnghiepcantho.com/wp-content/uploads/2021/06/images.png",
  },
  {
    title: "HÓA CHẤT CHUYÊN DỤNG ",
    content:
      "Chúng tôi sử dụng những loại hóa chất chuyên dụng nhập khẩu được cấp phép của bộ ý tế thân thiện với môi trường và sức khỏe của quý khách.",
    image:
      "https://vesinhcongnghiepcantho.com/wp-content/uploads/2021/06/download.jpg.webp",
  },
  {
    title: "MÁY MÓC HIỆN ĐẠI",
    content:
      "chúng tôi không ngừng cải tiến, đầu tư trang thiết bị – máy móc hiện đại nhằm ngày càng nâng cao chất lượng dịch vụ.",
    image:
      "https://vesinhcongnghiepcantho.com/wp-content/uploads/2021/06/58468991-system-setup-glyph-bicolor-icon-image-style-is-a-flat-icon-symbol-inside-a-circle-blue-and-gray-colo.jpg",
  },
];

export const ServiceItem = [
  {
    label: "Nhà thép tiền chế",
    value: "nha-thep-tien-che",
  },
  {
    label: "Công trình nhôm kín",
    value: "cong-trinh-nhom-kin",
  },
];

export const ServiceItems1 = [
  {
    label: "Công trình thi công biệt thự",
    value: "cong-trinh-thi-cong-biet-thu",
  },
  {
    label: "Thiết kế biệt thự vườn",
    value: "thiet-ke-biet-thu-vuon",
  },
  {
    label: "Thiết kế biệt thự 2 tầng",
    value: "thiet-ke-biet-thu-2-tang",
  },
  {
    label: "Thiết kế biệt thự 3 tầng",
    value: "thiet-ke-biet-thu-3-tang",
  },
  {
    label: "Thiết kế biệt thự hiện đại",
    value: "thiet-ke-biet-thu-hien-dai",
  },
  {
    label: "Thiết kế biệt thự tân cổ điển",
    value: "thiet-ke-biet-thu-tan-co-dien",
  },
];

export const ServiceItems2 = [
  {
    label: "Nội thất showroom",
    value: "noi-that-showroom",
  },
];

export const ServiceItems3 = [
  {
    label: "Báo giá Thiết kế kiến trúc",
    value: "bao-gia-thiet-ke-kien-truc",
  },
  {
    label: "Dịch vụ Xây nhà trọn gói",
    value: "dich-vu-xay-nha-tron-goi",
  },
  {
    label: "Xây nhà trọn gói Cần Thơ 2023",
    value: "xay-nha-tron-goi-can-tho-2023",
  },

  {
    label: "Sản xuất và thi công nội thất gỗ",
    value: "san-xuat-va-thi-cong-noi-that-go",
  },
];

export const ServiceItems4 = [
  {
    label: "Cẩm nang xây nhà",
    value: "cam-nang-xay-nha",
  },
  {
    label: "Mẫu nhà đẹp 2023",
    value: "mau-nha-dep-2023",
  },
  {
    label: "Phong cách thiết kế kiến trúc",
    value: "phong-cach-thiet-ke-kien-truc",
  },
  {
    label: "Phong thủy nhà ở",
    value: "phong-thuy-nha-o",
  },
];

export {};
