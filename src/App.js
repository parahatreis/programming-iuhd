import React from 'react';
import './styles/App.scss';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
// COMPONENTS
import Home from './components/layouts/Home';
import About from './components/layouts/About';
import LecturePage from './components/LecturePage';
// Context
import LectureState from './context/LectureState';

function App() {
  return (
     <LectureState>
      <Router>
         <Switch >
            <Route exact path='/' component={Home}  />
            <Route exact path='/about' component={About} />
            <Route exact path='/lecture/:id' component={LecturePage} />
         </Switch>
      </Router>
    </LectureState>
  );
}

export default App;
