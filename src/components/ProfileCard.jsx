import React from 'react'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import ProfilePicture from './ProfilePicture'
import Card from './Card'

const useStyles = makeStyles({
  cardContentRoot: {
    paddingTop: 0,
    paddingBottom: 16,
  },
})

const ProfileCard = ({ subheader, children, title }) => {
  const { cardContentRoot } = useStyles()

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="Profile picture">
            <ProfilePicture />
          </Avatar>
        }
        title="Cory Mortimer Martin"
        subheader={subheader}
      />
      <CardContent classes={{ root: cardContentRoot }}>
        <>
          <Typography variant="body1">{title}</Typography>
          {children}
        </>
      </CardContent>
    </Card>
  )
}

export default ProfileCard
