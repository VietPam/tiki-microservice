import React from "react";
import { AiFillShop } from "react-icons/ai";
import { RiMessage2Line } from "react-icons/ri";
import { ImBin } from "react-icons/im";
import { HiOutlineTicket } from "react-icons/hi2";
const Cart = () => {
  const data = {
    img: "https://salt.tikicdn.com/cache/280x280/ts/product/ce/61/23/23abab360852376076c21f21082a4bab.jpg.webp",
    title:
      "Bộ 2 Lon Sữa Bột Friso Gold 4 1400g Dành Cho Trẻ Từ 2 - 6 Tuổi + Tặng Lon Sữa Friso Gold 4 380g",
    sold: "Đã bán 5k+",
    price_discount: "1.300.000",
    discount: "27%",
    imgs: [
      "https://salt.tikicdn.com/cache/200x280/ts/product/ce/61/23/23abab360852376076c21f21082a4bab.jpg",
      "https://salt.tikicdn.com/cache/200x280/ts/product/e3/c2/b7/2079e2917bed2a0a69d302de4b2e4aa5.jpg",
    ],
    highlight: [
      "Cung cấp đa vi chất dinh dưỡng và chất khoáng giúp hỗ trợ sức khỏe đường ruột, phát triển trí não và tăng cường miễn dịch cho trẻ.",
      "Dễ tiêu hoá và hấp thu nhờ nguồn sữa NOVAS chất lượng và chất xơ GOS thúc đẩy sự phát triển của lợi khuẩn đường ruột.",
      "Hỗ trợ sự tăng trưởng cơ thể, hệ thống hô hấp và não bộ của trẻ thông qua các dưỡng chất như Selen, Kẽm, DHA và vitamin D.",
    ],
    brand_author: "Friso",
    disciption:
      '<div class="ToggleContent__View-sc-fbuwol-0 imwRtb" style="overflow: hidden; height: 250px;"><p><img src="https://salt.tikicdn.com/ts/tmp/2f/02/a6/f9bfc555413dbbe5770bc85f3082e2ed.jpg" alt="Bộ 2 Lon Sữa Bột Friso Gold 4 1400g Dành Cho Trẻ Từ 2 - 6 Tuổi + Tặng Lon Sữa Friso Gold 4 380g" width="750" height="4344"></p><p></p><p></p>\n<ul><li><strong>Sữa Bột Frisolac Gold 4</strong> - Giai Đoạn 1 là sản phẩm dinh dưỡng công thức dành cho trẻ từ 2-6 tuổi</li>\n<li>Frisolac Gold 4 cung cấp đa vi chất dinh dưỡng vitamin A, C, E và các chất khoáng selen, kẽm, 5 loại nucleotit và chất xơ GOS giúp hỗ trợ sức khỏe đường ruột của trẻ, và DHA, AA hỗ trợ phát triển trí não.</li>\n<li>Dễ dàng tiêu hoá, hấp thu: Nguồn sữa NOVAS chất lượng giúp tạo ra các phân tử đạm nhỏ tự nhiên, có cấu trúc mềm nhẹ, hấp thu nhanh và dễ dàng tiêu hóa. Chất xơ GOS thúc đẩy sự phát triển của lợi khuẩn, hỗ trợ đường ruột non nớt của bé.</li>\n<li>Tăng cường miễn dịch: Kẽm và Nucleotide hỗ trợ sức đề kháng, giúp bé luôn mạnh khoẻ.</li>\n<li>Tăng trưởng cơ thở và não bộ: Selen, Kẽm, DHA và vitamin D là các dưỡng chất quan trọng trong sự hỗ trợ sự tăng trưởng toàn diện của bé.</li>\n<li>CÔNG NGHỆ LOCKNUTRI - Bảo Toàn Dưỡng Chất Thiên Nhiên Giúp Bé Yêu Dễ Dàng Tiêu Hoá: Hệ tiêu hóa của bé còn rất non nớt, nên dưỡng chất thiên nhiên sẽ giúp bé dễ dàng tiêu hóa. Hiểu được điều này, Friso với quy trình xử lý ở nhiệt độ thấp, bảo toàn dưỡng chất thiên nhiên không bị biến tính, giúp dạ dày non nớt của bé tiêu hóa dễ dàng hơn.</li>\n</ul><p>&nbsp;</p><p>Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....</p><div class="gradient"></div></div><a class="btn-more" data-view-id="pdp_view_description_button">Xem thêm</a>',
    others: null,
  };
  let data2 = [];
  for (let i = 0; i < 10; i++) {
    data2.push(data);
  }
  return (
    <div className=" w-screen min-h-[100vh] px-12 py-8 bg-cart-color">
      <div className=" bg-white py-4 px-8 grid grid-cols-11 gap-4 text-first-text">
        <div className=" col-span-4">
          <input type="checkbox" name="checkall" id="" />
          <label htmlFor="checkall" className="ml-2">
            Select all
          </label>
        </div>
        <span className=" col-span-2">Unit Price</span>
        <span className=" col-span-2">Quantity</span>
        <span className=" col-span-2">Total</span>
        <span>Delete</span>
      </div>
      <div className=" bg-white text-first-text mt-8">
        <div className="py-4 px-8 border-b border-second-text flex items-center">
          <input type="checkbox" name="checkall" id="" />
          <label
            htmlFor="checkall"
            className="ml-2 px-2 py-1 bg-main-color text-white rounded-lg text-center w-fit flex items-center"
          >
            <AiFillShop className=" inline-block mr-1" size={20} />
            <span>TAKA Shop</span>
          </label>
          <RiMessage2Line className=" text-main-color ml-2" size={20} />
        </div>
        <div className="px-4 py-8">
          <div className="border border-second-text grid grid-cols-1 gap-4 py-4 px-2">
            {data2.map((item, index) => {
              return (
                <div key={index} className="grid grid-cols-11 gap-4">
                  <div className=" col-span-4 flex items-center justify-start">
                    <input type="checkbox" name="checkall" id="" />
                    <div className="flex ml-4">
                      <div className=" cursor-pointer">
                        <img src={item.img} className=" w-36" alt="" />
                      </div>
                      <div className="ml-4">
                        <h3 className=" text-black font-semibold">
                          {item.title}
                        </h3>
                        <p>{item.brand_author}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 text-center flex flex-col justify-center">
                    <p className=" text-black font-semibold text-xl h-fit">
                      {item.price_discount}đ
                    </p>
                    <p className=" line-through h-fit">{item.discount} </p>
                  </div>
                  <div className="col-span-2 flex items-center justify-center">
                    <div className="inline-flex flex-row items-center text-black">
                      <div className="hover:text-black w-9 h-9 bg-white border-2 hover:bg-gray-100 cursor-pointer rounded-l-[5px] border-first-text flex items-center justify-center">
                        <div>-</div>
                      </div>
                      <div className=" text-lg font-semibold w-10 h-9 text-center border-t-2 border-b-2 border-collapse  border-first-text flex items-center justify-center">
                        <div>1</div>
                      </div>
                      <div className="hover:text-black w-9 h-9 bg-white border-2 hover:bg-gray-100 cursor-pointer rounded-r-[5px]  border-first-text flex items-center justify-center">
                        <div>+</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 text-center text-main-color font-semibold text-xl flex items-center justify-center">
                    <span>{item.price_discount}</span>đ
                  </div>
                  <div className=" flex items-center justify-center cursor-pointer hover:text-black">
                    <ImBin size={25} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="px-6 py-4 border-t border-second-text ">
          <button className="flex items-center text-main-color font-semibold">
            <HiOutlineTicket size={30} />
            <span className="ml-2">Shop Voucher</span>
          </button>
        </div>
      </div>

      <div className=" bg-white text-first-text mt-8">
        <div className="py-4 px-8 border-b border-second-text flex items-center">
          <input type="checkbox" name="checkall" id="" />
          <label
            htmlFor="checkall"
            className="ml-2 px-2 py-1 bg-main-color text-white rounded-lg text-center w-fit flex items-center"
          >
            <AiFillShop className=" inline-block mr-1" size={20} />
            <span>TAKA Mall</span>
          </label>
          <RiMessage2Line className=" text-main-color ml-2" size={20} />
        </div>
        <div className="px-4 py-8">
          <div className="border border-second-text grid grid-cols-1 gap-4 py-4 px-2">
            {data2.map((item, index) => {
              return (
                <div key={index} className="grid grid-cols-11 gap-4">
                  <div className=" col-span-4 flex items-center justify-start">
                    <input type="checkbox" name="checkall" id="" />
                    <div className="flex ml-4">
                      <div className=" cursor-pointer">
                        <img src={item.img} className=" w-36" alt="" />
                      </div>
                      <div className="ml-4">
                        <h3 className=" text-black font-semibold">
                          {item.title}
                        </h3>
                        <p>{item.brand_author}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 text-center flex flex-col justify-center">
                    <p className=" text-black font-semibold text-xl h-fit">
                      {item.price_discount}đ
                    </p>
                    <p className=" line-through h-fit">{item.discount} </p>
                  </div>
                  <div className="col-span-2 flex items-center justify-center">
                    <div className="inline-flex flex-row items-center text-black">
                      <div className="hover:text-black w-9 h-9 bg-white border-2 hover:bg-gray-100 cursor-pointer rounded-l-[5px] border-first-text flex items-center justify-center">
                        <div>-</div>
                      </div>
                      <div className=" text-lg font-semibold w-10 h-9 text-center border-t-2 border-b-2 border-collapse  border-first-text flex items-center justify-center">
                        <div>1</div>
                      </div>
                      <div className="hover:text-black w-9 h-9 bg-white border-2 hover:bg-gray-100 cursor-pointer rounded-r-[5px]  border-first-text flex items-center justify-center">
                        <div>+</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 text-center text-main-color font-semibold text-xl flex items-center justify-center">
                    <span>{item.price_discount}</span>đ
                  </div>
                  <div className=" flex items-center justify-center cursor-pointer hover:text-black">
                    <ImBin size={25} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="px-6 py-4 border-t border-second-text ">
          <button className="flex items-center text-main-color font-semibold">
            <HiOutlineTicket size={30} />
            <span className="ml-2">Shop Voucher</span>
          </button>
        </div>
      </div>

      <div className=" bg-white text-first-text mt-8">
        <div className="px-12 py-4 w-full flex justify-end items-center border-dashed border-b border-second-text">
          <span className=" text-black font-semibold mr-12">TAKA Voucher</span>
          <button className="flex items-center text-main-color font-semibold">
            <HiOutlineTicket size={30} />
            <span className="ml-2">Select or enter code</span>
          </button>
        </div>
        <div className="px-6 py-8 w-full flex justify-between items-center ">
          <div className="flex items-center">
            <div className="flex items-center">
              <input type="checkbox" name="select-all" />
              <span className="ml-2">Select All (20)</span>
            </div>
            <button className="ml-6">Delete All</button>
            <button className="ml-6 text-favorite">Add to Favourite</button>
          </div>
          <div className="flex items-center">
            <div className=" font-semibold">
              Total <span>(10 items)</span>:
            </div>
            <span className=" text-black font-bold text-xl ml-2">13.000.000đ</span>
            <button className="ml-4 px-12 py-2 rounded-lg bg-main-color text-white font-semibold">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
