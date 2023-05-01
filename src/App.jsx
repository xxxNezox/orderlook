import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';

import Welcome from './COMPONENTS/Welcome';
import Login from './COMPONENTS/Login';
import Registration from './COMPONENTS/Registration'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' Component={Welcome} />
          <Route path='/login' Component={Login} />
          <Route path='/registration' Component={Registration} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
