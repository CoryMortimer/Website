import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import data from './data'

const MarkdownLayout = ({ children }) => {
  return (
    <MDXProvider
      components={{
        ...data,
        ul: (props) => <List dense {...props} />,
        li: (props) => <ListItem dense {...props} />,
      }}
    >
      {children}
    </MDXProvider>
  )
}

export default MarkdownLayout
