import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

export class App extends Component {


  // https://newsapi.org/v2/top-headlines?category=science&apiKey=268604a8f0d1468795d4f868b28bd4a8&pageSize=15
  render() {
    return (
      <>
        <Navbar />
        <News />
      </>
    )
  }
}

export default App

