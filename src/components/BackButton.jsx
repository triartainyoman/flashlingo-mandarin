import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)}>
      <img
        src="images/icons/arrow-left.svg"
        alt="Back"
        className="w-6 h-6 mt-6"
      />
    </button>
  );
};

export default BackButton;
