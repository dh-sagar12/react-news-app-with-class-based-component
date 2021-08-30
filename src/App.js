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
import LoadingBar from 'react-top-loading-bar';
export class App extends Component {
  state = {
    progress: 0
  }

  setProgress =(progress)=>{
    this.setState({
      progress: progress
    })
  }


  // https://newsapi.org/v2/top-headlines?category=science&apiKey=68604a28f0d1468795d4f868b28bd4a8&pageSize=15
  apiKey = process.env.REACT_APP_NEWS_API
  render() {
 
    return (
      <>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
          <Navbar />
          <CategorySet />
          <Switch>
            <Route exact path='/business'>
              <News setProgress= {this.setProgress}   key={'business'} category={'business'} pageSize={21} apiKey={this.apiKey} country={'in'} />
            </Route>
            <Route exact path='/entertainment'>
              <News setProgress= {this.setProgress}   key={'entertainment'} category={'entertainment'} pageSize={21} apiKey={this.apiKey} country={'in'}/>
            </Route>
            <Route exact path='/'>
              <News setProgress= {this.setProgress}  key={'general'}  category={'general'} pageSize={21} apiKey={this.apiKey} country={'in'} />
            </Route>
            <Route exact path='/health'>
              <News setProgress= {this.setProgress}   key={'health'} category={'health'} pageSize={21} apiKey={this.apiKey} country={'in'} />
            </Route>
            <Route exact path='/science'>
              <News setProgress= {this.setProgress}   key={'science'} category={'science'} pageSize={21} apiKey={this.apiKey} country={'in'} />
            </Route>
            <Route exact path='/sports'>
              <News setProgress= {this.setProgress}   key={'sports'} category={'sports'} pageSize={21} apiKey={this.apiKey} country={'in'} />
            </Route>
            <Route exact path='/technology'>
              <News setProgress= {this.setProgress}   key={'technology'} category={'technology'} pageSize={21} apiKey={this.apiKey} country={'in'} />
            </Route>

          </Switch>

          <Footer />

        </Router>
      </>
    )
  }
}

export default App

