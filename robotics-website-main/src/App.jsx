import { Home } from "./pages/Home";
import { UserProvider } from "./lib/context/user";
import { Login } from "./pages/Login";
import SignupPage from "./pages/SignupPage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import Header from "./layout/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Routes, Route } from "react-router-dom";

function App() {
  const isLoginPage = window.location.pathname === "/login" || window.location.pathname === "/signup";

  return (
    <div className="App">
      <UserProvider>
        <ScrollToTop />
        {!isLoginPage && <Header />}
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/category/:name" element={<CategoryPage />} />
            <Route path="/product/:slug" element={<ProductPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </main>

        {!isLoginPage && <Footer />}
      </UserProvider>
    </div>
  );
}

export default App;