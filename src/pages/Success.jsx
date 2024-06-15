import { Link } from "react-router-dom";
import Header from "../components/Header";

const Success = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4 font-poppins text-customBlack">
        <div className="w-full flex flex-col justify-center items-center text-center mt-10">
          <img
            src="/images/illustrations/illustration-1.svg"
            alt="Sucess Illustration"
          />
          <h1 className="text-3xl font-semibold mt-5">Practice Complete!</h1>
          <p className="text-customSecondary mt-1 mb-5">
            Great job! You&apos;ve completed your <br />
            flashcard practice session.
          </p>
          <hr className="border w-[100px] mb-5" />
          <p>
            You remembered
            <span className="underline text-customPrimary">13 flashcards!</span>
          </p>
          <p>
            You need to review
            <span className="underline text-customDanger">
              13 flashcards again!
            </span>
          </p>
          <Link
            to="/overview"
            className="btn btn-primary bg-customPrimary rounded-md py-2 px-3 mt-5 font-semibold text-sm text-white"
          >
            Back to Deck
          </Link>
        </div>
      </main>
    </>
  );
};

export default Success;
