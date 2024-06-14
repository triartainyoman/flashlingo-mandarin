const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-blue-500">
        Welcome to Flashlingo
      </h1>
      <p className="text-customSecondary mt-4">
        Learn and practice Mandarin with personalized flashcards.
      </p>
      <a
        href="/signin"
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-8"
      >
        Start Learning
      </a>
    </div>
  );
};

export default Landing;
