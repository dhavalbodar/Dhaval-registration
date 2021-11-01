import './App.css';
import Signup from './Sign';
import Login from './Login'
import Home from './Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';




function App() {
  return (
   <>
   <BrowserRouter>
      {/* <Switch> */}
      <Route exact path="/" component={Signup} />
      {/* <Signup/> */}
      {/* </Route> */}
      <Route exact path="/login" component={Login} />
      {/* <Login /> */}
        {/* </Route> */}
        <Route exact path="/home" component={Home} />
      {/* <Home /> */}
      {/* </Route> */}
      {/* </Switch> */}
    </BrowserRouter>
   </>
  );
}

export default App;
