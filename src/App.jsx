import "./App.css";
import { Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";
import QuotesDisplay from "./components/Students";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/quotes" element={<QuotesDisplay />} />
        <Route path="/" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
