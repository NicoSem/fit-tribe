import { BrowserRouter, Routes, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import HomePage from './pages/home/HomePage.js';
import NotFoundPage from './pages/notfound/NotFoundPage.js';
import NewWorkoutPage from './pages/workout/NewWorkoutPage.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
