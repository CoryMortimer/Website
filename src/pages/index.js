import React, { useState, forwardRef } from 'react'
import Container from '@material-ui/core/Container'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import { makeStyles } from '@material-ui/core/styles'
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { Link } from 'gatsby'

import Grid from '../components/Grid'
import SEO from '../components/seo'
import ProfileHeader from '../components/ProfileHeader'
import ProfileCards from '../components/ProfileCards'
import AboutCard from '../components/AboutCard'

const useStyles = makeStyles((theme) => ({
  sticky: {
    position: 'sticky',
    top: theme.spacing(2),
  },
}))

const Index = () => {
  const { sticky } = useStyles()
  const [tabValue, setTabValue] = useState(0)

  return (
    <>
      <SEO title="Home" />
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12}><ProfileHeader /></Grid>
          <Grid item xs={12}>
            <Tabs
              value={tabValue}
              onChange={(event, newValue) => {
                if (newValue !== 1) {
                  setTabValue(newValue)
                }
              }}
              >
              <Tab component={forwardRef((props, ref) => <Link to='/' {...props} ref={ref} />)} label="Profile" />
              <Tab component="a" label={<div>Github <OpenInNewIcon style={{verticalAlign: 'middle'}} fontSize="inherit" /></div>} href="https://github.com/corymortimer" rel="noopener noreferrer" target="_blank" />
            </Tabs>
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
