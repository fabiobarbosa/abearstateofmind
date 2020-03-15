import React from 'react'

function Container (props) {
  return (
    <div
      className={`container${props.full ? '--full' : '--section'} ${
        props.className
      }`}
    >
      {props.children}
    </div>
  )
}

Container.defaultProps = {
  full: false,
  className: ''
}

export default Container
