import React from 'react'
import { Router } from '@reach/router'
import { Public } from '../views/public/'

export const Routers = () => {
  return (
    <>
      <Router>
        <Public path='/*' />
      </Router>
    </>
  )
}
