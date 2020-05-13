import React from 'react'

const Template: React.FC = props => {
  return (
    <div>
      <div>Template</div>
      <div>
        {props.children}
      </div>
    </div>
  )

}

export default Template