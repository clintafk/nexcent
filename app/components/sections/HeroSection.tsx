import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="pl-36 pr-36 pt-24 pb-24 bg-[#F5F7FA]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-8 justify-center items-start">
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-[#4D4D4D] text-[64px] leading-19">Lessons and insights <span className="text-[#4CAF4F]"><br />from 8 years</span></h1>
            <p className="text-[#717171]">Where to grow your business as a photographer: site or social media?</p>
          </div>
          <Link href="/" className="font-medium text-sm pl-5 pr-5 pt-2.5 pb-2.5 bg-[#4CAF4F] rounded-md">Register</Link>
        </div>
        <div>
          <Image src="/hero_image.png" width={391} height={407} alt="Hero Image" />
        </div>
      </div>
    </section>
  )
}
