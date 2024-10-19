'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Header as HeaderType } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { Button } from '../../Button'
import { CartLink } from '../../CartLink'
import { CMSLink } from '../../Link'

import classes from './index.module.scss'

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const { user } = useAuth()

  // State to toggle mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Toggle function
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState)  // Toggle open/close on click
  }

  return (
    <header className={classes.header}>
      {/* Mobile Hamburger Button - ensure it stays visible */}
      <button className={classes.hamburger} onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? '✕' : '☰'} {/* Switch between icons */}
      </button>

      <nav className={[
        classes.nav, 
        isMobileMenuOpen ? classes.open : '',  // Open class for mobile menu
        user === undefined && classes.hide
      ].filter(Boolean).join(' ')}>
        {navItems.map(({ link }, i) => {
          return <CMSLink key={i} {...link} appearance="none" />
        })}
        {/* Cart Link */}
        {user && <Link href="/account">
        <Image
        src="/assets/icons/account.svg"
        alt="delete"
        width={24}
        height={24}
        className={classes.qtnBt}
        />
        </Link>}
        {!user && (
          <Button
            el="link"
          href="/login"
          label="Login"
          appearance="primary"
          onClick={() => (window.location.href = '/login')}
        />
        )}
        {user && <CartLink />}
      </nav>
    </header>
  )
}
