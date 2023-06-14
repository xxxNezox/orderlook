import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';

import Welcome from './COMPONENTS/Welcome';
import Login from './COMPONENTS/Login';
import Registration from './COMPONENTS/Registration'
import Main from './COMPONENTS/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' Component={Welcome} />
          <Route path='/login' Component={Login} />
          <Route path='/registration' Component={Registration} />
          <Route path='/main/*' Component={Main} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
