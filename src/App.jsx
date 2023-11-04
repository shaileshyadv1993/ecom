import "./App.css";
import { Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";
import QuotesDisplay from "./components/Students";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { ToastContainer } from "react-toastify";
import Product from "./pages/Product";
import SecuredRoutes from "./routes/SecuredRoutes";

// Secure Routes

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="" element={<SecuredRoutes />}>
          <Route path="/counter" element={<Counter />} />
          <Route path="/quotes" element={<QuotesDisplay />} />
          <Route path="/products" element={<Product />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
