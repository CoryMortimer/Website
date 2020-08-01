import React, { forwardRef, useState } from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const NavigationTabs = () => {
  const location = useLocation()
  const [tabValue, setTabValue] = useState(location.pathname)

  return (
    <Tabs
      value={tabValue}
      component="nav"
      onChange={(event, newValue) => {
        if (newValue !== 2) {
          setTabValue(newValue)
        }
      }}
    >
      <Tab value="/" component={forwardRef((props, ref) => <Link to='/' {...props} ref={ref} />)} label="Profile" />
      <Tab value="/blog/" component={forwardRef((props, ref) => <Link to='/blog/' {...props} ref={ref} />)} label="Blog" />
      <Tab component={forwardRef((props, ref) => <OutboundLink rel="noopener noreferrer" target="_blank" href="https://github.com/corymortimer" {...props} />)} label={<div>Github <OpenInNewIcon style={{verticalAlign: 'middle'}} fontSize="inherit" /></div>} />
    </Tabs>
  )
}

export default NavigationTabs
