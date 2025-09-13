import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/1-Home';
import CustomCursor from './components/CustomCursor';
import './App.scss';



function App() {
  return (
    <Router>
      <CustomCursor />
      <div className="min-h-screen relative overflow-hidden">
        <div className="relative z-10">
          <main className="max-w-6xl mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
