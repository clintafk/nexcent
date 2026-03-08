"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/service", label: "Service" },
    { href: "/feature", label: "Feature" },
    { href: "/product", label: "Product" },
    { href: "/testimonial", label: "Testimonial" },
    { href: "/faq", label: "FAQ" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#F5F7FA] shadow">
      <div className="flex h-16 md:h-21 px-4 md:px-8 lg:pl-26.5 lg:pr-30 xl:pl-30 xl:pr-36 justify-between items-center bg-[#F5F7FA]">
        <Image 
          src="logo.svg"
          alt="Company Logo"
          width={154.49}
          height={24}
          className="w-auto h-6"
        />
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-12.5 font-normal text-[16px] text-[#18191F]">
          {navLinks.map(({ href, label }) => (
            <Link 
              key={href}
              href={href} 
              className={pathname === href ? "font-bold" : ""}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex gap-3.5">
          <Link href="/" className="inline-block pl-5 pr-5 pt-2.5 pb-2.5 bg-white rounded-sm hover:bg-gray-50 transition-colors font-medium text-sm text-[#4CAF4F]">
            Login
          </Link>
          <Link href="/" className="inline-block pl-5 pr-5 pt-2.5 pb-2.5 bg-[#4CAF4F] rounded-md hover:bg-[#3e8e41] transition-colors font-medium text-sm text-white">
            Sign Up
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#18191F] focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F5F7FA] border-t border-gray-200">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`py-2 text-base ${pathname === href ? "font-bold text-[#4CAF4F]" : "text-[#18191F]"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Link 
                href="/" 
                className="text-center py-2.5 bg-white rounded-sm font-medium text-sm text-[#4CAF4F] hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link 
                href="/" 
                className="text-center py-2.5 bg-[#4CAF4F] rounded-md font-medium text-sm text-white hover:bg-[#3e8e41] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}