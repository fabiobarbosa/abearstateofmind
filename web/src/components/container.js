import React from 'react'

function Container (props) {
  return (
    <div className={`container ${props.className}`}>
      {props.children}
    </div>
  )
}

Container.defaultProps = {
  className: ''
}

export default Container
