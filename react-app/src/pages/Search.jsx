import React, { Component } from "react";
import ProductCard from "../components/ProductCard";
import { AiOutlineFilter } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import img_product_1 from "../assets/pictures/object-1.png";
import img_product_2 from "../assets/pictures/object-2.png";
import img_product_3 from "../assets/pictures/object-3.png";
const product_list = [
  {
    img_product: img_product_1,
    title:
      "Bình Nước Thủy Tinh Chịu Nhiệt Độ Cao Từ -20oC Đến 130oC Soika SC05",
    rating_value: 4.5,
    sold_number: 12000,
    original_price: 209500,
    discount_value: 35,
    discount_price: 136000,
    shop_location: "Hà Nội",
  },
  {
    img_product: img_product_1,
    title:
      "Bình Nước Thủy Tinh Chịu Nhiệt Độ Cao Từ -20oC Đến 130oC Soika SC05",
    rating_value: 4.5,
    sold_number: 12000,
    original_price: 209500,
    discount_value: 35,
    discount_price: 136000,
    shop_location: "Hà Nội",
  },
  {
    img_product: img_product_1,
    title:
      "Bình Nước Thủy Tinh Chịu Nhiệt Độ Cao Từ -20oC Đến 130oC Soika SC05",
    rating_value: 2.5,
    sold_number: 12000,
    original_price: 209500,
    discount_value: 35,
    discount_price: 136000,
    shop_location: "Hà Nội",
  },
  {
    img_product: img_product_1,
    title:
      "Bình Nước Thủy Tinh Chịu Nhiệt Độ Cao Từ -20oC Đến 130oC Soika SC05",
    rating_value: 3.5,
    sold_number: 12000,
    original_price: 209500,
    discount_value: 35,
    discount_price: 136000,
    shop_location: "Hà Nội",
  },
  {
    img_product: img_product_1,
    title:
      "Bình Nước Thủy Tinh Chịu Nhiệt Độ Cao Từ -20oC Đến 130oC Soika SC05",
    rating_value: 3.5,
    sold_number: 12000,
    original_price: 209500,
    discount_value: 35,
    discount_price: 136000,
    shop_location: "Hà Nội",
  },
  {
    img_product: img_product_1,
    title:
      "Bình Nước Thủy Tinh Chịu Nhiệt Độ Cao Từ -20oC Đến 130oC Soika SC05",
    rating_value: 4,
    sold_number: 12000,
    original_price: 209500,
    discount_value: 35,
    discount_price: 136000,
    shop_location: "Hà Nội",
  },
  {
    img_product: img_product_2,
    title: "[Vỡ 1 Đổi 1] Bình giữ nhiệt 6 Up thủy tinh an toàn",
    rating_value: 4.5,
    sold_number: 12000,
    original_price: 200000,
    discount_value: 50,
    discount_price: 100000,
    shop_location: "Hà Nội",
  },
  {
    img_product: img_product_2,
    title: "[Vỡ 1 Đổi 1] Bình giữ nhiệt 6 Up thủy tinh an toàn",
    rating_value: 4.5,
    sold_number: 12000,
    original_price: 200000,
    discount_value: 50,
    discount_price: 100000,
    shop_location: "Hà Nội",
  },
  {
    img_product: img_product_2,
    title: "[Vỡ 1 Đổi 1] Bình giữ nhiệt 6 Up thủy tinh an toàn",
    rating_value: 4.5,
    sold_number: 12000,
    original_price: 200000,
    discount_value: 50,
    discount_price: 100000,
    shop_location: "Hà Nội",
  },
  {
    img_product: img_product_2,
    title: "[Vỡ 1 Đổi 1] Bình giữ nhiệt 6 Up thủy tinh an toàn",
    rating_value: 4.5,
    sold_number: 12000,
    original_price: 200000,
    discount_value: 50,
    discount_price: 100000,
    shop_location: "Hà Nội",
  },
  {
    img_product: img_product_2,
    title: "[Vỡ 1 Đổi 1] Bình giữ nhiệt 6 Up thủy tinh an toàn",
    rating_value: 4.5,
    sold_number: 12000,
    original_price: 200000,
    discount_value: 50,
    discount_price: 100000,
    shop_location: "Hà Nội",
  },
  {
    img_product: img_product_2,
    title: "[Vỡ 1 Đổi 1] Bình giữ nhiệt 6 Up thủy tinh an toàn",
    rating_value: 4.5,
    sold_number: 12000,
    original_price: 200000,
    discount_value: 50,
    discount_price: 100000,
    shop_location: "Hà Nội",
  },
  {
    img_product: img_product_3,
    title: "Bình đựng nước inox 2 lít cao cấp",
    rating_value: 4.5,
    sold_number: 12000,
    original_price: 500000,
    discount_value: 50,
    discount_price: 250000,
    shop_location: "Hà Nội",
  },
  {
    img_product: img_product_3,
    title: "Bình đựng nước inox 2 lít cao cấp",
    rating_value: 4.5,
    sold_number: 12000,
    original_price: 500000,
    discount_value: 50,
    discount_price: 250000,
    shop_location: "Hà Nội",
  },
  {
    img_product: img_product_3,
    title: "Bình đựng nước inox 2 lít cao cấp",
    rating_value: 4.5,
    sold_number: 12000,
    original_price: 500000,
    discount_value: 50,
    discount_price: 250000,
    shop_location: "Hà Nội",
  },
  {
    img_product: img_product_3,
    title: "Bình đựng nước inox 2 lít cao cấp",
    rating_value: 4.5,
    sold_number: 12000,
    original_price: 500000,
    discount_value: 50,
    discount_price: 250000,
    shop_location: "Hà Nội",
  },
  {
    img_product: img_product_3,
    title: "Bình đựng nước inox 2 lít cao cấp",
    rating_value: 4.5,
    sold_number: 12000,
    original_price: 500000,
    discount_value: 50,
    discount_price: 250000,
    shop_location: "Hà Nội",
  },
  {
    img_product: img_product_3,
    title: "Bình đựng nước inox 2 lít cao cấp",
    rating_value: 4.5,
    sold_number: 12000,
    original_price: 500000,
    discount_value: 50,
    discount_price: 250000,
    shop_location: "Hà Nội",
  },
];
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
const Search = () => {
  return (
    <div className="bg-blue-50 flex  flex-col justify-center items-center pl-0">
      <div className="flex row-auto">
        <div className="w-[20%]">
          <div className="p-4 space-y-4 bg-white border rounded-lg shadow-md">
            <header className="flex flex-row items-center text-xl">
              <AiOutlineFilter size={24} /> Search Filter
            </header>
            {FILTER_BAR.map((filter, filterIndex) => (
              <div key={filterIndex}>
                <h2 className="text-lg font-semibold text-gray-700">
                  {filter.header}
                </h2>
                <div className="space-y-2">
                  {filter.titles.map((title, titleIndex) => (
                    <div
                      key={titleIndex}
                      className="flex items-center hover:bg-blue-200 rounded-md p-2"
                    >
                      <input
                        type={filter.type}
                        name={filter.header}
                        id={title.key}
                        className="text-blue-500 focus:ring-2 focus:ring-blue-500"
                      />
                      <label htmlFor={title.key} className="text-gray-700 ml-2">
                        {title.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <button className="flex flex-row items-center">
              View More <MdOutlineKeyboardArrowDown />
            </button>
            <button className="bg-orange-500 px-6 py-3 rounded-md text-white mx-auto block hover:bg-orange-600 focus:ring focus:ring-orange-400 focus:ring-opacity-50">
              Reset
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2">
          {product_list.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6"
            >
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
