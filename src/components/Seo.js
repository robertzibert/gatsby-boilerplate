import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

/**
 * An adaptation of gatsby SEO component.
 *
 * See: https://www.gatsbyjs.com/tutorial/seo-and-social-sharing-cards-tutorial/
 */
const SEO = ({ title, description, url, image }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(query)

  const seo = {
    title: title || siteMetadata.title,
    description: description || siteMetadata.description,
    url: url || siteMetadata.url,
    image: `${url}${image || siteMetadata.image}`,
  }
  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content={"website"} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <link rel="canonical" href={seo.url} />
      <html lang="es" amp />
    </Helmet>
  )
}
const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        url
        image
      }
    }
  }
`

export default SEO
