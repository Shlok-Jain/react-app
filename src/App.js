import './App.css';
import { Calculator } from './Components/Calculator';
import { Home } from './Components/Home';
import { About } from './Components/About';
import {Navbar} from './Components/Navbar'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';
import { Footer } from './Components/Footer';

function App() {
  const [progress, setProgress] = useState(0);
  const changeProgress = ()=>{
    setProgress(70);
    setTimeout(() => {
      setProgress(100)
    }, 50);
  }

  return (
    <Router>
        <LoadingBar
              color='#ff0000'
              progress={progress}
              onLoaderFinished={() => setProgress(0)}
            />
          <Navbar changeProgress={changeProgress}/>
        <Switch>
          <Route exact path="/" >
              <Home/>
          </Route>
          <Route exact path="/calculator">
              <Calculator />
          </Route>
          <Route exact path="/about">
              <About/>
          </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
