import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/home'
import Login from '../Login/login'
import Register from '../Register/register'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const RouterView = () => (
  <main>
    <Switch>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/register' component={Register}/>
      {/* Matches rest of urls */}
      <Route path='/' component={Home}/>
    </Switch>
  </main>
)

export default RouterView