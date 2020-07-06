import React from 'react'
import Grid from '@material-ui/core/Grid'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import ProfileCard from './ProfileCard'

const ProfileCards = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {sourceInstanceName: {eq: "profileData"}}, sort: {fields: childMdx___frontmatter___startDate, order: DESC}) {
        edges {
          node {
            childMdx {
              id
              frontmatter {
                title
                startDate(formatString: "MMMM YYYY")
                endDate(formatString: "MMMM YYYY")
              }
              body
            }
          }
        }
      }
    }
  `)

  return (
    <Grid container spacing={2}>
      {data.allFile.edges.map(
        ({node: { childMdx: { id, body, frontmatter: { title, startDate, endDate }}}}) => {
          return (
            <Grid item xs={12} key={id}>
              <ProfileCard subheader={`${startDate} - ${endDate || 'present'}`} title={title}>
                <MDXRenderer>{body}</MDXRenderer>
              </ProfileCard>
            </Grid>
          )
        }
      )}
    </Grid>
  )
}

export default ProfileCards
