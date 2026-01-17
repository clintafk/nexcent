import Image from "next/image";

interface FeatureCardProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
  description: string;
}

export default function FeatureCard({
  src,
  alt,
  width,
  height,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="flex flex-col gap-2 pl-8 pr-8 pt-6 pb-6 items-center">
      <div className="flex flex-col gap-4 justify-center items-center text-center max-w-66.75">
        <Image src={src} alt={alt} width={width} height={height} />
        <h3 className="text-[#4D4D4D] font-bold text-[28px] leading-9">
          {title}
        </h3>
      </div>
      <p className="text-[#717171] font-normal text-base text-center leading-5">
        {description}
      </p>
    </div>
  );
}
