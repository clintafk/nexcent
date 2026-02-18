import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="px-4 py-8 md:px-12 md:py-16 lg:px-36 lg:py-24 xl:px-41.25 xl:py-24 bg-[#F5F7FA]">
      <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-row justify-between items-center gap-6 md:gap-8">
        <div className="flex flex-col gap-6 md:gap-8 justify-center items-center md:items-start text-center md:text-left">
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-[#4D4D4D] text-3xl md:text-5xl lg:text-[64px] leading-tight md:leading-19">
              Lessons and insights <span className="text-[#4CAF4F]"><br />from 8 years</span>
            </h1>
            <p className="text-[#717171] text-sm md:text-base">Where to grow your business as a photographer: site or social media?</p>
          </div>
          <Link href="/" className="font-medium text-sm pl-5 pr-5 pt-2.5 pb-2.5 bg-[#4CAF4F] rounded-md text-white">Register</Link>
        </div>
        <div className="w-auto h-auto flex justify-center">
          <Image src="/hero_image.png" width={391} height={407} alt="Hero Image" className="" />
        </div>
      </div>
    </section>
  )
}
