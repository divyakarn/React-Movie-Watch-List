import React, { Component, Fragment } from 'react';
import {Routes,Route} from 'react-router-dom'
import Homepage from './Components/Homepage';
import Navigation from './Components/Navigation';
import Joke from './Components/Joke/joke';
import Series from './Components/Series/Series';
import StoredSeries from './Components/Series/StoredSeries'
 class App extends Component {
  render() {
    return (
       <Fragment>
       <Navigation/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/joke' element={<Joke/>}/>
          <Route path='/search' element={<Series/>}/>
          <Route path='/show' element={<StoredSeries/>}/>

          
        </Routes>
       </Fragment>
     
    
    )
  }
}
export default App;
