import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Typography from '@material-ui/core/Typography'

import data from './data'

const MarkdownProfileLayout = ({ children }) => {
  return (
    <MDXProvider
      components={{
        ...data,
        p: (props) => <Typography color="textSecondary" variant="body2" {...props} />,
      }}
    >
      {children}
    </MDXProvider>
  )
}

export default MarkdownProfileLayout
