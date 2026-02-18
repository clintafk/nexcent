import Image from "next/image"
import ButtonRightIcon from "../ButtonRightIcon";

const logos = [
  { id: 1, src: '/clients/client8.svg', alt: 'Tesla Logo' },
  { id: 2, src: '/clients/client2.svg', alt: 'Tesla Logo' },
  { id: 3, src: '/clients/client3.svg', alt: 'Tesla Logo' },
  { id: 4, src: '/clients/client4.svg', alt: 'Tesla Logo' },
  { id: 5, src: '/clients/client5.svg', alt: 'Tesla Logo' },
  { id: 6, src: '/clients/client6.svg', alt: 'Tesla Logo' },
]

export default function TeslaSection() {
  return (
    <section className="bg-[#F5F7FA]">
      <div className='px-4 py-6 md:px-12 md:py-8 lg:px-36 lg:py-8 xl:px-41.25 xl:py-8 flex flex-col lg:flex-row gap-6 md:gap-12 lg:justify-between xl:gap-19.5'>
        <div className="w-full lg:w-auto flex justify-center sm:justify-start md:justify-center sm:shrink-0">
          <Image className="rounded-lg" src="/tesla.png" width={326} height={326} alt="Tesla Image" />
        </div>
        <div className="w-full lg:min-w-187 flex flex-col gap-6 md:gap-8 justify-center">
          <div className="flex flex-col gap-4">
            <p className="font-medium text-sm md:text-[16px] text-[#717171]">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
            <div>
              <h4 className="font-semibold text-xl text-[#4CAF4F]">Tim Smith</h4>
              <p className="font-normal text-sm md:text-[16px] text-[#89939E]">British Dragon Boat Racing Association</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-6 md:gap-4">
            <div className="flex gap-4 md:gap-10.25 overflow-x-auto w-full md:w-auto">
              {logos.map(({ id, src, alt }) => (
                <div key={id} className="shrink-0">
                  <Image src={src} alt={alt} width={48} height={48} className="object-contain h-10 md:h-12" draggable={false} />
                </div>
              ))}
            </div>
            <div className="shrink-0">
              <ButtonRightIcon label="Meet all customers" href="/" icon_path="/right_arrow.svg" icon_alt="right arrow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
