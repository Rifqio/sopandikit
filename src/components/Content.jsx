/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { TbChecks } from "react-icons/tb";
import "../App.css";
import bg from "../assets/bg.png";
import IjinSiswa from "./form/IjinSiswa";
import IjinMahasiswa from "./form/IjinMahasiswa";
import ButtonCopy from "./button/ButtonCopy";
import ContentData from "../data/ContentData";
import useStore from "../state";

const Content = () => {
  const status = ["siswa", "kuliah", "kerja"];

  const [isStatusActive, setisStatusActive] = useState(0);
  const [copyMessage, setCopyMessage] = useState("");
  const { inputs, setInputs } = useStore();

  useEffect(() => {
    const getData = localStorage.getItem("sopandikit");
    if (getData) {
      const parsedData = JSON.parse(getData);
      setInputs(parsedData.input);
      setisStatusActive(parsedData.status);
    } else {
      localStorage.setItem(
        "sopandikit",
        JSON.stringify({ status: null, input: inputs })
      );
    }
  }, []);

  const setLocalStorage = (data, type) => {
    const prevData = localStorage.getItem("sopandikit");
    if (prevData) {
      const parsedData = JSON.parse(prevData);
      if (type === "status") {
        parsedData.status = data.status;
      } else {
        parsedData.input = { ...parsedData.input, ...data };
      }
      localStorage.setItem("sopandikit", JSON.stringify(parsedData));
    }
  };

  const handleCopy = () => {
    const textToCopy = content[isStatusActive].text.join("\n");
    navigator.clipboard.writeText(textToCopy).then(
      function () {
        setCopyMessage("Teks disalin!");
        setTimeout(() => {
          setCopyMessage("");
        }, 2000);
      },
      function (err) {
        setCopyMessage("Gagal menyalin teks.");
      }
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs(name, value);
    setLocalStorage({ [name]: value }, "input");
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setInputs(name, value);
    setLocalStorage({ [name]: value }, "input");
  };

  const handleSetisStatusActive = (data) => {
    setisStatusActive(data);
    setLocalStorage({ status: data }, "status");
  };

  const time = new Date();
  const formatTime = (time) => {
    let hours = time.getHours().toString().padStart(2, "0");
    let minutes = time.getMinutes().toString().padStart(2, "0");
    return `${hours}.${minutes}`;
  };

  function formatDateIndonesian(dateString) {
    if (!dateString) return "";
    const date = new Date(dateString);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return new Intl.DateTimeFormat("id-ID", options).format(date);
  }

  const content = ContentData({ inputs, formatDateIndonesian, isStatusActive });
  console.log(content.text);
  // ========== Components ========== //
  const RoleIjin = () => (
    <ul className="flex gap-5">
      {status.map((item, index) => (
        <li
          className={`${
            isStatusActive === index
              ? "border-2 border-green-400 bg-green-400 text-white"
              : "border-2 border-slate-300"
          } px-3 py-2 rounded-md cursor-pointer w-32 flex justify-center  transition-all duration-200`}
          key={index}
          onClick={() => handleSetisStatusActive(index)}
        >
          {item}
        </li>
      ))}
    </ul>
  );

  const FormInput = () => {
    if (isStatusActive === 0) {
      return (
        <IjinSiswa
          handleDateChange={handleDateChange}
          handleInputChange={handleInputChange}
          isStatusActive={isStatusActive}
        />
      );
    } else {
      return (
        <IjinMahasiswa
          handleDateChange={handleDateChange}
          handleInputChange={handleInputChange}
          isStatusActive={isStatusActive}
        />
      );
    }
  };

  const StatusImage = ({ bg }) => (
    <img src={bg} alt="bg" className="w-full h-full object-cover absolute" />
  );

  const ChatBubble = ({ item, time }) => (
    <div
      className={`chat-bubble w-64 md:w-7/12 p-2 bg-[#D9FDD3] mt-10 mb-10 mr-5 rounded-lg rounded-tr-[0px] slide-up-enter`}
    >
      <div className="break-words mb-3 text-sm">
        {item.text.map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>
      <div className="justify-end text-[#64C5E8] flex gap-2 items-center">
        <p className="text-slate-500 text-xs">{`${formatTime(time)}`}</p>
        <TbChecks />
      </div>
    </div>
  );

  const ContentDisplay = ({ isStatusActive, bg }) => (
    <div className="w-full">
      <div className="w-full">
        <div className="flex relative rounded-md transition-all duration-200 mt-2 justify-end min-h-72 w-full bg-slate-700 overflow-hidden">
          <StatusImage bg={bg} />
          {isStatusActive !== null && <ChatBubble item={content} time={time} />}
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full flex justify-center mt-10 gap-10 md:px-20 px-5 items-center md:items-start flex-col md:flex-row ">
      <div className="w-full md:w-1/2">
        <RoleIjin />

        <FormInput />

        <ButtonCopy copyMessage={copyMessage} handleCopy={handleCopy} />
      </div>

      <ContentDisplay isStatusActive={isStatusActive} bg={bg} />
    </div>
  );
};

export default Content;
