import React from "react"
import Logo from "../assets/logo.svg"
import { Link } from "gatsby"

export default function NotFound() {
  const block = "error"

  return (
    <div className={block}>
      <img src={Logo} alt='LightBite Logo' />

      <h1>Oops, the page you’re looking for doesn’t exist.</h1>

      <Link to='/'>Back to homepage</Link>
    </div>
  )
}
