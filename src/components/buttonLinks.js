import React from "react"

import { Link } from "gatsby"

const links = [
  {
    label: "home",
    path: "/",
  },
  {
    label: "Registry",
    path: "/page-2",
  },
  {
    label: "Contact",
    path: "/page-3",
  },
]

const Buttons = () => {
  return (
    <div className="Links">
      {links.map(({ path, label }) => (
        <Link to={path} key={path}>
          {label}
        </Link>
      ))}
    </div>
  )
}
export default Buttons
