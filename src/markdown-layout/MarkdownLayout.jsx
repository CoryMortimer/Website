import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import data from './data'

const MarkdownLayout = ({ children }) => {
  return (
    <MDXProvider
      components={{ ...data }}
    >
      {children}
    </MDXProvider>
  )
}

export default MarkdownLayout
