import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react'
import ScrollToTop from './components/ScrollToTop';

const App = () => {

  const [ProgressState, setProgressState] = useState(0)

  let setProgress = (progress) => {
    setProgressState(progress);
  }


  // https://newsapi.org/v2/top-headlines?category=science&apiKey=68604a28f0d1468795d4f868b28bd4a8&pageSize=15
  // let apiKey = process.env.REACT_APP_NEWS_API
  let apiKey = '81191e7c24d840768fd02e97ff356d87'

  return (
    <>
      <Router>
        <ScrollToTop />
        <LoadingBar color='#f11946' progress={ProgressState} />
        <Navbar />
        <Switch>
          <Route exact path='/business'>
            <News setProgress={setProgress} key={'business'} category={'business'} pageSize={21} apiKey={apiKey} country={'in'} />
          </Route>
          <Route exact path='/entertainment'>
            <News setProgress={setProgress} key={'entertainment'} category={'entertainment'} pageSize={21} apiKey={apiKey} country={'in'} />
          </Route>
          <Route exact path='/'>
            <News setProgress={setProgress} key={'general'} category={'general'} pageSize={21} apiKey={apiKey} country={'in'} />
          </Route>
          <Route exact path='/health'>
            <News setProgress={setProgress} key={'health'} category={'health'} pageSize={21} apiKey={apiKey} country={'in'} />
          </Route>
          <Route exact path='/science'>
            <News setProgress={setProgress} key={'science'} category={'science'} pageSize={21} apiKey={apiKey} country={'in'} />
          </Route>
          <Route exact path='/sports'>
            <News setProgress={setProgress} key={'sports'} category={'sports'} pageSize={21} apiKey={apiKey} country={'in'} />
          </Route>
          <Route exact path='/technology'>
            <News setProgress={setProgress} key={'technology'} category={'technology'} pageSize={21} apiKey={apiKey} country={'in'} />
          </Route>

        </Switch>

        <Footer />

      </Router>
    </>
  )

}

export default App

