import React from 'react'
import { Logo, BurgerIcon, MenuIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import AppHeaderSlyles from './AppHeader.module.css'

function AppHeader() {
  return (
    <div className="header">
      <BurgerIcon type="primary" />
      <MenuIcon type="primary" />
      <Logo />
      <ProfileIcon type="primary" />
    </div>
  )
}

export default AppHeader
