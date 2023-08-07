import './App.css';
import { Components } from './components';
import MainRoutes from './routes';

import axios from 'axios';

axios.defaults.baseURL = 'https://turkmed890.pythonanywhere.com'

function App() {
  return (
    <div className="App">
      <Components.NavbarTop />
      <Components.NavbarDown />
      <MainRoutes/>
      <Components.Footer/>
    </div>
  );
}

export default App;
