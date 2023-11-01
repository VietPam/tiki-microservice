import React, { Component } from "react";
import ProductCard from "../components/ProductCard";
import { AiOutlineFilter } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import img_product_1 from "../assets/pictures/object-1.png";
import img_product_2 from "../assets/pictures/object-2.png";
import img_product_3 from "../assets/pictures/object-3.png";
import Automotive_1 from "../assets/categories/Automotive_1.png";
import useFetch from "../utils/fetch";
import axios from "axios";
// const product_list = [
//   {
//     category: "10007",
//     img_product: img_product_1,
//     title:
//       "Bình Nước Thủy Tinh Chịu Nhiệt Độ Cao Từ -20oC Đến 130oC Soika SC05",
//     rating_value: 4.5,
//     sold_number: 12000,
//     original_price: 209500,
//     discount_value: 35,
//     discount_price: 136000,
//     shop_location: "Hà Nội",
//   },
//   {
//     category: "10007",
//     img_product: img_product_1,
//     title:
//       "Bình Nước Thủy Tinh Chịu Nhiệt Độ Cao Từ -20oC Đến 130oC Soika SC05",
//     rating_value: 4.5,
//     sold_number: 12000,
//     original_price: 209500,
//     discount_value: 35,
//     discount_price: 136000,
//     shop_location: "Hà Nội",
//   },
//   {
//     category: "10007",
//     img_product: img_product_1,
//     title:
//       "Bình Nước Thủy Tinh Chịu Nhiệt Độ Cao Từ -20oC Đến 130oC Soika SC05",
//     rating_value: 2.5,
//     sold_number: 12000,
//     original_price: 209500,
//     discount_value: 35,
//     discount_price: 136000,
//     shop_location: "Hà Nội",
//   },
//   {
//     category: "10007",
//     img_product: img_product_1,
//     title:
//       "Bình Nước Thủy Tinh Chịu Nhiệt Độ Cao Từ -20oC Đến 130oC Soika SC05",
//     rating_value: 3.5,
//     sold_number: 12000,
//     original_price: 209500,
//     discount_value: 35,
//     discount_price: 136000,
//     shop_location: "Hà Nội",
//   },
//   {
//     category: "10007",
//     img_product: img_product_1,
//     title:
//       "Bình Nước Thủy Tinh Chịu Nhiệt Độ Cao Từ -20oC Đến 130oC Soika SC05",
//     rating_value: 3.5,
//     sold_number: 12000,
//     original_price: 209500,
//     discount_value: 35,
//     discount_price: 136000,
//     shop_location: "Hà Nội",
//   },
//   {
//     category: "10007",
//     img_product: img_product_1,
//     title:
//       "Bình Nước Thủy Tinh Chịu Nhiệt Độ Cao Từ -20oC Đến 130oC Soika SC05",
//     rating_value: 4,
//     sold_number: 12000,
//     original_price: 209500,
//     discount_value: 35,
//     discount_price: 136000,
//     shop_location: "Hà Nội",
//   },
//   {
//     category: "10007",
//     img_product: img_product_2,
//     title: "[Vỡ 1 Đổi 1] Bình giữ nhiệt 6 Up thủy tinh an toàn",
//     rating_value: 4.5,
//     sold_number: 12000,
//     original_price: 200000,
//     discount_value: 50,
//     discount_price: 100000,
//     shop_location: "Hà Nội",
//   },
//   {
//     category: "10007",
//     img_product: img_product_2,
//     title: "[Vỡ 1 Đổi 1] Bình giữ nhiệt 6 Up thủy tinh an toàn",
//     rating_value: 4.5,
//     sold_number: 12000,
//     original_price: 200000,
//     discount_value: 50,
//     discount_price: 100000,
//     shop_location: "Hà Nội",
//   },
//   {
//     category: "10007",
//     img_product: img_product_2,
//     title: "[Vỡ 1 Đổi 1] Bình giữ nhiệt 6 Up thủy tinh an toàn",
//     rating_value: 4.5,
//     sold_number: 12000,
//     original_price: 200000,
//     discount_value: 50,
//     discount_price: 100000,
//     shop_location: "Hà Nội",
//   },
//   {
//     category: "10007",
//     img_product: img_product_2,
//     title: "[Vỡ 1 Đổi 1] Bình giữ nhiệt 6 Up thủy tinh an toàn",
//     rating_value: 4.5,
//     sold_number: 12000,
//     original_price: 200000,
//     discount_value: 50,
//     discount_price: 100000,
//     shop_location: "Hà Nội",
//   },
//   {
//     category: "10007",
//     img_product: img_product_2,
//     title: "[Vỡ 1 Đổi 1] Bình giữ nhiệt 6 Up thủy tinh an toàn",
//     rating_value: 4.5,
//     sold_number: 12000,
//     original_price: 200000,
//     discount_value: 50,
//     discount_price: 100000,
//     shop_location: "Hà Nội",
//   },
//   {
//     category: "10007",
//     img_product: img_product_2,
//     title: "[Vỡ 1 Đổi 1] Bình giữ nhiệt 6 Up thủy tinh an toàn",
//     rating_value: 4.5,
//     sold_number: 12000,
//     original_price: 200000,
//     discount_value: 50,
//     discount_price: 100000,
//     shop_location: "Hà Nội",
//   },
//   {
//     category: "10007",
//     img_product: img_product_3,
//     title: "Bình đựng nước inox 2 lít cao cấp",
//     rating_value: 4.5,
//     sold_number: 12000,
//     original_price: 500000,
//     discount_value: 50,
//     discount_price: 250000,
//     shop_location: "Hà Nội",
//   },
//   {
//     category: "10007",
//     img_product: img_product_3,
//     title: "Bình đựng nước inox 2 lít cao cấp",
//     rating_value: 4.5,
//     sold_number: 12000,
//     original_price: 500000,
//     discount_value: 50,
//     discount_price: 250000,
//     shop_location: "Hà Nội",
//   },
//   {
//     category: "10007",
//     img_product: img_product_3,
//     title: "Bình đựng nước inox 2 lít cao cấp",
//     rating_value: 4.5,
//     sold_number: 12000,
//     original_price: 500000,
//     discount_value: 50,
//     discount_price: 250000,
//     shop_location: "Hà Nội",
//   },
//   {
//     category: "10007",
//     img_product: img_product_3,
//     title: "Bình đựng nước inox 2 lít cao cấp",
//     rating_value: 4.5,
//     sold_number: 12000,
//     original_price: 500000,
//     discount_value: 50,
//     discount_price: 250000,
//     shop_location: "Hà Nội",
//   },
//   {
//     category: "10007",
//     img_product: img_product_3,
//     title: "Bình đựng nước inox 2 lít cao cấp",
//     rating_value: 4.5,
//     sold_number: 12000,
//     original_price: 500000,
//     discount_value: 50,
//     discount_price: 250000,
//     shop_location: "Hà Nội",
//   },
//   {
//     category: "10007",
//     img_product: img_product_3,
//     title: "Bình đựng nước inox 2 lít cao cấp",
//     rating_value: 4.5,
//     sold_number: 12000,
//     original_price: 500000,
//     discount_value: 50,
//     discount_price: 250000,
//     shop_location: "Hà Nội",
//   },
// ];

