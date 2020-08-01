import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import Grid from '../../components/Grid'
import SEO from '../../components/seo'
import ProfileHeader from '../../components/ProfileHeader'
import NavigationTabs from '../../components/NavigationTabs'

const useStyles = makeStyles({
  media: {
    height: 140,
  },
  styledLink: {
    textDecoration: 'none',
  },
})

const Index = ({ data }) => {
  const { media, styledLink } = useStyles()
  const blogPosts = data.allFile.edges

  return (
    <>
      <SEO title="Blog" />
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12}><ProfileHeader title="Blog" /></Grid>
          <Grid item xs={12}>
            <NavigationTabs />

            <Grid container spacing={2}>
              {blogPosts.map(({ node: { relativePath, childMdx: { id, frontmatter: { image, subtitle, title, date }}}}) => {
                return (
                  <Grid key={id} item sm={6} xs={12}>
                    <Link className={styledLink} to={`/blog/${relativePath.split('.')[0]}/`}>
                      <Card>
                        <CardActionArea>
                          <CardMedia
                            title="Blog image"
                          >
                            <Img fluid={image.childImageSharp.fluid} className={media} />
                          </CardMedia>
                          <CardContent>
                            <Typography variant="h5" component="h2">
                              {title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" paragraph>
                              {date}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="p">
                              {subtitle}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Link>
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Index

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "blogPosts"}}, sort: {fields: childMdx___frontmatter___date, order: ASC}) {
      edges {
        node {
          childMdx {
            id
            frontmatter {
              subtitle
              title
              date
              image {
                childImageSharp {
                  fluid(maxWidth: 640) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          relativePath
        }
      }
    }
  }
`
