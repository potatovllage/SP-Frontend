import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./components/pages/mainpage/Mainpage";
import Login from "./components/pages/auth/login/Login";
import SignUp from "./components/pages/auth/sign up/SignUp";
import TruckPage from "./components/pages/truckpage/TruckPage";
import Coupon from "./components/pages/coupon/Coupon";
import Benefit from "./components/pages/benefit/Benefit";
import List from "./components/pages/list/List";
import Product from "./components/pages/product/Product";
import Basket from "./components/pages/basket/Basket";
import Mypage from "./components/pages/mypage/Mypage";
import AddProduct from "./components/pages/addproduct/AddProduct";
import Footer from "./components/pages/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Mainpage />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<SignUp />} path="/signUp" />
        <Route element={<Coupon />} path="/coupon" />
        <Route element={<Benefit />} path="/benefit" />
        <Route element={<List />} path="/list/:listname" />
        <Route element={<TruckPage />} path="/truck" />
        <Route element={<Product />} path="/product" />
        <Route element={<Basket />} path="/basket" />
        <Route element={<Mypage />} path="/mypage" />
        <Route element={<AddProduct />} path="/addProduct" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
