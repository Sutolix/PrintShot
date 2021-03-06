import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import PrintShot from './pages/PrintShot'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={PrintShot} />
      </Switch>
    </BrowserRouter>
  )
}