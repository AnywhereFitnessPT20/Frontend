import './App.css';
import Login from './components/Login';
import AddClass from './components/AddClass';
import Home from './components/Home';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/"><Home/></Route>
      <Route exact path="/Home"><Home/></Route>
      <Route exact path="/Login"><Login/></Route>
      <Route exact path="/AddClass"><AddClass/></Route>
    </div>
  );
}

export default App;
