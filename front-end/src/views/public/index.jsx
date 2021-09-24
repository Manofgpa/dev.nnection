import React from 'react'
import { Router } from '@reach/router'
import { Home } from '../../views/public/Home'
import { LayoutLoginComponent } from '../../components/Login'

export const Public = () => {
  return (
    <LayoutLoginComponent>
      <Router>
        <Home path='/' />
      </Router>
    </LayoutLoginComponent>
  )
}
