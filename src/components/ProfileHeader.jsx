import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import TitleImage from '../components/TitleImage'
import ProfileImage from '../components/ProfileImage'

const useStyles = makeStyles({
  container: {
    position: 'relative',
    margin: '0 auto 32px auto',
  },
  profileImage: {
    position: 'absolute',
    width: 168,
    bottom: '-32px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
})

const ProfileHeader = ({ title = 'Cory Mortimer Martin', image }) => {
  const { container, profileImage, } = useStyles()

  return (
    <>
      <div className={container}>
        {image || <TitleImage />}
        <div className={profileImage}>
          <ProfileImage />
        </div>
      </div>
      <Typography align="center" variant="h3" component="h1">{title}</Typography>
    </>
  )
}

export default ProfileHeader
