import React from 'react'
import { RouteComponentProps } from 'react-router'
import Template from '../Template'
import SignInForm from '../component/SignInForm'
import SignUpForm from '../component/SignUpForm'

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