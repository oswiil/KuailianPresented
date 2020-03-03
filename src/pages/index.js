import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import AOS from "aos"
import "aos/dist/aos.css"
AOS.init({ offset: 100 })
export const query = graphql`
  {
    allBlogPost {
      nodes {
        id
        title
        body
      }
    }
  }
`

export default ({ data }) => (
  <>
    <Layout>
      <div data-aos="fade-right">
        <img
          style={{
            maxWidth: "20%",
            float: "left",
          }}
          src="/Captura.png"
          alt="hand1"
        />
      </div>
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
      <div data-aos="fade-left">
        <img
          style={{
            maxWidth: "20%",
            float: "right",
            marginBot: "",
          }}
          src="/Captura1.png"
          alt="hand2"
        />
      </div>

      <iframe
        className="video"
        src="https://www.youtube.com/embed/uQAhNiPjujU?autoplay=1"
      ></iframe>
    </Layout>
  </>
)
