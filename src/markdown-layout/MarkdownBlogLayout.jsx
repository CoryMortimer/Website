import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Img from 'gatsby-image/withIEPolyfill'
import { Link, graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

import Grid from '../components/Grid'
import SEO from '../components/seo'
import ProfileHeader from '../components/ProfileHeader'
import data from './data'

const useStyles = makeStyles((theme) => ({
  imgStyles: {
    height: 350,
  },
  styledLink: {
    color: theme.palette.secondary.main,
    position: 'absolute',
    top: 360,
  },
}))

const MarkdownBlogLayout = ({
  data: {
    mdx: { body, frontmatter: { image, date, title }},
    site: { siteMetadata: { siteUrl }}
  },
  location: { pathname },
}) => {
  const { imgStyles, styledLink } = useStyles()

  const disqusConfig = {
    url: `${siteUrl}${pathname}`,
  }

  return (
    <>
      <SEO title={title} />
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ProfileHeader
              title={title}
              image={<Img className={imgStyles} fluid={image.childImageSharp.fluid} />}
            />
            <Typography align="center" variant="subtitle1">Cory Mortimer Martin | {date}</Typography>
            <Link className={styledLink} to='/blog/'>{'< Back to blog'}</Link>
          </Grid>
          <Grid item xs={12}>
            <Container maxWidth="sm">
              <MDXProvider
                components={{
                  ...data,
                  p: (props) => <Typography paragraph variant="body1" {...props} />,
                }}
              >
                <MDXRenderer>{body}</MDXRenderer>
              </MDXProvider>
            </Container>
          </Grid>
          <Grid item xs={12}>
            <CommentCount config={disqusConfig} />
            <Disqus config={disqusConfig} />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default MarkdownBlogLayout

export const query = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
        image {
          childImageSharp {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
