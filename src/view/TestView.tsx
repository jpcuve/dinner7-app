import React from 'react'
import { RouteComponentProps } from 'react-router'
import Template from '../Template'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const TestView: React.FC<RouteComponentProps> = props => {
  return (
    <Template>
      <div>Test</div>
      <Button variant="contained" color="primary">Hello world</Button>
      <Typography variant="h1" color="textPrimary">h1</Typography>
      <Typography variant="h2" color="textSecondary">h2</Typography>
      <Typography variant="h3" color="primary">h3</Typography>
      <Typography variant="h4" color="secondary">h4</Typography>
      <Typography variant="h5" color="initial">h5</Typography>
      <Typography variant="h6" color="error">h6</Typography>
      <Typography variant="subtitle1" color="inherit">subtitle1</Typography>
      <Typography variant="subtitle2" color="textPrimary">subtitle2</Typography>
      <Typography variant="body1" color="textPrimary">body1</Typography>
      <Typography variant="body2" color="textPrimary">body2</Typography>
      <Typography variant="caption" color="textPrimary">caption</Typography>
      <Typography variant="button" color="textPrimary">button</Typography>
      <Typography variant="overline" color="textPrimary">overline</Typography>
      <Typography variant="srOnly" color="textPrimary">srOnly</Typography>
      <Typography variant="inherit" color="textPrimary">inherit</Typography>
    </Template>
  )
}

export default TestView