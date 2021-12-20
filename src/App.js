import './App.css';
import React , {useState} from "react"
import Navbar from './components/Navbar';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import hero_photo from './assets/hero_photo.jpg'
import Main from './static/Main';
function App() {
  const [isOpen , setIsOpen] = useState(true)
  return (
    <>
    <Router>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Navbar isOpen={isOpen}  setIsOpen={setIsOpen}/>
      <Switch>
        <Route path="/apply">
          <Main/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
