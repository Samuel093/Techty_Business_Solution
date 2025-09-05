'use client'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-[#F0F8FF] backdrop-blur-sm z-50 shadow-sm"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/mainlogo.png" alt="logo" width={40} height={40} />
            <span className="text-lg font-bold md:text-xl">Techty</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative pb-1 font-medium transition-colors 
                    ${isActive ? 'text-green-600' : 'text-gray-800 hover:text-green-600'}
                  `}
                >
                  {item.label}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-[2px] bg-green-600 transition-all duration-300
                      ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                    `}
                  ></span>
                </Link>
              )
            })}
            {/* Request Demo Button */}
            <a
              href="#demo"
              className="block rounded-xl bg-slate-900 px-4 py-3 text-center text-white hover:bg-slate-700 transition-colors"
            >
              Request a Free Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden py-4 space-y-2"
          >
            {menuItems.map((item, index) => {
              const isActive = pathname === item.href
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`
                      block px-4 py-3 rounded-lg font-medium transition-all duration-300
                      ${isActive 
                        ? 'bg-green-100 text-green-700 scale-[1.02]' 
                        : 'text-gray-800 hover:bg-gray-100 hover:scale-[1.02]'}
                    `}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              )
            })}

            {/* Request Demo Button (Mobile) */}
            <a
              href="#demo"
              className="block rounded-xl bg-slate-900 px-4 py-3 text-center text-white hover:bg-slate-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Request a Free Demo
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}





