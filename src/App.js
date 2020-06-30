import React from "react"
import "./App.css"
import HomePage from "./pages/homepage/hompage.component"
import ShopPage from "./pages/shop/shop.component"
import Header from "./components/header/header.component"

import { Switch, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shops" component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App
