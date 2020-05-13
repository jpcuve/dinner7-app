import React from 'react'
import { RouteComponentProps } from 'react-router'
import Template from '../Template'
import logo from '../logo.svg'

const HomeView: React.FC<RouteComponentProps> = props => {
  return (
    <Template>
      <div>Home</div>
      <img src={logo}/>
    </Template>
  )
}

export default HomeView