import { Link } from "react-router-dom";
import Header from "../components/Header";

const Overview = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4 font-poppins text-customBlack">
        <h1 className="text-3xl font-bold mb-2 mt-5">Hi, Triarta</h1>
        <p className="text-base mb-4 text-customSecondary">
          pick a deck to start practice
        </p>
        <div className="md:flex lg:flex justify-between items-center mb-5 w-full">
          <Link
            to="/create-deck"
            className="hidden md:block lg:block bg-customPrimary py-3 px-4 rounded-md text-white hover:bg-customPrimaryHover"
          >
            Create New Deck
          </Link>
          <div className="relative min-w-[330px]">
            <button type="button" className="absolute my-3.5 ml-3.5">
              <img src="/images/icons/search.svg" alt="Search Icon" />
            </button>
            <input
              type="text"
              placeholder="Find your deck"
              className="w-full ps-11 py-3 pe-3 px-4 bg-[#F3F3F3] rounded-md border focus:outline-none focus:ring-2 focus:ring-customPrimary max-w-md"
            />
          </div>
        </div>
        <h2 className="text-xl font-medium mb-2.5">Your Decks</h2>
        <div className="grid grid-cols-12 gap-2">
          <div className="md:col-span-6 lg:col-span-4 col-span-12">
            <Link to="/deck-detail">
              <div className="p-4 shadow-md rounded-md mb-5 w-full md:max-w-[400px] lg:max-w-[400px]">
                <h2 className="text-lg font-medium mb-1.5">TOCFL Level A1</h2>
                <div className="flex flex-wrap gap-2.5 mb-3 font-noto text-customSecondary">
                  <span>你好,</span>
                  <span>喜歡,</span>
                  <span>可愛,</span>
                  <span>漂亮,</span>
                  <span>工人,</span>
                  <span>學生,</span>
                  <span>...</span>
                </div>
                <div className="flex gap-4 justify-between items-center">
                  <div className="w-full h-2 bg-customSecondary rounded-full">
                    <div className="w-1/2 h-full bg-customPrimary rounded-full"></div>
                  </div>
                  <p>13/20</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="md:col-span-6 lg:col-span-4 col-span-12">
            <Link to="/deck-detail">
              <div className="p-4 shadow-md rounded-md mb-5 w-full md:max-w-[400px] lg:max-w-[400px]">
                <h2 className="text-lg font-medium mb-1.5">TOCFL Level A2</h2>
                <div className="flex flex-wrap gap-2.5 mb-3 font-noto text-customSecondary">
                  <span>你好,</span>
                  <span>喜歡,</span>
                  <span>可愛,</span>
                  <span>漂亮,</span>
                  <span>工人,</span>
                  <span>學生,</span>
                  <span>...</span>
                </div>
                <div className="flex gap-4 justify-between items-center">
                  <div className="w-full h-2 bg-customSecondary rounded-full">
                    <div className="w-1/2 h-full bg-customPrimary rounded-full"></div>
                  </div>
                  <p>13/20</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="md:col-span-6 lg:col-span-4 col-span-12">
            <Link to="/deck-detail">
              <div className="p-4 shadow-md rounded-md mb-5 w-full md:max-w-[400px] lg:max-w-[400px]">
                <h2 className="text-lg font-medium mb-1.5">TOCFL Level B1</h2>
                <div className="flex flex-wrap gap-2.5 mb-3 font-noto text-customSecondary">
                  <span>你好,</span>
                  <span>喜歡,</span>
                  <span>可愛,</span>
                  <span>漂亮,</span>
                  <span>工人,</span>
                  <span>學生,</span>
                  <span>...</span>
                </div>
                <div className="flex gap-4 justify-between items-center">
                  <div className="w-full h-2 bg-customSecondary rounded-full">
                    <div className="w-1/2 h-full bg-customPrimary rounded-full"></div>
                  </div>
                  <p>13/20</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="md:col-span-6 lg:col-span-4 col-span-12">
            <Link to="/deck-detail">
              <div className="p-4 shadow-md rounded-md mb-5 w-full md:max-w-[400px] lg:max-w-[400px]">
                <h2 className="text-lg font-medium mb-1.5">TOCFL Level B2</h2>
                <div className="flex flex-wrap gap-2.5 mb-3 font-noto text-customSecondary">
                  <span>你好,</span>
                  <span>喜歡,</span>
                  <span>可愛,</span>
                  <span>漂亮,</span>
                  <span>工人,</span>
                  <span>學生,</span>
                  <span>...</span>
                </div>
                <div className="flex gap-4 justify-between items-center">
                  <div className="w-full h-2 bg-customSecondary rounded-full">
                    <div className="w-1/2 h-full bg-customPrimary rounded-full"></div>
                  </div>
                  <p>13/20</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <Link
          to="/create-deck"
          className="sm:block xs:block md:hidden lg:hidden fixed bottom-10 right-5 bg-customPrimary py-5 px-5 rounded-full text-white hover:bg-customPrimaryHover"
        >
          <img src="/images/icons/plus.svg" alt="Add icon" />
        </Link>
      </main>
    </>
  );
};

export default Overview;
