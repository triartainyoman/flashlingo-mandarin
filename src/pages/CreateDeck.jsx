import BackButton from "../components/BackButton";
import Header from "../components/Header";

const CreateDeck = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4 font-poppins text-customBlack">
        <BackButton />

        <h1 className="text-2xl font-semibold mb-3 mt-3">Create Deck</h1>
        <hr className="mb-5 w-full md:max-w-[330px]" />

        <form
          action="/create-flashcards"
          method="get"
          className="flex flex-col font-poppins text-base"
        >
          <div>
            <span className="mb-1.5 block">Deck Title</span>
            <input
              type="text"
              name="title"
              placeholder="Enter deck title"
              autoComplete="off"
              className="input input-bordered w-full md:max-w-[330px] px-3 py-4 border border-slate-300 rounded-md mb-6"
            />
          </div>
          <div>
            <span className="mb-1.5 block">Total Flashcards</span>
            <input
              type="number"
              name="total"
              placeholder="0"
              min="1"
              autoComplete="off"
              className="input input-bordered w-full md:max-w-[330px] px-3 py-4 border border-slate-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full md:max-w-[330px] bg-customPrimary rounded-md py-3 font-semibold text-white mt-9"
          >
            Continue
          </button>
        </form>
      </main>
    </>
  );
};

export default CreateDeck;
