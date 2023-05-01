import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
    
      <Router>
      <Header />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
