import logo from './logo.svg';
import './App.css';
import Products from './Components/Products';
import Users from './Components/Users';
import CreateProduct from './Components/CreateProduct';
import Registration from './Components/Registration';
import Authorization from "./Components/Authorization";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Authorization/>
          <Products />
          <Users/>
          <Registration />
          <CreateProduct/>
      </header>
    </div>
  );
}

export default App;
