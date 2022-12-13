import React, { useState } from "react";
import icon from "../../../assets/icon.png";
import { BiWorld } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Menu = () => {
  const [menuShow, setMenuShow] = useState(false);
  const [modalLoginShow, setModalLoginShow] = useState(false);
  const [modalRegisterShow, setModalRegisterShow] = useState(false);
  const click = () => {
    setMenuShow(!menuShow);
    setModalLoginShow(false);
    setModalRegisterShow(false);
  };
  return (
    <nav className="w-full min-h-[60px] p-4 flex justify-between items-center bg-[#1D162C] relative">
      <span className="logo  flex items-center font-bold text-white text-3xl gap-2  mr-5">
        <span className="icon">
          <img src={icon} className="w-12" alt="icon" />
        </span>
        <span className="text">TRABS</span>
      </span>
      <div
        className={`left-menu  flex items-center gap-6 ${
          modalRegisterShow || modalLoginShow ? `hiddenMenuMobile` : ``
        } ${menuShow ? `show` : `close`} `}
      >
        <ul className="flex text-white gap-3 capitalize text-sm items-center">
          <li>
            <a href="#" className=" text-[#05D261] font-semibold">
              Início
            </a>
          </li>
          <li>
            <a href="#">Para empresas</a>
          </li>
          <li>
            <a href="#">Quem somos</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
        <span className="text-white bar">|</span>
        <div className="flex items-center gap-3">
          <span className="flex text-white items-center gap-2 text-xs cursor-pointer hover:opacity-80 transition-opacity">
            <BiWorld />
            <span>PT-BR</span>
          </span>
          <button
            onClick={() => {
              setModalLoginShow(!modalLoginShow), setModalRegisterShow(false);
            }}
            className=" p-2 text-white rounded-full text-sm font-semibold capitalize hover:opacity-80 transition-opacity"
          >
            Fazer Login
          </button>
          <button
            onClick={() => {
              setModalRegisterShow(!modalRegisterShow),
                setModalLoginShow(false);
            }}
            className="bg-white p-2 text-[#1D162C] rounded-full text-sm font-semibold hover:opacity-80 transition-opacity"
          >
            Cadastre-se
          </button>
        </div>
      </div>

      {menuShow || modalLoginShow || modalRegisterShow ? (
        <AiOutlineClose
          className="text-white text-xl hidden hamburguer-menu"
          onClick={() => {
            click();
          }}
        />
      ) : (
        <GiHamburgerMenu
          className="text-white text-xl hidden hamburguer-menu"
          onClick={() => {
            click();
          }}
        />
      )}

      <div
        className={`modalLogin transition-transform absolute top-[-200vh] left-0 z-50 w-full h-screen bg-[#1d162c] flex flex-col gap-14 sm:flex-row justify-center   sm:items-center  p-6 ${modalLoginShow ? `show` : `close`}`}
      >
        <AiOutlineClose onClick={()=>click()} className="closeModal absolute text-[#05D261] top-0 right-0 m-10 text-3xl cursor-pointer" />
        <a href="#" className="link hover:scale-95 transition-transform">
          <span className=" text-3xl text-white font-semibold ">
            Faça login como{" "}
            <span className="text-[#05D261]">prestador de serviços </span>
          </span>
        </a>
        <a href="#" className="link hover:scale-95 transition-transform">
          <span className=" text-3xl text-white font-semibold ">
            Faça login como <span className="text-[#05D261]">contratante </span>
          </span>
        </a>
      </div>
      <div
        className={`modalRegister transition-transform absolute top-[-200vh] left-0 z-50 w-full h-screen bg-[#1d162c] flex flex-col gap-14 sm:flex-row justify-center   sm:items-center  p-6 ${modalRegisterShow ? `show` : `close`}`}
      >
        <AiOutlineClose onClick={()=>click()} className="closeModal absolute text-[#05D261] top-0 right-0 m-10 text-3xl cursor-pointer" />
        <a href="#" className="link hover:scale-95 transition-transform">
          <span className=" text-3xl text-white font-semibold ">
            Cadastre-se como{" "}
            <span className="text-[#05D261]">prestador de serviços </span>
          </span>
        </a>
        <a href="#" className="link hover:scale-95 transition-transform">
          <span className=" text-3xl text-white font-semibold ">
            Cadastre-se como <span className="text-[#05D261]">contratante </span>
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Menu;
