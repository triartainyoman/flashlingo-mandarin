import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-customPrimary shadow-md">
      <div className="container mx-auto p-4  flex justify-between items-center">
        <Link to="/overview">
          <img src="/images/icons/logo.svg" alt="Flashlingo Logo" />
        </Link>
        <Link
          to="/"
          className="bg-customDanger py-1.5 px-4 rounded-md text-white hover:bg-customDangerHover"
        >
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Header;
