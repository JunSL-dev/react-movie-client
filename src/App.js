import React, { Component, Fragment } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import MainContainer from './components/container/mainContainer'
import Detail from './components/Detail'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Route path={"/"} exact component={MainContainer}/>
          <Route path={"/detail/:movieId"} component={Detail}/>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
