import './App.css';
import MainRoutes from './routes';

import axios from 'axios';

axios.defaults.baseURL = 'https://turkmed890.pythonanywhere.com'

function App() {
  return (
    <div className="App">
      <MainRoutes/>
    </div>
  );
}

export default App;
