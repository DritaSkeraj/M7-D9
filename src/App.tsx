import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import FuncHeader from './components/FuncHeader'
import DetailComponent from './components/DetailComponent'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header title="Main Title!!" subTitle="this one" />
          <Header title="Another Main Title!!" />
          <FuncHeader title="Functional Title" />
          <Route
            path="detail"
            exact
            render={(props) => <DetailComponent {...props} title="hello" data={{ strive: 'school' }} />}
          />
        </header>
      </div>
    </Router>
  )
}

export default App
