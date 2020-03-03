import { useStaticQuery, graphql } from "gatsby"

const useSiteInfo = () => {
  const data = useStaticQuery(graphql`
    {
      staticYaml(title: { eq: "contact" }) {
        siteTitle
        title
      }
    }
  `)
  return data.staticYaml
}

export default useSiteInfo
