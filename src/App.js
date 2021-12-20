import './App.css';
import React , {useState} from "react"
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';

function App() {
  const [isOpen , setIsOpen] = useState(true)
  return (
    <Router>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Navbar isOpen={isOpen}  setIsOpen={setIsOpen}/>
    </Router>
  );
}

export default App;
