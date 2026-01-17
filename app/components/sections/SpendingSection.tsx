import Image from "next/image"
import Link from "next/link"

export default function SpendingSection() {
  return (
    <section className="pl-36 pr-36">
      <div className="flex justify-between">
        <div className="shrink-0 pt-12.75 pb-12.75">
          <Image src="/rafiki.svg" alt="Spending Logo" width={441.53} height={328.99} className="w-full h-full" />
        </div>
        <div className="max-w-165.25 pr-15 flex flex-col gap-8 justify-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-[#4D4D4D] font-semibold text-4xl">The unseen spending of three years at Pixelgrade</h2>
            <p className="text-[#717171] text-normal text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
          </div>
          <div className="pl-8 pr-8 pt-8 pb-8 bg-[#4CAF4F] rounded-md w-fit">
            <Link href="/" className="font-medium text-sm">Learn More</Link>
          </div>
        </div>
        {/* <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-[#4D4D4D] font-semibold text-4xl">The unseen spending of three years at Pixelgrade</h2>
            <p className="text-[#717171] text-normal text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
          </div>
          <div className="pl-8 pr-8 pt-8 pb-8 bg-[#4CAF4F] rounded-md w-fit">
            <Link href="/" className="font-medium text-sm">Learn More</Link>
          </div>
        </div> */}
      </div>
    </section>
  )
}
