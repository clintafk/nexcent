import Link from "next/link";
import Image from "next/image";

interface ButtonRightIconProps {
  label: string;
  href: string
  icon_path: string;
  icon_alt: string;
}

export default function ButtonRightIcon({label, href, icon_path, icon_alt}: ButtonRightIconProps) {
  return (
    <Link className="flex p-2 gap-2 items-center font-semibold text-xl text-[#4CAF4F] hover:text-[#3e8e41] transition-colors" href={href}>
      {label}
      <Image src={icon_path} alt={icon_alt} width={24} height={24} />
    </Link>
  )
}
