import Image from "next/image";
import ButtonRightIcon from "./ButtonRightIcon";

interface ImageTextOverlayProps {
  label: string;
  overlayImagePath: string;
  overlayImageAlt: string;
}

export default function ImageTextOverlay({label, overlayImagePath, overlayImageAlt}: ImageTextOverlayProps) {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <Image 
        className="rounded-lg w-full h-auto shrink-0" 
        src={overlayImagePath} 
        alt={overlayImageAlt} 
        width={368} 
        height={286} 
      />
      <div className="relative -translate-y-1/2 flex flex-col rounded-lg bg-[#F5F7FA] p-4 items-center gap-4 max-w-xs md:w-79.25 mx-4">
        <h4 className="font-semibold text-[#717171] text-lg md:text-xl text-center">{label}</h4> 
        <ButtonRightIcon 
          label="Readmore" 
          href="/" 
          icon_path="/right_arrow.svg" 
          icon_alt="Right arrow" 
        />
      </div>
    </div>
  )
}