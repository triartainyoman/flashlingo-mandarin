import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Overview from "./pages/Overview";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CreateDeck from "./pages/CreateDeck";
import CreateFlashcards from "./pages/CreateFlashcards";
import DeckDetail from "./pages/DeckDetail";
import AddFlashcard from "./pages/AddFlashcard";
import Practice from "./pages/Practice";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/create-deck" element={<CreateDeck />} />
      <Route path="/create-flashcards" element={<CreateFlashcards />} />
      <Route path="/deck-detail" element={<DeckDetail />} />
      <Route path="/add-flashcard" element={<AddFlashcard />} />
      <Route path="/practice" element={<Practice />} />
      <Route path="/success" element={<Success />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
