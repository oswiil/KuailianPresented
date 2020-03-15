import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import "aos/dist/aos.css"

export const query = graphql`
  {
    allBlogPost {
      nodes {
        id
        date
        title
        body
      }
    }
  }
`
export default ({ data }) => (
  <>
    <Layout>
      {data.allBlogPost.nodes.map(post => (
        <div
          key={post.id}
          style={{
            marginTop: "10%",
          }}
        >
          <div
            dangerouslySetInnerHTML={{ __html: post.body }}
            style={{
              marginTop: "10%",
              maxWidth: "65%",
              color: "white",
              margin: "0 auto",
              textAlign: "justify",
            }}
          />
        </div>
      ))}
    </Layout>
  </>
)
