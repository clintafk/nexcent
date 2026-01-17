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
      <div className="bg-[#263238] flex mr-41.25 ml-41.25 p-16 justify-between">
        <div className="flex flex-col gap-10">
          <Link href="/">
            <Image 
              src="footer_logo.svg" 
              width={191}
              height={29.67}
              alt="footer logo"
            />
          </Link>
          <div className="flex flex-col gap-2">
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
        <div className="flex gap-7.5">
          <div className="flex flex-col gap-6 w-40">
            <h4 className="font-semibold text-xl">Company</h4>
            <div className="flex flex-col gap-3">
              {companyPagesLinks.map(({ href, label }) => (
                <Link key={href} href={href}>{label}</Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 w-40">
            <h4 className="font-semibold text-xl">Support</h4>
            <div className="flex flex-col gap-3">
              {supportPagesLinks.map(({ href, label }) => (  
                <Link key={href} href={href}>{label}</Link>
              ))}
            </div>
          </div>
          <div className="font-semibold text-xl">
            <h4>Stay up to date</h4>
            <form className="flex items-center gap-3 mt-4 bg-white/20 rounded-lg px-3 py-2.25">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 outline-none text-[#D9DBE1] placeholder-text-[#D9DBE1] text-sm font-normal"
                required
              />
              <button 
                type="submit" 
                className="text-gray-600 hover:text-gray-800"
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