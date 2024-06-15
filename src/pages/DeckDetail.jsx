import Header from "../components/Header";
import BackButton from "../components/BackButton";
import { Link } from "react-router-dom";

const DeckDetail = () => {
  return (
    <>
      <Header />

      <main className="container mx-auto p-4 font-poppins text-customBlack">
        <BackButton />

        <h1 className="text-2xl font-semibold mb-3 mt-3">TOCFL Level A1</h1>
        <h2 className="text-base text-customSecondary">
          Learned 13 of 20 cards
        </h2>
        <div className="mt-8 mb-5 flex justify-between items-center w-full md:max-w-[500px]">
          <a
            href="#"
            className="bg-customDanger py-1.5 px-4 rounded-md text-white hover:bg-customDangerHover"
          >
            Delete Deck
          </a>
          <div>
            <Link
              to="/add-flashcard"
              className="bg-customPrimary py-1.5 px-4 rounded-md text-white hover:bg-customPrimaryHover"
            >
              Add Card
            </Link>
            <Link
              to="/practice"
              className="bg-customSuccess py-1.5 px-4 rounded-md text-white hover:bg-customSuccessHover ml-2.5"
            >
              Practice
            </Link>
          </div>
        </div>

        <hr className="mb-5 w-full md:max-w-[500px]" />

        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 mb-5">
          <div className="col-span-2 p-5 rounded-md bg-white shadow-md border">
            <h1 className="text-2xl font-semibold font-noto mb-2">你好</h1>
            <p className="text-customSecondary text-base mb-1">Nǐ hǎo</p>
            <p className="text-customSecondary text-base">Hello</p>
            <div className="flex justify-between items-center w-full mt-5">
              <span className="bg-customPrimary text-white py-1.5 px-4 rounded-full text-xs">
                Learned
              </span>
              <a href="#">
                <img src="/images/icons/more-vertical.svg" alt="More icon" />
              </a>
            </div>
          </div>

          <div className="col-span-2 p-5 rounded-md bg-white shadow-md border">
            <h1 className="text-2xl font-semibold font-noto mb-2">你好</h1>
            <p className="text-customSecondary text-base mb-1">Nǐ hǎo</p>
            <p className="text-customSecondary text-base">Hello</p>
            <div className="flex justify-between items-center w-full mt-5">
              <span className="bg-customDanger text-white py-1.5 px-4 rounded-full text-xs">
                Need Review
              </span>
              <a href="#">
                <img src="/images/icons/more-vertical.svg" alt="More icon" />
              </a>
            </div>
          </div>

          <div className="col-span-2 p-5 rounded-md bg-white shadow-md border">
            <h1 className="text-2xl font-semibold font-noto mb-2">你好</h1>
            <p className="text-customSecondary text-base mb-1">Nǐ hǎo</p>
            <p className="text-customSecondary text-base">Hello</p>
            <div className="flex justify-between items-center w-full mt-5">
              <span className="bg-customPrimary text-white py-1.5 px-4 rounded-full text-xs">
                Learned
              </span>
              <a href="#">
                <img src="/images/icons/more-vertical.svg" alt="More icon" />
              </a>
            </div>
          </div>

          <div className="col-span-2 p-5 rounded-md bg-white shadow-md border">
            <h1 className="text-2xl font-semibold font-noto mb-2">你好</h1>
            <p className="text-customSecondary text-base mb-1">Nǐ hǎo</p>
            <p className="text-customSecondary text-base">Hello</p>
            <div className="flex justify-between items-center w-full mt-5">
              <span className="bg-customPrimary text-white py-1.5 px-4 rounded-full text-xs">
                Learned
              </span>
              <a href="#">
                <img src="/images/icons/more-vertical.svg" alt="More icon" />
              </a>
            </div>
          </div>

          <div className="col-span-2 p-5 rounded-md bg-white shadow-md border">
            <h1 className="text-2xl font-semibold font-noto mb-2">你好</h1>
            <p className="text-customSecondary text-base mb-1">Nǐ hǎo</p>
            <p className="text-customSecondary text-base">Hello</p>
            <div className="flex justify-between items-center w-full mt-5">
              <span className="bg-customDanger text-white py-1.5 px-4 rounded-full text-xs">
                Need Review
              </span>
              <a href="#">
                <img src="/images/icons/more-vertical.svg" alt="More icon" />
              </a>
            </div>
          </div>

          <div className="col-span-2 p-5 rounded-md bg-white shadow-md border">
            <h1 className="text-2xl font-semibold font-noto mb-2">你好</h1>
            <p className="text-customSecondary text-base mb-1">Nǐ hǎo</p>
            <p className="text-customSecondary text-base">Hello</p>
            <div className="flex justify-between items-center w-full mt-5">
              <span className="bg-customPrimary text-white py-1.5 px-4 rounded-full text-xs">
                Learned
              </span>
              <a href="#">
                <img src="/images/icons/more-vertical.svg" alt="More icon" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DeckDetail;
