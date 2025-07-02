import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import Login from "./pages/login";

import About from "./pages/About";  // Assuming About is needed
import Page404 from './pages/Page404';
import './App.css';
import User from './pages/User';
import Shop from './pages/Shop';
import Stock from './pages/Stock';
import Expenses from './pages/Expenses';
import Credit from './pages/Credit';
import Payments from './pages/Payments';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/User" element={<User />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Stock" element={<Stock />} />
        <Route path="/Expenses" element={<Expenses />} />
        <Route path="/Credit" element={<Credit />} />
        <Route path="/Payments" element={<Payments />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
