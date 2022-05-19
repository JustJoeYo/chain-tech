import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Dashboard, Logs, Assets, Config } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/config" element={<Config />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
