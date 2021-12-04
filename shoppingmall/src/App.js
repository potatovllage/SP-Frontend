import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./components/pages/mainpage/Mainpage";
import Login from "./components/pages/auth/login/Login";
import SignUp from "./components/pages/auth/sign up/SignUp";
import TruckPage from "./components/pages/truckpage/TruckPage";
import Coupon from "./components/pages/coupon/Coupon";
import Benefit from "./components/pages/benefit/Benefit";
import Book from "./components/pages/morepage/book/Book";
import Car from "./components/pages/morepage/car/Car";
import Globon from "./components/pages/morepage/globon/Globon";
import Hotel from "./components/pages/morepage/hotel/Hotel";
import Ticket from "./components/pages/morepage/ticket/Ticket";
import Today from "./components/pages/morepage/today/Today";
import Best from "./components/pages/morepage/best/Best";
import Discount from "./components/pages/morepage/discount/Discount";
import Product from "./components/pages/product/Product";
import Basket from "./components/pages/basket/Basket";
import Mypage from "./components/pages/mypage/Mypage";
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
        <Route element={<Book />} path="/book" />
        <Route element={<Car />} path="/car" />
        <Route element={<Globon />} path="/globon" />
        <Route element={<Hotel />} path="/hotel" />
        <Route element={<Ticket />} path="/ticket" />
        <Route element={<Today />} path="/today" />
        <Route element={<Best />} path="/best" />
        <Route element={<Discount />} path="/discount" />
        <Route element={<TruckPage />} path="/truck" />
        <Route element={<Product />} path="/product" />
        <Route element={<Basket />} path="/basket" />
        <Route element={<Mypage />} path="/mypage" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
