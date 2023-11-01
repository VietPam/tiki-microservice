import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { FaBeer, FaStar, FaStarHalfAlt } from "react-icons/fa";
import trimmedTitle from "../utils/title";
import convertPrice from "../utils/price";
import convertNumber from "../utils/number";

const ProductCard = ({ id, product }) => {
  const navigate = useNavigate();

  const handleProductDetail = () => {
    const product_detail = {
      productName: product.productName,
      img_product: product.img_product,
      rating_value: product.rating_value,
      sold_number: product.sold_number,
      price: product.price,
      sale: product.sale,
      shop_location: product.shop_location,
      options: product.options,
      quantity: product.quantity,
    };
    navigate(`/${product.category.categoryName}/${id}`, {
      state: product_detail,
    });
  };

  const renderStarRating = () => {
    const rating = product.rating_value || 0; // Ensure a valid rating_value
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
    <div
      onClick={handleProductDetail}
      className="w-[200px] bg-white border-2 border-gray-200 rounded-sm hover:shadow-lg hover:cursor-pointer transform hover:-translate-y-0.5 transition-transform ease-in-out duration-300"
    >
      <img className="w-full" src={product.img_product} alt="Product" />
      <div className="py-3 pl-2">
        <div className="text-sm text-left font-medium relative">
          {trimmedTitle(product.productName)}
        </div>
        <div className="flex items-center my-1">
          <div className="flex text-xs">{renderStarRating()}</div>
          <span className="border border-gray-300 h-4 m-2" />
          <div className="text-xs text-gray-400">
            {convertNumber(product.sold_number, 1)} sold
          </div>
        </div>
        <div className="text-xl text-blue-500 font-semibold">
          {convertPrice((product.price * (100 - product.sale)) / 100)} ₫
        </div>
        <div className="flex my-1">
          <div className="text-sm text-gray-500 font-normal line-through">
            {convertPrice(product.price)} ₫
          </div>
          <div className="text-sm pl-2">-{product.sale}%</div>
        </div>
        <div className="text-gray-400 text-xs text-right mr-2 ">
          {product.shop_location}
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.object,
    img_product: PropTypes.string,
    productName: PropTypes.string,
    rating_value: PropTypes.number,
    sold_number: PropTypes.number,
    price: PropTypes.number,
    sale: PropTypes.number,
    shop_location: PropTypes.string,
  }),
  id: PropTypes.number,
};

export default ProductCard;
