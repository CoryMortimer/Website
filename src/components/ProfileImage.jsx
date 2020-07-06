import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import { makeStyles } from '@material-ui/core/Styles'

const useStyles = makeStyles((theme) => ({
  imageStyle: {
    borderRadius: '50%',
    border: `solid ${theme.palette.background.default} 4px`,
  },
}))

const ProfileImage = () => {
  const { imageStyle } = useStyles()

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 168, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img className={imageStyle} fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default ProfileImage
