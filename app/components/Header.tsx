"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 bg-[#F5F7FA] shadow">
      <div className="flex h-21 ml-26.5 mr-30 justify-between items-center bg-[#F5F7FA]">
        <Image 
          src="logo.svg"
          alt="Company Logo"
          width={154.49}
          height={24}
        />
        <ul className="flex gap-12.5 font-normal text-[16px] text-[#18191F]">
          <li>
            <Link href="/" className={pathname === "/" ? "font-bold" : ""}>Home</Link>
          </li>
          <li>
            <Link href="/service" className={pathname === "/service" ? "font-bold" : ""}>Service</Link>
          </li>
          <li>
            <Link href="/feature" className={pathname === "/feature" ? "font-bold" : ""}>Feature</Link>
          </li>
          <li>
            <Link href="/product" className={pathname === "/product" ? "font-bold" : ""}>Product</Link>
          </li>
          <li>
            <Link href="/testimonial" className={pathname === "/testimonial" ? "font-bold" : ""}>Testimonial</Link>
          </li>
          <li>
            <Link href="/faq" className={pathname === "/faq" ? "font-bold" : ""}>FAQ</Link>
          </li>
        </ul>
        <div className="flex gap-3.5">
          <div className="pl-5 pr-5 pt-2.5 pb-2.5 bg-white rounded-sm" >
            <Link href="/" className="font-medium text-sm text-[#4CAF4F] ">Login</Link>
          </div>
          <div className="pl-5 pr-5 pt-2.5 pb-2.5 bg-[#4CAF4F] rounded-md">
            <Link href="/" className="font-medium text-sm">Sign Up</Link>
          </div>
        </div>
      </div>
    </header>
  )
}