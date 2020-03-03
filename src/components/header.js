import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    className="header"
    style={{
      marginBottom: `0.90rem`,

      borderBottom: "0.1px solid  rgba(34, 58, 80 ",
    }}
  >
    <div
      style={{
        maxWidth: "50%",
        float: "left",
        margin: "2%",
      }}
    >
      <img src="/download.png" alt="Logokuailian" />
    </div>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 380,
        padding: `1.45rem 1rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
