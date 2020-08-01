import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import data from './data'

const MarkdownProfileLayout = ({ children }) => {
  return (
    <MDXProvider
      components={{
        ...data,
        ul: (props) => <List dense {...props} />,
        li: (props) => <ListItem dense {...props} />,
        p: (props) => <Typography color="textSecondary" variant="body2" {...props} />,
      }}
    >
      {children}
    </MDXProvider>
  )
}

export default MarkdownProfileLayout
