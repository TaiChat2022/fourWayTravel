import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import Main from './pages/main'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/trangchu/*" element={<Main />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;