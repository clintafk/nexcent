import Image from "next/image"
import Link from "next/link"

export default function DesignSection() {
  return (
    <section className="px-4 py-8 md:px-12 md:py-10 lg:px-36 lg:py-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
        <div className="w-full md:w-auto flex justify-center">
          <Image src="/pana.svg" alt="Design Logo" width={441.53} height={433.4} className="w-full max-w-sm md:max-w-none md:w-auto" />
        </div>
        <div className="w-full md:max-w-165.25 flex flex-col gap-6 md:gap-8 justify-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-[#4D4D4D] font-semibold text-2xl md:text-3xl lg:text-4xl">How to design your site footer like we did</h2>
            <p className="text-[#717171] text-normal text-sm md:text-[14px]">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
          </div>
          <div className="pl-8 pr-8 pt-3.5 pb-3.5 bg-[#4CAF4F] rounded-md w-fit">
            <Link href="/" className="font-medium text-sm text-white">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
