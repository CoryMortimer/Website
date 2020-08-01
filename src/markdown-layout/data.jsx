import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

export default {
  h1: (props) => <Typography variant="h1" {...props} />,
  h2: (props) => <Typography variant="h2" {...props} />,
  h3: (props) => <Typography variant="h3" {...props} />,
  h4: (props) => <Typography variant="h4" {...props} />,
  h5: (props) => <Typography variant="h5" {...props} />,
  h6: (props) => <Typography variant="h6" {...props} />,
  p: (props) => <Typography variant="body1" {...props} />,
  a: (props) => <Link color="secondary" {...props} />,
}
