import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import FormHelperText from '@material-ui/core/FormHelperText'

const SignUpForm: React.FC = () => {
  return(
    <form>
      <FormControl>
        <InputLabel htmlFor="email">Email address</InputLabel>
        <Input id="email" aria-describedby="email-help"/>
        <FormHelperText id="email-help">Email address will not be shared</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input id="password" aria-describedby="password-help"/>
        <FormHelperText id="password-help">Password must be complex enough</FormHelperText>
      </FormControl>
    </form>
  )
}

export default SignUpForm