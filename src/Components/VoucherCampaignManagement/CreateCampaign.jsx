import React, { useState, useRef } from "react";
import { datacheckbox, dataVoucher } from "../../MookData/DataCheckboxCampaign";
// import { Calendar } from "primereact/calendar";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css"; // Đừng quên import CSS

import {
  dropdown_angle_svg,
  smile_svg,
  calendar_svg_3,
  calendar_svg_4,
  left_arrow_svg,
  delete_svg_1,
  delete_small,
} from "../../Common/svg";

export default function CreateCampaign({ onClose }) {
  const [campaignName, setCampaignName] = useState("");
  const [description, setDescription] = useState("");
  const [datacheckboxItem, setDatacheckboxItem] = useState([
    {
      img: "./Voucher/vc1.png",
      name: "Sản phẩm 1",
      boxItem1: false,
      checked: false,
      value: ["0h-6h", "6h - 12h"],
    },
    {
      img: "./Voucher/vc2.png",
      name: "Sản phẩm 2",
      boxItem1: false,
      checked: false,
      value: ["0h-6h", "18h - 0h"],
    },
    {
      img: "./Voucher/vc3.png",
      name: "Sản phẩm 3",
      boxItem1: false,
      checked: false,
      value: ["12h - 18h", "6h - 12h"],
    },
    {
      img: "./Voucher/vc4.png",
      name: "Sản phẩm 4",
      boxItem1: false,
      checked: false,
      value: ["0h-6h", "12h - 18h"],
    },
    {
      img: "./Voucher/vc4.png",
      name: "Sản phẩm 5",
      boxItem1: false,
      checked: false,
      value: ["0h-6h", "12h - 18h"],
    },
    {
      img: "./Voucher/vc4.png",
      name: "Sản phẩm 6",
      boxItem1: false,
      checked: false,
      value: ["0h-6h", "12h - 18h"],
    },
  ]);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openmodalcuoicung, setopenmodalcuoicung] = useState(false);
  const [SearchTerm, setSearchTerm] = useState(""); // Đảm bảo SearchTerm là chuỗi
  // const [filteredItems, setFilteredItems] = useState(datacheckboxItem);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const options = ["0h - 6h", "6h - 12h", "12h - 18h", "18h - 0h"];
  const handleClickStart = () => {
    setShowStartDatePicker(!showStartDatePicker);
    setShowEndDatePicker(false); // Ẩn DatePicker của ngày kết thúc khi hiện DatePicker của ngày bắt đầu
  };

  const handleClickEnd = () => {
    setShowEndDatePicker(!showEndDatePicker);
    setShowStartDatePicker(false); // Ẩn DatePicker của ngày bắt đầu khi hiện DatePicker của ngày kết thúc
  };
  //checkbox cua voucher
  const handledataCheckboxItemClick = (index) => {
    // Cập nhật trạng thái checked của item tại vị trí index
    setDatacheckboxItem((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  };
  const handleCheckboxChange = (value) => {
    setSelectedCheckboxes((prevSelected) => {
      if (prevSelected.includes(value)) {
        // Xóa giá trị khỏi danh sách nếu đã chọn
        return prevSelected.filter((item) => item !== value);
      } else {
        // Thêm giá trị vào danh sách nếu chưa chọn
        return [...prevSelected, value];
      }
    });
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    console.log({
      campaignName,
      description,
      startDate,
      endDate,
    });
    onClose();
  };
  //endCreate
  const endCreate = () => {
    onClose();
    setopenmodalcuoicung(false);
    setIsOpen(false);
  };
  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleButtonToggle = (value) => {
    console.log(value);

    // handle button toggle logic
    setSelectedCheckboxes((prevSelected) =>
      prevSelected.filter((item) => item !== value)
    );
  };
  const filteredItems = datacheckboxItem.filter((item) => {
    const matchesSearchTerm = item.name
      .toLowerCase()
      .includes(SearchTerm.toLowerCase());

    const matchesCheckboxes =
      selectedCheckboxes.length === 0 ||
      item.value.some((val) => selectedCheckboxes.includes(val));

    return matchesSearchTerm && matchesCheckboxes;
  });

  const uncheck_svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM10.6931 16.3335C10.306 16.7058 9.694 16.7058 9.30689 16.3335L5.72744 12.8918C5.33038 12.51 5.33038 11.8746 5.72744 11.4928C6.10307 11.1317 6.69693 11.1317 7.07256 11.4928L9.30689 13.6412C9.694 14.0135 10.306 14.0135 10.6931 13.6412L16.9274 7.64669C17.3031 7.2855 17.8969 7.2855 18.2726 7.64669C18.6696 8.02848 18.6696 8.66383 18.2726 9.04562L10.6931 16.3335Z"
        fill="#9654F4"
      />
    </svg>
  );
  const check_svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z"
        fill="#9654F4"
      />
    </svg>
  );
  const [selectedValueradio, setSelectedValueradio] = useState("");
  const [submitvalueradio, setSubmitValueradio] = useState("");
  const [showDropdownkhachhangquaylai, setShowDropdownkhachhangquaylai] =
    useState(false);

  const handleRadioChange = (value) => {
    setSelectedValueradio(value);

    if (value === "khach-hang-quay-lai") {
      setShowDropdownkhachhangquaylai(true);
    } else {
      setSubmitValueradio(value);
      setShowDropdownkhachhangquaylai(false);
    }
  };
  return (
    <>
      {!openmodalcuoicung ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-[638px] max-h-[90vh] bg-white rounded-lg shadow-lg overflow-hidden overflow-y-auto">
            <div className="relative  px-8 shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)]">
              <h1 className="text-2xl font-bold text-center mb-5 py-5 ">
                Tạo chiến dịch
              </h1>
              <div
                className="absolute top-[35%] left-[32px] cursor-pointer "
                onClick={onClose}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 12H3M3 12L10 19M3 12L10 5"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>{" "}
            <div className="px-8 pb-10">
              <div className="flex items-center mb-4">
                <img
                  src="./hinhnen.png"
                  alt="User avatar"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="text-xl font-bold track-[-1px]">Jasdi</p>
                </div>
              </div>

              <div className="mb-5 py-2.5 px-[25px] rounded-lg shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)]">
                <div className="flex items-center gap-3">
                  <label className="block text-black whitespace-nowrap text-xl tracking-[-1px] font-medium">
                    Tên chiến dịch:
                  </label>
                  <input
                    type="text"
                    className="outline-none w-full p-3 border border-[#CACACA] rounded-lg mt-1 text-base tracking-[-1px] placeholder:text-[#B0B0B0] placeholder:tracking-[0.5px] text-black font-medium"
                    value={campaignName}
                    placeholder="Voucher tháng 10"
                    onChange={(e) => setCampaignName(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-5 relative">
                <textarea
                  className="w-full p-4 border border-[#B0B0B0] rounded-lg mt-1 text-xl placeholder:text-xl placeholder:text-[#BABABA] placeholder:tracking-[-1px] font-normal text-black min-h-[194px] outline-none"
                  value={description}
                  placeholder={"Bạn muốn nói gì với khách hàng của mình ?"}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <div className="absolute w-6 h-6 bottom-3 left-2">
                  {smile_svg}
                </div>
              </div>
              <div className="mb-5 py-2.5 px-[25px] rounded-lg shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)]">
                <div className="flex items-center gap-3">
                  <label className="block text-black whitespace-nowrap text-xl tracking-[-1px] font-medium">
                    Khung giờ hiển thị:
                  </label>
                  <div className="flex flex-col gap-2.5">
                    {selectedCheckboxes.length > 0
                      ? selectedCheckboxes.map((value, index) => (
                          <div className="min-w-[100px] py-1 px-2.5 flex items-center gap-2 justify-between bg-[#C1F1E1] rounded-full outline-none">
                            <div
                              key={index}
                              className="text-base text-gray-700"
                            >
                              {value}
                            </div>
                            <button onClick={() => handleButtonToggle(value)}>
                              {delete_small}
                            </button>
                          </div>
                        ))
                      : " "}
                  </div>
                  <div className="z-50" onClick={toggleDropdown}>
                    <div>
                      <div className="rounded-lg bg-[#B78AF7] w-12 h-8  px-[5px] py-[5px] flex justify-center items-center">
                        {dropdown_angle_svg}
                      </div>
                    </div>
                  </div>
                  <div className="py-[8px] px-[18.4px]  items-center justify-center">
                    <div className="relative">
                      {isOpen && (
                        <div className="absolute mt-2 py-5 px-[25px] bg-white border rounded-lg shadow-lg w-[207px] z-50">
                          <div className="flex flex-col gap-4">
                            {options.map((value, index) => (
                              <div className="flex items-center" key={index}>
                                <input
                                  type="checkbox"
                                  id={`option${index}`}
                                  name={`option${index}`}
                                  value={value}
                                  checked={selectedCheckboxes.includes(value)}
                                  onChange={() => handleCheckboxChange(value)}
                                  className="mr-2"
                                />
                                <label
                                  htmlFor={`option${index}`}
                                  className="text-base text-black font-medium"
                                >
                                  {value}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 py-2.5 px-[25px] rounded-lg shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)]">
                <div className="flex items-center gap-3 mb-3">
                  <label className="block text-black whitespace-nowrap text-xl tracking-[-1px] font-medium">
                    Chọn Voucher:
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-[#CACACA] rounded-lg mt-1 text-base tracking-[-1px] placeholder:text-[#B0B0B0] placeholder:tracking-[0.5px] text-black outline-none"
                    value={SearchTerm}
                    placeholder="Chọn loại voucher"
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div>
                  {" "}
                  <div className="mt-3 rounded-lg flex flex-col gap-2 max-h-[240px] overflow-y-auto">
                    {filteredItems.length > 0 ? (
                      filteredItems.map((item, index) => (
                        <div
                          className="flex w-full items-center justify-start gap-3 border border-[#CACACA] p-3 rounded-lg"
                          key={index}
                        >
                          <div className="w-full flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div
                                className="checkbox-custom"
                                onClick={() =>
                                  handledataCheckboxItemClick(index)
                                }
                              >
                                {item.checked ? uncheck_svg : check_svg}
                              </div>
                              <input
                                type="checkbox"
                                name={item.name}
                                checked={item.checked}
                                onChange={() =>
                                  handledataCheckboxItemClick(index)
                                }
                                style={{ display: "none" }}
                              />
                              <picture className="w-[48px] h-[48px]">
                                <img
                                  src={item.img}
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                                />
                              </picture>

                              <p className="title text-base font-medium text-[#B0B0B0]">
                                {item.name}
                              </p>
                            </div>
                            <div className="flex items-center gap-3">
                              <p className="text-black text-base font-medium whitespace-nowrap">
                                số lượng:{" "}
                              </p>
                              <input
                                type="number"
                                defaultValue={120}
                                className="rounded-sm shadow-[0px_0px_0px_2px_#EFE6FD] w-[90px] py-[5px] pr-[31px] pl-[13px] outline-none"
                                style={{
                                  WebkitAppearance: "none",
                                  MozAppearance: "textfield",
                                  Appearance: "none",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>
                        Không có sản phẩm nào phù hợp với tiêu chí tìm kiếm.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="mb-12 py-2.5 px-[25px] rounded-lg shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] flex flex-col gap-5">
                {/* Ngày bắt đầu chiến dịch */}
                <div className="flex items-center gap-3 relative">
                  <label className="block text-black text-xl tracking-[-1px] font-medium whitespace-nowrap flex-1">
                    Ngày bắt đầu chiến dịch:
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-[#B0B0B0] mt-1 flex-2 outline-none rounded-lg"
                    value={
                      startDate ? startDate.toLocaleDateString("en-GB") : ""
                    }
                    onClick={handleClickStart}
                    readOnly
                  />
                  {showStartDatePicker && (
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => {
                        setStartDate(date);
                        setShowStartDatePicker(false);
                      }}
                      className="absolute mt-2 w-full p-3 border border-[#B0B0B0] mt-1 flex-2 outline-none rounded-lg z-50"
                      dateFormat="dd/MM/yyyy"
                    />
                  )}
                  <button
                    type="button"
                    className="absolute right-0 top-[3px] z-40"
                    onClick={handleClickStart}
                  >
                    {calendar_svg_3}
                  </button>
                </div>

                {/* Ngày kết thúc chiến dịch */}
                <div className="flex items-center gap-3 relative">
                  <label className="block text-black text-xl tracking-[-1px] font-medium whitespace-nowrap flex-1">
                    Ngày kết thúc chiến dịch:
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-[#B0B0B0] mt-1 flex-2 outline-none rounded-lg"
                    value={endDate ? endDate.toLocaleDateString("en-GB") : ""}
                    onClick={handleClickEnd}
                    readOnly
                  />
                  {showEndDatePicker && (
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => {
                        setEndDate(date);
                        setShowEndDatePicker(false);
                      }}
                      className="absolute mt-2 w-full p-3 border border-[#B0B0B0] mt-1 flex-2 outline-none rounded-lg z-50"
                      dateFormat="dd/MM/yyyy"
                    />
                  )}
                  <button
                    type="button"
                    className="absolute right-0 top-[5px] z-40"
                    onClick={handleClickEnd}
                  >
                    {calendar_svg_4}
                  </button>
                </div>
              </div>
              <button
                onClick={() => setopenmodalcuoicung(true)}
                className="w-full bg-purple-500 text-white p-2 rounded-full mt-4"
              >
                Tiếp tục
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-[638px] max-h-[90vh] bg-white rounded-lg shadow-lg overflow-hidden overflow-y-auto">
            <form onSubmit={handleSubmit} className="">
              <div className="relative  px-8 shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)]">
                <h1 className="text-2xl font-bold text-center mb-5 py-5 ">
                  Tạo chiến dịch
                </h1>
                <div
                  className="absolute top-[35%] left-[32px] cursor-pointer "
                  onClick={() => setopenmodalcuoicung(false)}
                >
                  {left_arrow_svg}
                </div>
              </div>{" "}
              <div className="flex items-center mb-8 mt-5 ml-8">
                <img
                  src="./hinhnen.png"
                  alt="User avatar"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="text-xl font-bold track-[-1px]">Jasdi</p>
                </div>
              </div>
              <div className="rounded-lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] py-2.5 px-[25px] mb-8 mt-5 mx-8">
                <p className="title text-xl font-bold tracking-[-1px] mb-6">
                  Ai có thể nhìn thấy chiến dịch của bạn ?{" "}
                </p>

                <div className="flex flex-col gap-4 mb-12">
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      id="tat-ca"
                      name="type"
                      value="tat-ca"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      checked={selectedValueradio === "tat-ca"}
                      onChange={(e) => handleRadioChange(e.target.value)}
                    />
                    <label
                      htmlFor="tat-ca"
                      className="ml-2 text-black text-base font-medium"
                    >
                      Tất cả
                    </label>
                  </div>
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      id="khach-hang-quay-lai"
                      name="type"
                      value="khach-hang-quay-lai"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      checked={selectedValueradio === "khach-hang-quay-lai"}
                      onChange={(e) => handleRadioChange(e.target.value)}
                    />
                    <label
                      htmlFor="khach-hang-quay-lai"
                      className="ml-2 text-black text-base font-medium"
                    >
                      Khách hàng quay lại
                    </label>
                  </div>

                  {showDropdownkhachhangquaylai && (
                    <div className="mt-4 p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                          <input
                            type="radio"
                            id="nhom-khach-hang-1"
                            name="dropdown-type"
                            value="nhom-khach-hang-1"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            checked={submitvalueradio === "nhom-khach-hang-1"}
                            onChange={(e) =>
                              setSubmitValueradio(e.target.value)
                            }
                          />
                          <label
                            htmlFor="nhom-khach-hang-1"
                            className="ml-2 text-black text-base font-medium"
                          >
                            Nhóm khách hàng 1
                          </label>
                        </div>
                        <div className="flex items-center gap-4">
                          <input
                            type="radio"
                            id="nhom-khach-hang-2"
                            name="dropdown-type"
                            value="nhom-khach-hang-2"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            checked={submitvalueradio === "nhom-khach-hang-2"}
                            onChange={(e) =>
                              setSubmitValueradio(e.target.value)
                            }
                          />
                          <label
                            htmlFor="nhom-khach-hang-2"
                            className="ml-2 text-black text-base font-medium"
                          >
                            Nhóm khách hàng 2
                          </label>
                        </div>
                        <div className="flex items-center gap-4">
                          <input
                            type="radio"
                            id="khac"
                            name="dropdown-type"
                            value="khac"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            checked={submitvalueradio === "khac"}
                            onChange={(e) =>
                              setSubmitValueradio(e.target.value)
                            }
                          />
                          <label
                            htmlFor="khac"
                            className="ml-2 text-black text-base font-medium"
                          >
                            Khác
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <button
                  className="w-full bg-purple-500 text-white p-2 rounded-full mt-4"
                  type="submit"
                >
                  Đăng
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

{
  /* 
 

  */
}
