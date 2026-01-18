import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import AppRoutes from './components/AppRoutes';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="app">
        <h1>React on Rails Blog</h1>
        <p>Pind this application layout in client/src/App.jsx</p>
        <NavBar />
        <AppRoutes />

      </div>
    </Router>
  )
}

export default App
