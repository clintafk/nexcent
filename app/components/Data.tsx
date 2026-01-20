import Image from "next/image";
interface DataProps {
  src: string;
  alt: string;
  number: string;
  description: string;
  
}

export default function Data({ src, alt, number, description }: DataProps) {
  return (
    <div className="flex gap-4 w-63.75 h-15">
      <Image src={src} alt={alt} width={48} height={48} />
      <div className="flex flex-col">
        <h3 className="font-bold text-[28px]">{number}</h3>
        <p className="font-normal text-md">{description}</p> 
      </div>
    </div>
  )
}
