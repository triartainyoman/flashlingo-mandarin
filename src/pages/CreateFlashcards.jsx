import BackButton from "../components/BackButton";
import Header from "../components/Header";

const CreateFlashcards = () => {
  return (
    <>
      <Header />

      <main className="container mx-auto p-4 font-poppins text-customBlack">
        <BackButton />

        <h1 className="text-2xl font-semibold mb-3 mt-3">TOCFL Level A1</h1>
        <hr className="mb-5 w-full md:max-w-[330px]" />

        <form action="/deck-detail" method="get">
          <div className="grid grid-cols-12 gap-2">
            <div className="md:col-span-6 lg:col-span-4 col-span-12 mb-6 p-4 border border-slate-300 rounded-md w-full">
              <h3 className="text-lg font-medium mb-6 text-center">
                Flashcard 1
              </h3>
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
            </div>

            <div className="md:col-span-6 lg:col-span-4 col-span-12 mb-6 p-4 border border-slate-300 rounded-md">
              <h3 className="text-lg font-medium mb-6 text-center">
                Flashcard 2
              </h3>
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
            </div>

            <div className="md:col-span-6 lg:col-span-4 col-span-12 mb-6 p-4 border border-slate-300 rounded-md">
              <h3 className="text-lg font-medium mb-6 text-center">
                Flashcard 3
              </h3>
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
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary w-full md:max-w-[330px] bg-customPrimary rounded-md py-3 font-semibold text-white mt-9 text-center"
            >
              Save Deck
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default CreateFlashcards;
