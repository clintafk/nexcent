import DataGroup from "../DataGroup"

export default function HelpSection() {
  return (
    <section className="pl-36 pr-36 pt-16 pb-16 flex justify-between bg-[#F5F7FA]">
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-4xl text-[#4D4D4D] ">Helping a local <span className="text-[#4CAF4F] leading-11"><br />business reinvent itself</span></h2>
        <p className="text-base">We reached here with our hard work and dedication</p>
      </div>
      <div className="flex">
        <DataGroup />        
      </div>
    </section>
  )
}

