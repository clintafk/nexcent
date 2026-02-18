import DataGroup from "../DataGroup"

export default function HelpSection() {
  return (
    <section className="px-4 py-8 md:px-12 md:py-12 lg:px-36 lg:py-16 flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-8 bg-[#F5F7FA]">
      <div className="flex flex-col gap-2 text-center md:text-left">
        <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl text-[#4D4D4D]">Helping a local <span className="text-[#4CAF4F] leading-11"><br className="hidden md:inline" />business reinvent itself</span></h2>
        <p className="text-sm md:text-base">We reached here with our hard work and dedication</p>
      </div>
      <div className="flex w-full md:w-auto">
        <DataGroup />        
      </div>
    </section>
  )
}

