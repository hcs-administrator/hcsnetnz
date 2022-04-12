import React from 'react'
import { Link } from 'react-router-dom'

export const Test = () => {
  return (
    <>
    <div>Test</div>
    <Link to="/staffphotos">Go to Staff Photos</Link>
    <br/>
    <Link to="/">Go to Home</Link>
    </>
  )
}
