import { Link } from "react-router-dom";
import Header from "../components/Header";

const Practice = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4 font-poppins text-customBlack">
        <div className="flex gap-4 justify-center items-center mt-5">
          <button id="closeButton">
            <img
              src="/images/icons/close.svg"
              alt="Close"
              className="w-6 h-6"
            />
          </button>
          <div className="w-[250px] md:w-[300px] h-2.5 bg-customSecondary rounded-full">
            <div className="w-1/2 h-full bg-customPrimary rounded-full"></div>
          </div>
          <p>13/20</p>
        </div>

        {/* <!-- Detail Hided --> */}
        <div
          id="detailHided"
          className="border border-customPrimary w-[250px] h-[400px] md:w-[300px] md:h-[500px] mt-10 mx-auto rounded-md shadow-custom-glow relative"
        >
          <div className="text-center w-full h-full flex flex-col justify-center items-center">
            <h1 className="text-7xl font-noto">喜歡</h1>
          </div>
          <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2">
            <button className="btn btn-primary bg-customPrimary rounded-md py-2 px-3 font-semibold text-sm text-white">
              View Detail
            </button>
          </div>
        </div>

        {/* <!-- Detail Open --> */}
        {/* <div
        id="detailHided"
        className="border border-customPrimary w-[250px] h-[400px] md:w-[300px] md:h-[500px] mt-10 mx-auto rounded-md shadow-custom-glow relative"
      >
        <div
          className="text-center w-full h-full flex flex-col justify-center items-center"
        >
          <h1 className="text-7xl font-noto">喜歡</h1>
          <p className="text-lg text-customSecondary mt-5">xǐhuān</p>
          <p className="text-lg text-customSecondary mt-2">To like</p>
        </div>
        <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2">
          <button
            className="btn btn-primary bg-customPrimary rounded-md py-2 px-3 font-semibold text-sm text-white"
          >
            Hide Detail
          </button>
        </div>
      </div>  */}

        <div className="flex justify-center items-center mt-10">
          <a
            href="#"
            className="w-[60px] h-[60px] bg-customDanger rounded-full flex justify-center items-center"
          >
            <img src="/images/icons/close-white.svg" alt="Forgot Button" />
          </a>
          <Link
            to="/success"
            id="rememberButton"
            className="w-[60px] h-[60px] bg-customSuccess rounded-full flex justify-center items-center ml-6"
          >
            <img src="/images/icons/check.svg" alt="Remember Button" />
          </Link>
        </div>
      </main>
    </>
  );
};

export default Practice;
