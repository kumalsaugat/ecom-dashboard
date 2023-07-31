import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import UpdateProduct from "./UpdateProduct";
import AddProduct from "./AddProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/update" element={<UpdateProduct />}></Route>
          <Route path="/add" element={<AddProduct />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;