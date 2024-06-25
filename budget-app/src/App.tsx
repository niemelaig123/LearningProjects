import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ExpensesPage from './components/pages/ExpensesPage';
import IncomePage from './components/pages/IncomePage';
import SavingsPage from './components/pages/SavingsPage';
import LoginPage from './components/pages/LoginPage';
import LoadingPage from './components/pages/LoadingPage';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/expenses" element={<ExpensesPage />} />
          <Route path="/income" element={<IncomePage />} />
          <Route path="/savings" element={<SavingsPage />} />
        </Routes>
    </Router>
  );
};

export default App;