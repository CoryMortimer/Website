import React from 'react'
import MaterialGrid from '@material-ui/core/Grid'

const Grid = ({ spacing, ...restOfProps }) => {
  if (spacing) {
    return (
      <div style={{ padding: spacing * 8 / 2 }}>
        <MaterialGrid spacing={spacing} {...restOfProps} />
      </div>
    )
  }
  return <MaterialGrid {...restOfProps} />
}

export default Grid
