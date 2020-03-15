import React from 'react'
import HamburgerIcon from './hamburger'
import SiteLogo from './logo'

function Icon (props) {
  switch (props.symbol) {
    case 'hamburger':
      return <HamburgerIcon />
    case 'logo':
      return <SiteLogo />
    default:
      return <span>Unknown icon: {props.symbol}</span>
  }
}

export default Icon
