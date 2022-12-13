import React from "react";
import Menu from "../../shared/components/menu/menu";
import Banner from "../../assets/banner.jpeg";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { GrUserWorker, GrServices } from "react-icons/gr";
import { BsFillInfoCircleFill } from "react-icons/bs";

const Home = () => {
  return (
    <div className="page">
      <header className="fle flex-col w-full">
        <Menu />
        <section className="banner-top w-screen  min-h-[80vh] bg-[#1d162c] relative overflow-hidden">
          <div className="box-modal  w-full   z-30 relative p-6">
            <div className="box-modal  w-full max-w-lg min-h-[40vh]  bg-white relative p-3 rounded-lg">
              <ul className="flex gap-6 justify-center">
                <li className=" text-center w-32 p-4 flex items-center flex-col gap-4 font-semibold  text-sm pb-5">
                  <HiWrenchScrewdriver className=" text-lg" />
                  <span className="">Prestador de serviço </span>
                  <div className=" w-[60px] h-[3px] bg-black"></div>
                </li>
                <li className=" text-center w-32 p-4 flex items-center flex-col gap-4 font-semibold  pb-5  text-sm">
                  <GrUserWorker className=" text-lg" />
                  <span className="">Solicitar um profissional </span>
                </li>{" "}
                <li className=" text-center w-32 p-4 flex items-center flex-col gap-4 font-semibold  pb-5 text-sm ">
                  <GrServices className=" text-lg" />
                  <span className="">Solicitar um serviço </span>
                </li>
              </ul>
              <div className="text mt-4 p-3 flex flex-col gap-4">
                <h1 className="text-3xl font-bold ">
                  Seja seu próprio patrão e lucre mais
                </h1>
                <p className="text-sm">Aumente sua renda atravez da nossa plataforma</p>

                <button className="w-full max-w-[220px] p-2 rounded-md bg-[#1d162c] text-white text-sm mt-4">Cadastre-se como profissional</button>
              
                <a href="#" className="text-sm font-bold text-[#071d11] mt-4 flex items-center gap-2"> <BsFillInfoCircleFill/> <span>Saiba mais</span></a>
              
              </div>
            </div>
          </div>
          <img
            src={Banner}
            alt="banner"
            className="w-full h-full opacity-50 absolute top-0 z-10 object-cover"
          />
        </section>
      </header>
    </div>
  );
};

export default Home;
