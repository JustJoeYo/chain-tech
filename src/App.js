import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Dashboard from './pages/Dashboard.jsx';
//import Logs from './pages/Logs.jsx';
//import Assets from './pages/Assets.jsx';
import Config from './pages/Config.jsx';

//<Route path="/logs" element={<Logs />} />
//<Route path="/assets" element={<Assets />} />

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/config" element={<Config />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
