import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Basics/Header';
import Dashboard from './Components/Basics/Dashboard/Design';
import Footer from './Components/Basics/Footers';
import Income from "./Components/Basics/Edit/IncomeEdit";
import Expense from "./Components/Basics/Edit/ExpenseEdit";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/get-income/:id" element={<Income />} />
        <Route path="/get-expense/:id" element={<Expense />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;