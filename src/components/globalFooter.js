import React from "react"
import { Link } from "gatsby"

const globalFooter = React.forwardRef((props, ref) => {
  const block = "globalFooter"

  return (
    <footer className={`${block}`}>
      <p>
        Made with{" "}
        <span role='img' aria-label='heart'>
          ❤️
        </span>{" "}
        in Israel
      </p>
      <p>
        <Link to='/about'>About us</Link>
        {" // "}
        <Link to='/privacy'>Privacy Policy</Link>
      </p>
      <p>
        Questions? Reach out:{" "}
        <a href='mailto:hello@turbo.menu'>hello@turbo.menu</a>
      </p>
    </footer>
  )
})

export default globalFooter
