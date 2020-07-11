import React from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import Grid from '../components/Grid'
import SEO from '../components/seo'
import ProfileHeader from '../components/ProfileHeader'
import ProfileCards from '../components/ProfileCards'
import AboutCard from '../components/AboutCard'
import NavigationTabs from '../components/NavigationTabs'

const useStyles = makeStyles((theme) => ({
  sticky: {
    position: 'sticky',
    top: theme.spacing(2),
  },
}))

const Index = () => {
  const { sticky } = useStyles()

  return (
    <>
      <SEO title="Profile" />
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12}><ProfileHeader /></Grid>
          <Grid item xs={12}>
            <NavigationTabs />
            <Grid container spacing={2} justify="center">
              <Grid item sm={6} xs={12}>
                <div className={sticky}>
                  <AboutCard />
                </div>
              </Grid>
              <Grid item sm={6} xs={12}>
                <ProfileCards />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Index
