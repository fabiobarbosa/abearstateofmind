import React from 'react'

function Container (props) {
  return (
    <div className={props.containerClass}>
      <div className={props.contentClass}>
        {props.children}
      </div>
    </div>
  )
}

Container.defaultProps = {
  containerClass: 'container--module',
  contentClass: 'content'
}

export default Container
