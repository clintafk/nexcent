import Link from "next/link"
import Image from "next/image"

export default function DemoSection() {
  return (
    <section className="bg-[#F5F7FA] flex flex-col text-center items-center px-4 py-8 md:px-8 md:py-12 gap-6 md:gap-8">
      <h1 className="text-2xl md:text-4xl lg:text-[64px] leading-tight px-4">Pellentesque suscipit fringilla libero eu.</h1>
      <Link 
        className="w-fit flex items-center gap-2 pt-3.5 pb-3.5 pl-6 pr-6 md:pl-8 md:pr-8 bg-[#4CAF4F] rounded-sm text-white text-sm md:text-base hover:bg-[#3e8e41] transition-colors"
        href={"/"}
      >
        Get a Demo
        <Image src="/right_arrow.svg" alt="right arrow" width={16} height={16}/>
      </Link>
    </section>
  )
}
