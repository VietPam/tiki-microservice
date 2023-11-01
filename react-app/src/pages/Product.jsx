import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import convertPrice from "../utils/price";

const Product = () => {
  const location = useLocation();
  const product_detail = location.state;

  console.log(">>> check product:", product_detail);

  const images = [
    "https://salt.tikicdn.com/cache/368x368/ts/product/92/9e/b5/3b409eaaade82e00d15528c27d4ca23f.png.webp",
    "https://salt.tikicdn.com/cache/368x368/ts/product/a5/1e/4b/48b5c054e20cb59ab42727f0a9133826.png.webp",
    "https://salt.tikicdn.com/cache/368x368/ts/product/9d/94/7d/425bf5d215cae10988540d9776208799.png.webp",
    "https://salt.tikicdn.com/cache/368x368/ts/product/e9/99/e8/9016fb1b289bcff3e4da61af437c2302.png.webp",
    "https://salt.tikicdn.com/cache/368x368/ts/product/f1/a2/f5/5072261c20e7959e8fd1c7da23ec7532.png.webp",
  ];

  const capacity = ["600ml", "400ml", "320ml"];

  const [activeImg, setActiveImg] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedCapacity, setSelectedCapacity] = useState(0);

  const incQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(1);
    }
  };

  const renderStarRating = () => {
    const rating = product_detail.rating_value || 0; // Ensure a valid rating_value
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i - 0.5 <= rating) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-300" />);
      }
    }

    return stars;
  };

  return (
    <div>
      <div className="flex flex-col items-center bg-blue-50 w-screen h-screen">
        <div className="flex flex-col w-2/3 mt-[32px] max-w-[1180px] min-w-[1180px]">
          <div className="flex flex-row gap-16 bg-white rounded-lg p-4 w-full">
            {/* PRODUCT IMAGE */}
            <div className="flex flex-col gap-2 w-1/3">
              <img
                //src={product_detail.img_product}
                src={activeImg}
                alt="Main Product Image"
                className="w-full h-full aspect-square object-cover rounded-md"
              />
              <div className="relative">
                <div className="w-full flex flex-row gap-2 overflow-hidden">
                  {images.map((item, index) => (
                    <img
                      src={item}
                      key={index}
                      alt="Product Image"
                      className="w-1/4 h-auto p-1 border border-second-text cursor-pointer rounded-md"
                      onClick={() => setActiveImg(images[index])}
                    />
                  ))}
                </div>
                <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-[-15px] rounded-full p-2 bg-white text-main-color cursor-pointer shadow-md">
                  <BsChevronCompactLeft size={20} />
                </div>
                <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-[-15px] rounded-full p-2 bg-white text-main-color cursor-pointer shadow-md">
                  <BsChevronCompactRight size={20} />
                </div>
              </div>
            </div>
            {/* PRODUCT DETAIL */}
            <div className="flex flex-col w-2/3 justify-between py-4 px-2">
              <div>
                <span className="font-normal">Brand: </span>
                <span className="text-main-color font-normal">Elmich</span>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-2xl">
                  {product_detail.title}
                </h1>
                <div className="flex flex-row items-center gap-2">
                  <div className="font-medium">
                    {product_detail.rating_value}
                  </div>
                  <div className="flex">{renderStarRating()}</div>
                  <div className="text-gray-500 font-light">(267)</div>
                  <div className="border-l h-2/3 border-second-text"></div>
                  <div className="text-gray-500 font-light">{/*    */}</div>
                </div>
              </div>
              <div className="flex flex-row items-center gap-4">
                <div className="font-semibold text-main-color text-3xl">
                  {convertPrice(
                    (product_detail.price * (100 - product_detail.sale)) / 100
                  )}{" "}
                  đ
                </div>
                <div className="text-gray-500 font-light line-through">
                  {convertPrice(product_detail.price)}đ
                </div>
                <div className="bg-main-color px-2 text-white font-light">
                  -{product_detail.sale}%
                </div>
              </div>
              <div>
                <span className="inline-block w-[100px]">Capacity</span>
                <div className="inline-flex gap-2">
                  {capacity.map((item, index) => (
                    <button
                      key={index}
                      className={
                        selectedCapacity === index
                          ? "bg-white hover:bg-gray-100 font-semibold py-1 px-8 border border-main-color"
                          : "bg-white hover:bg-gray-100 font-semibold py-1 px-8 border border-gray-300"
                      }
                      onClick={() => {
                        setSelectedCapacity(index);
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <span className="inline-block w-[100px]">Quantity</span>
                <div className="inline-flex flex-row items-center">
                  <span
                    className="w-7 h-7 bg-white border hover:bg-gray-100 cursor-pointer border-gray-300 text-center"
                    onClick={decQuantity}
                  >
                    -
                  </span>
                  <span className="w-10 h-7 text-center border-t border-b border-collapse border-gray-300">
                    {quantity}
                  </span>
                  <span
                    className="w-7 h-7 bg-white border hover:bg-gray-100 cursor-pointer border-gray-300 text-center"
                    onClick={incQuantity}
                  >
                    +
                  </span>
                </div>
                <span className="ml-4 text-gray-500 font-light">
                  1999 pieces available
                </span>
              </div>
              <div className="flex gap-4">
                <button className="flex gap-2 justify-center w-[180px] border py-2 border-main-color">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.5317 17.1362H7.99316L8.72314 15.6494L20.852 15.6274C21.2622 15.6274 21.6138 15.3345 21.687 14.9292L23.3667 5.52734C23.4106 5.28076 23.3447 5.02686 23.1836 4.83398C23.104 4.73906 23.0046 4.6626 22.8925 4.6099C22.7803 4.55721 22.6581 4.52954 22.5342 4.52881L7.10449 4.47754L6.97266 3.85742C6.88965 3.46191 6.5332 3.17383 6.12793 3.17383H2.35596C2.12739 3.17383 1.90818 3.26463 1.74656 3.42625C1.58494 3.58787 1.49414 3.80708 1.49414 4.03564C1.49414 4.26421 1.58494 4.48342 1.74656 4.64504C1.90818 4.80666 2.12739 4.89746 2.35596 4.89746H5.42969L6.00586 7.63672L7.42432 14.5044L5.59814 17.4854C5.50331 17.6134 5.44619 17.7653 5.43324 17.9241C5.4203 18.0829 5.45205 18.2421 5.5249 18.3838C5.67139 18.6743 5.9668 18.8574 6.29394 18.8574H7.82715C7.50029 19.2916 7.32374 19.8203 7.32422 20.3638C7.32422 21.7456 8.44726 22.8687 9.8291 22.8687C11.2109 22.8687 12.334 21.7456 12.334 20.3638C12.334 19.8193 12.1533 19.2896 11.8311 18.8574H15.7642C15.4373 19.2916 15.2607 19.8203 15.2612 20.3638C15.2612 21.7456 16.3843 22.8687 17.7661 22.8687C19.1479 22.8687 20.271 21.7456 20.271 20.3638C20.271 19.8193 20.0903 19.2896 19.7681 18.8574H22.5342C23.0078 18.8574 23.396 18.4717 23.396 17.9956C23.3946 17.7673 23.3029 17.5488 23.141 17.3878C22.9791 17.2268 22.7601 17.1364 22.5317 17.1362ZM7.46338 6.17676L21.521 6.22314L20.144 13.9331L9.10156 13.9526L7.46338 6.17676ZM9.8291 21.1353C9.4043 21.1353 9.05762 20.7886 9.05762 20.3638C9.05762 19.939 9.4043 19.5923 9.8291 19.5923C10.2539 19.5923 10.6006 19.939 10.6006 20.3638C10.6006 20.5684 10.5193 20.7646 10.3746 20.9093C10.2299 21.054 10.0337 21.1353 9.8291 21.1353ZM17.7661 21.1353C17.3413 21.1353 16.9946 20.7886 16.9946 20.3638C16.9946 19.939 17.3413 19.5923 17.7661 19.5923C18.1909 19.5923 18.5376 19.939 18.5376 20.3638C18.5376 20.5684 18.4563 20.7646 18.3116 20.9093C18.167 21.054 17.9707 21.1353 17.7661 21.1353Z"
                      fill="#1A88F7"
                    />
                  </svg>
                  <span className="text-main-color">Add to Cart</span>
                </button>
                <button className="text-center w-[180px] bg-main-color text-white py-2">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
