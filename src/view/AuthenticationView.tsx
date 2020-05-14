import React from 'react'
import { RouteComponentProps } from 'react-router'
import Template from '../Template'
import SignInForm from '../form/SignInForm'
import SignUpForm from '../form/SignUpForm'

const AuthenticationView: React.FC<RouteComponentProps> = props => {
  const doNothing = () => undefined
  return (
    <Template>
      <SignInForm onCompleted={doNothing}/>
      <SignUpForm onCompleted={doNothing}/>
    </Template>
  )
}

export default AuthenticationView