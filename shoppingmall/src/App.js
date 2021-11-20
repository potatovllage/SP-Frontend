import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/pages/header/Header";
import Mainpage from "./components/pages/mainpage/Mainpage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Mainpage></Mainpage>} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
