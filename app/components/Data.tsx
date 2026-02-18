import Image from "next/image";
interface DataProps {
  src: string;
  alt: string;
  number: string;
  description: string;
  
}

export default function Data({ src, alt, number, description }: DataProps) {
  return (
    <div className="flex gap-3 md:gap-4 items-center">
      <Image src={src} alt={alt} width={48} height={48} className="w-10 h-10 md:w-12 md:h-12" />
      <div className="flex flex-col">
        <h3 className="font-bold text-xl md:text-2xl lg:text-[28px]">{number}</h3>
        <p className="font-normal text-sm md:text-md">{description}</p> 
      </div>
    </div>
  )
}
