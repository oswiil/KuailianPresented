/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"

import Button from "./buttonLinks"
import "./layout.css"
import "./styles.css"
import Descript from "./descript"

function Layout({ children }) {
  return (
    <div>
      <Header siteTitle={"Kuailian Registry"} />
      <Descript />
      <Button className="fade" />
      <main className="fade">{children}</main>
    </div>
  )
}
Layout.prototypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
