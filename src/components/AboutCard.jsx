import React from 'react'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import Card from './Card'

const AboutCard = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>About</Typography>
        <Typography variant="body2">
        Energetic, excited, and enthusiastic Software Engineer with a passion for JavaScript. Knowledgeable in an array of technologies spanning the whole software stack. Always ready to learn new technologies and to grow as a developer.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default AboutCard
