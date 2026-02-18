import Image from "next/image"

export default function ClientsSection() {
  const clientLogoList = [
    { key:1, src: '/clients/client1.svg', alt: 'Client 1' },
    { key:2, src: '/clients/client2.svg', alt: 'Client 2' },
    { key:3, src: '/clients/client3.svg', alt: 'Client 3' },
    { key:4, src: '/clients/client4.svg', alt: 'Client 4' },
    { key:5, src: '/clients/client5.svg', alt: 'Client 5' },
    { key:6, src: '/clients/client6.svg', alt: 'Client 6' },
    { key:7, src: '/clients/client7.svg', alt: 'Client 7' },
  ]
    return (
      <section className="bg-white py-8 md:py-16">
        <div className="flex flex-col w-full gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-center text-neutral-600 font-semibold text-4xl">
              Our Clients
            </h2>
            <p className="font-normal text-center text-[#717171]">We have been working with some Fortune 500+ clients.</p>
          </div>
          <div className="overflow-hidden relative">
            <div
              className="flex items-center gap-8 md:gap-16 animate-clients-scroll whitespace-nowrap"
              style={{ willChange: "transform" }}
            >
              {/* Repeat logos twice for seamless loop */}
              {[...clientLogoList, ...clientLogoList].map(({ key, src, alt }, idx) => (
                <Image
                  key={key + '-repeat-' + idx}
                  src={src}
                  alt={alt}
                  width={120}
                  height={60}
                  className="object-contain h-12 inline-block"
                  draggable={false}
                />
              ))}
            </div>
          </div>
          {/* Animation keyframes moved to global CSS */}
        </div>
      </section>
    )
}
