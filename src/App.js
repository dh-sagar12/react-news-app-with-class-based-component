import React, { Component } from 'react'
import CategorySet from './components/CategorySet'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
export class App extends Component {


  // https://newsapi.org/v2/top-headlines?category=science&apiKey=68604a28f0d1468795d4f868b28bd4a8&pageSize=15
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <CategorySet />
          <Switch>
            <Route exact path='/business'>
              <News  key={'business'} category={'business'} pageSize={21} apiKey={"268604a8f0d1468795d4f868b28bd4a8"} country={'in'} />
            </Route>
            <Route exact path='/entertainment'>
              <News  key={'entertainment'} category={'entertainment'} pageSize={21} apiKey={"268604a8f0d1468795d4f868b28bd4a8"} country={'in'}/>
            </Route>
            <Route exact path='/'>
              <News key={'general'}  category={'general'} pageSize={21} apiKey={"268604a8f0d1468795d4f868b28bd4a8"} country={'in'} />
            </Route>
            <Route exact path='/health'>
              <News  key={'health'} category={'health'} pageSize={21} apiKey={"268604a8f0d1468795d4f868b28bd4a8"} country={'in'} />
            </Route>
            <Route exact path='/science'>
              <News  key={'science'} category={'science'} pageSize={21} apiKey={"268604a8f0d1468795d4f868b28bd4a8"} country={'in'} />
            </Route>
            <Route exact path='/sports'>
              <News  key={'sports'} category={'sports'} pageSize={21} apiKey={"268604a8f0d1468795d4f868b28bd4a8"} country={'in'} />
            </Route>
            <Route exact path='/technology'>
              <News  key={'technology'} category={'technology'} pageSize={21} apiKey={"268604a8f0d1468795d4f868b28bd4a8"} country={'in'} />
            </Route>

          </Switch>

          <Footer />

        </Router>
      </>
    )
  }
}

export default App

