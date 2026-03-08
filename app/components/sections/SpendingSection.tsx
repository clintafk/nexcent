import Image from "next/image"
import Link from "next/link"

export default function SpendingSection() {
  return (
    <section className="px-4 py-8 md:px-12 md:py-12 lg:px-36 lg:py-16">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
        <div className="w-full md:w-auto flex justify-center">
          <Image src="/rafiki.svg" alt="Spending Logo" width={441.53} height={328.99} className="w-full max-w-sm md:max-w-none md:w-auto" />
        </div>
        <div className="w-full md:max-w-165.25 flex flex-col gap-6 md:gap-8 justify-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-[#4D4D4D] font-semibold text-2xl md:text-3xl lg:text-4xl">The unseen spending of three years at Pixelgrade</h2>
            <p className="text-[#717171] text-normal text-sm md:text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
          </div>
          <div className="pl-8 pr-8 pt-3.5 pb-3.5 bg-[#4CAF4F] rounded-md w-fit hover:bg-[#3e8e41] transition-colors">
            <Link href="/" className="font-medium text-sm text-white">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
