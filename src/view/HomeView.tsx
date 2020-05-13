import React from 'react'
import { RouteComponentProps } from 'react-router'
import Template from '../Template'
import Button from '@material-ui/core/Button'

const HomeView: React.FC<RouteComponentProps> = props => {
  return (
    <Template>
      <div>Home</div>
    </Template>
  )
}

export default HomeView