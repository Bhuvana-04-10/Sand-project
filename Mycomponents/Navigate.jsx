import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;

const App1 = () => {
  const navigate = useNavigate();

  const handleElementClick = () => {
    navigate('/about'); // Navigates to the "About" page
  };

  return (
    <Router>
      <div>
        <h1 onClick={handleElementClick} style={{ cursor: 'pointer' }}>
          Click Me to Go to About Page
        </h1>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App1;