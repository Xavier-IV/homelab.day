import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ui/mode-toggle'

const Header = () => {
  return (
      <header className="p-4 border-b dark:border-gray-800">
          <nav className="flex justify-between items-center max-w-7xl px-2 md:px-10 mx-auto">
              <Link href="/">
                  <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      homelab.day
                  </h1>
              </Link>
              <ModeToggle />
          </nav>
      </header>
  )
}

export default Header