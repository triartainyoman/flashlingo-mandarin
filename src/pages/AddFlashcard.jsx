const AddFlashcard = () => {
  return (
    <>
      <nav className="bg-customPrimary p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/pages/overview.html">
            <img src="/images/icons/logo.svg" alt="Flashlingo Logo" />
          </a>
          <button className="bg-customDanger py-1.5 px-4 rounded-md text-white hover:bg-customDangerHover">
            Logout
          </button>
        </div>
      </nav>

      <main className="container mx-auto p-4 font-poppins text-customBlack">
        <button id="backButton">
          <img
            src="/images/icons/arrow-left.svg"
            alt="Back"
            className="w-6 h-6 mt-6"
          />
        </button>

        <h1 className="text-2xl font-semibold mb-3 mt-3">Create Flashcard</h1>
        <hr className="mb-5 w-full md:max-w-[330px]" />

        <form
          action="/deck-detail"
          method="get"
          className="flex flex-col font-poppins text-base"
        >
          <div>
            <span className="mb-1.5 block">Hanzi</span>
            <input
              type="text"
              name="hanzi"
              placeholder="Enter hanzi"
              autoComplete="off"
              className="input input-bordered w-full px-3 py-4 border border-slate-300 rounded-md mb-6"
            />
          </div>
          <div>
            <span className="mb-1.5 block">Pinyin</span>
            <input
              type="text"
              name="pinyin"
              placeholder="Enter pinyin"
              autoComplete="off"
              className="input input-bordered w-full px-3 py-4 border border-slate-300 rounded-md mb-6"
            />
          </div>
          <div>
            <span className="mb-1.5 block">Translation</span>
            <input
              type="text"
              name="pinyin"
              placeholder="Enter translation"
              autoComplete="off"
              className="input input-bordered w-full px-3 py-4 border border-slate-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full md:max-w-[330px] bg-customPrimary rounded-md py-3 font-semibold text-white mt-9"
          >
            Save
          </button>
        </form>
      </main>
    </>
  );
};

export default AddFlashcard;
