import Image from "next/image"
import Link from "next/link";
interface SocialLinkProps {
  href: string;
  src: string;
  width: number;
  height: number;
  alt: string;  
}

export default function SocialLink({ href, src, width, height, alt }: SocialLinkProps) {
  return (
    <Link href={href} className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
      <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      />
    </Link>
  )
}
