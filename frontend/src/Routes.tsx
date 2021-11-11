import React from 'react'
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import Footer from './components/Footer'
import Character from './pages/Character'
import Characters from './pages/Characters'
import Team from './pages/Team'


export default function Routes() {

  return (
    <BrowserRouter>      
      <Switch>
        <Route exact path="/">
          <Characters />
        </Route>

        <Route path="/character/:id/comics">
          <Character />
        </Route>

        <Route path="/team">
          <Team />
        </Route>

        <Redirect from="*" to="/" />
      </Switch>

      <Footer />
    </BrowserRouter>
  )
}
