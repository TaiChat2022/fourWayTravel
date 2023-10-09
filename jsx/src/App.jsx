import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Main from './pages/main';
import DetailEndow from './pages/detailEndow';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/trangchu/*" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detailendow" element={<DetailEndow />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;