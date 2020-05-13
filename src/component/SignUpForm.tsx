import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import FormHelperText from '@material-ui/core/FormHelperText'
import { FormProps } from '.'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const SignUpForm: React.FC<FormProps> = props => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
  }
  return(
    <form noValidate onSubmit={handleSubmit}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <FormControl>
            <InputLabel htmlFor="email">Email address</InputLabel>
            <Input id="email" aria-describedby="email-help"/>
            <FormHelperText id="email-help">Email address will not be shared</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input id="password" aria-describedby="password-help"/>
            <FormHelperText id="password-help">Password must be complex enough</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">Submit</Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default SignUpForm