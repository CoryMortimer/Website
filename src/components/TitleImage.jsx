import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

const TitleImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "title-picture.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 940, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img objectFit="cover" style={{ height: 350 }} fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default TitleImage
