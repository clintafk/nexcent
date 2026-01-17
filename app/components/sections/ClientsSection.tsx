import Image from "next/image"

export default function ClientsSection() {
  const clientLogoList = [
    { key:1, src: '/clients/client1.svg', alt: 'Client 1' },
    { key:2, src: '/clients/client2.svg', alt: 'Client 2' },
    { key:3, src: '/clients/client3.svg', alt: 'Client 3' },
    { key:4, src: '/clients/client4.svg', alt: 'Client 4' },
    { key:5, src: '/clients/client5.svg', alt: 'Client 5' },
    { key:6, src: '/clients/client6.svg', alt: 'Client 6' },
    { key:7, src: '/clients/client3.svg', alt: 'Client 7' },
  ]
  return (
    <section className='flex flex-col pl-36 pr-36 pt-10 gap-4 bg-white'>
      <div className="flex flex-col gap-2 text-center">
        <h2 className="font-semibold text-4xl text-[#4D4D4D] leading-11">Our Clients</h2>
        <p className="font-normal text-base text-[#717171]">We have been working with some Fortune 500+ clients</p> 
      </div>
      <div className="flex gap-32.5 pt-6.25 pb-6.25 justify-center">
        {clientLogoList.map(({ key, src, alt }) => (
          <Image 
            key={key} 
            src={src}
            alt={alt}
            width={48}
            height={48}  
          />
        ))}
      </div>
    </section>
  )
}
