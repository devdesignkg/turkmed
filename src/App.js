import './App.css';
import { Components } from './components';
import MainRoutes from './routes';

import axios from 'axios';

axios.defaults.baseURL = 'https://turkmedapi.pythonanywhere.com'

function App() {
  const width = window.innerWidth
  return (
    <div className="App">
      <Components.NavbarTop />
      <Components.NavbarDown />
      {width <= 500 && <div style={{height: '100px'}}></div>}
      <MainRoutes/>
      <Components.Footer/>
    </div>
  );
}

export default App;
