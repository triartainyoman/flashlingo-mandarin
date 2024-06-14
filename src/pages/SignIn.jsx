import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";

const SignIn = () => {
  return (
    <div className="p-8">
      <BackButton />

      <h1 className="text-2xl font-poppins font-semibold text-center text-customBlack mt-16 mb-16">
        Sign in to Your Account
      </h1>

      <form
        className="flex flex-col font-poppins text-base"
        action="/overview"
        method="GET"
      >
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          autoComplete="off"
          className="input input-bordered min-w-[330px] px-3 py-4 border border-slate-300 rounded-md mb-6 mx-auto"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          autoComplete="off"
          className="input input-bordered min-w-[330px] px-3 py-4 border border-slate-300 rounded-md mx-auto"
        />

        <button
          type="submit"
          className="btn btn-primary max-w-[330px] mx-auto bg-customPrimary rounded-md py-3 font-semibold text-white w-full mt-9"
        >
          Sign In
        </button>
      </form>

      <p className="font-poppins text-base text-center mt-[100px]">
        Don&apos;t have an account?
        <Link to="/signup" className="text-customPrimary underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
