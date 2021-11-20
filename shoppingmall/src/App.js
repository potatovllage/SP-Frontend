import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/pages/header/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header></Header>} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
