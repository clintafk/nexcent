import Image from "next/image"
import Link from "next/link"
import SocialLink from "./SocialLink"

export default function Footer() {
  const socialLinks = [
    { href: "instagram.com", src: "/instagram.svg", width: 17.07, height: 17.07, alt: "Instagram Link" },
    { href: "dribbble.com", src: "/dribbble.svg", width: 17.07, height: 17.07, alt: "Dribble Link" },
  ];
  const companyPagesLinks = [
    { href: "about.com", label: "About Us" },
    { href: "blog", label: "Blog" },
    { href: "contactus", label: "Contact Us" },
    { href: "pricing", label: "Pricing" },
    { href: "testimonials", label: "Testimonials" },
  ];
  const supportPagesLinks = [
    { href: "help center", label: "Help Center" },
    { href: "terms of service", label: "Terms of Service" },
    { href: "legal", label: "Legal" },
    { href: "privacy policy", label: "Privacy Policy" },
    { href: "status", label: "Status" },
  ];
  return (
   <footer className="bg-[#263238]">
      <div className="bg-[#263238] px-4 py-8 md:px-12 md:py-12 lg:px-41.25 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Logo and Social Section */}
          <div className="flex flex-col gap-6 md:gap-10 items-center md:items-start">
            <Link href="/">
              <Image 
                src="footer_logo.svg" 
                width={191}
                height={29.67}
                alt="footer logo"
              />
            </Link>
            <div className="flex flex-col gap-2 text-center md:text-left">
              <p className="font-normal text-sm text-[#F5F7FA]">Copyright © 2020 Nexcent ltd.</p> 
              <p className="font-normal text-sm text-[#F5F7FA]">All rights reserved</p> 
            </div>
            <div className="flex gap-4">
              {socialLinks.map(({ href, src, width, height, alt}) => (
                <SocialLink 
                  key={href}
                  href={href}
                  src={src}
                  width={width}
                  height={height}
                  alt={alt}
                />
              ))}
            </div>
          </div>
          
          {/* Company Links */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <h4 className="font-semibold text-xl text-white">Company</h4>
            <div className="flex flex-col gap-3">
              {companyPagesLinks.map(({ href, label }) => (
                <Link key={href} href={href} className="text-[#F5F7FA] text-sm hover:text-[#4CAF4F] transition-colors">{label}</Link>
              ))}
            </div>
          </div>
          
          {/* Support Links */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <h4 className="font-semibold text-xl text-white">Support</h4>
            <div className="flex flex-col gap-3">
              {supportPagesLinks.map(({ href, label }) => (  
                <Link key={href} href={href} className="text-[#F5F7FA] text-sm hover:text-[#4CAF4F] transition-colors">{label}</Link>
              ))}
            </div>
          </div>
          
          {/* Newsletter Section */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <h4 className="font-semibold text-xl text-white">Stay up to date</h4>
            <form className="flex items-center gap-3 bg-white/20 rounded-lg px-3 py-2.25">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 outline-none bg-transparent text-[#D9DBE1] placeholder-[#D9DBE1] text-sm font-normal"
                required
              />
              <button 
                type="submit" 
                className="text-gray-200 hover:text-white"
                aria-label="Send"
              >
                <Image src="/send.svg" alt="Send Email" width={18} height={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
   </footer> 
  )
}