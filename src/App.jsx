import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Overview from "./pages/Overview";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/overview" element={<Overview />} />
    </Routes>
  );
}

export default App;