const FILTER_BAR = [
  {
    header: "By Status",
    titles: [
      {
        key: "Best-Seller",
        label: "Best Seller",
      },
      {
        key: "Newest",
        label: "Newest",
      },
    ],
    type: "checkbox",
  },
  {
    header: "By Price",
    titles: [
      {
        key: "Descending",
        label: "Descending",
      },
      {
        key: "Ascending",
        label: "Ascending",
      },
    ],
    type: "radio",
  },
  {
    header: "By Address",
    titles: [
      {
        key: "HCM",
        label: "Hồ Chí Minh",
      },
      {
        key: "HN",
        label: "Hà Nội",
      },
    ],
    type: "checkbox",
  },
];
const img_1 =
  "https://i.pinimg.com/564x/73/3c/68/733c688bf6f725345c18190da00e159b.jpg";
const img_2 =
  "https://i.pinimg.com/564x/7a/c2/49/7ac24931d724a309a8c14e8c15e7f782.jpg";
const img_3 =
  "https://i.pinimg.com/564x/a3/d0/9a/a3d09ab039e3290c2681f643544a10cc.jpg";
const CATEGORIES = [
  {
    key: "10000",
    label: "Thời trang nam",
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTXtWcrgucgFQEY37vji1OvQUQUllFKajD2NqefQSRuDiB16Jh42IuPw7wb4Pp-9Ca9cH6pS4ciRtCBleYYxKai7aN6HemkNrIRxSKzGr4Oa-_opD9XibQvslZknQoidgiL9CtAX80alw&usqp=CAc",
  },
  {
    key: "10001",
    label: "Điện thoại & phụ kiện",
    img: "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(5):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/8/638138646675311035_xiaomi-redmi-12c-xam-1.jpg",
  },
  {
    key: "10002",
    label: "Thiết bị điện tử",
    img: "https://cf.shopee.vn/file/7a860704b61547430113996689283433",
  },
  {
    key: "10003",
    label: "Máy tính & laptop",
    img: "https://cf.shopee.vn/file/34176b228172156844a2a69139318307",
  },
  {
    key: "10004",
    label: "Máy ảnh & máy quay phim",
    img: "https://cf.shopee.vn/file/c749518b127300370075c20647022134",
  },
  {
    key: "10005",
    label: "Đồng hồ",
    img: "https://cf.shopee.vn/file/30f40218260210844425331567277220",
  },
  {
    key: "10006",
    label: "Giày dép nam",
    img: "https://cf.shopee.vn/file/8650040669625775421056758961943",
  },
  {
    key: "10007",
    label: "Thiết bị điện gia dụng",
    img: "https://cf.shopee.vn/file/4c438927116609024450391420536495",
  },
  {
    key: "10008",
    label: "Thể thao & du lịch",
    img: "https://cf.shopee.vn/file/2453870214024200445140510755961",
  },
  {
    key: "10009",
    label: "Ô tô & xe máy & xe đạp",
    img: "https://cf.shopee.vn/file/9449641469625775421056758961943",
  },
  {
    key: "10010",
    label: "Bạch Hoa Online. Nha Sách Online",
    img: "https://cf.shopee.vn/file/7a860704b61547430113996689283433",
  },
  {
    key: "10011",
    label: "Trang sức nữ",
    img: "https://cf.shopee.vn/file/30f40218260210844425331567277220",
  },
];
const Home = () => {
  const {
    data: product_list,
    isLoading,
    isError,
  } = useFetch("http://localhost:5000/product/list");

  console.log(">>> Check product list:", product_list);
  return (
    <div className="w-full">
      <div className="bg-blue-50 flex flex-col justify-center items-center">
        <div
          className="grid grid-rows-2 grid-flow-col gap-1 w-11/12 mx-auto max-w-[1250px]"
          style={{ height: 600, marginBottom: 20 }}
        >
          <div
            className="row-span-2 col-span-2 bg-contain"
            style={{ backgroundImage: `url(${img_1})` }}
          ></div>
          <div
            className="row-span-1 col-span-1 bg-contain"
            style={{ backgroundImage: `url(${img_2})` }}
          ></div>
          <div
            className="row-span-1 col-span-1 bg-contain"
            style={{ backgroundImage: `url(${img_3})` }}
          ></div>
        </div>
        <div className="w-[1250px] my-10">
          <h2 className="text-xl text-left font-semibold mb-5">CATEGORY</h2>
          <div className="bg-white py-5 px-2 rounded-md">
            <div className="grid grid-cols-6 gap-4">
              {CATEGORIES.map((category, index) => (
                <div
                  key={index}
                  className="category-item flex flex-col items-center"
                >
                  <button className="category-button w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
                    <img
                      src={Automotive_1}
                      alt={category.label}
                      className="category-image w-10 h-10 rounded-full"
                    />
                  </button>
                  <label className="text-center mt-1">{category.label}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[1250px]">
          <h2 className="text-xl text-left font-semibold mb-5">
            DAILY PRODUCT
          </h2>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2">
            {product_list.map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6"
              >
                <ProductCard id={index} product={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
