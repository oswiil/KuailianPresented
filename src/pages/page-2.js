import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Random from "../components/registrylink"

const SecondPage = () => {
  const { ranpath } = Random()
  return (
    <Layout>
      <SEO title="Registro" />
      <div className="header">
        <h1>PAGINA DEL LINK</h1>
      </div>
      <Random>
        {" "}
        <pre>{() => ranpath}</pre>
      </Random>
    </Layout>
  )
}

export default SecondPage
