import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-9xl font-bold text-gray-800">404</h1>
      <h2 className="text-3xl font-semibold text-gray-600 mt-4">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-500 mt-2">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
