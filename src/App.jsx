import { findRenderedComponentWithType } from 'react-dom/cjs/react-dom-test-utils.production.min';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <>
    <Route>
      <Navbar />
        <Switch>
        <Route path='/' exact />
        </Switch>
    </Route>
    </>
  );
}

export default App;
