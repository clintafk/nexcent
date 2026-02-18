import ImageTextOverlay from "../ImageTextOverlay"

export default function CaringMarketingSection() {
  const articles = [
    { 
      index: 1,
      label: "Creating Streamlined Safeguarding Processes with OneRen", 
      overlayImagePath: "/caring_marketing_section/first.png", 
      overlayImageAlt: "Person laying down"
    },
    { 
      index: 2,
      label: "What are your safeguarding responsibilities and how can you manage them?", 
      overlayImagePath: "/caring_marketing_section/second.png", 
      overlayImageAlt: "Laptop with hand"
    },
    { 
      index: 3,
      label: "Revamping the Membership Model with Triathlon Australia", 
      overlayImagePath: "/caring_marketing_section/third.png", 
      overlayImageAlt: "Laptop with hand"
    },
  ]
  return (
    <section className="flex flex-col gap-6 md:gap-8 px-4 py-8 md:px-12 md:py-10 lg:px-36 lg:pt-12 lg:pb-[94.6px]">
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-center text-neutral-600 font-semibold text-2xl md:text-3xl lg:text-4xl">Caring is the new marketing</h2>
        <p className="font-normal text-center text-[#717171] text-sm md:text-base max-w-full md:w-157">The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who&apos;s joining the community, read about how our community are increasing their membership income and lot&apos;s more.​</p>
      </div>
      <div className="h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
        {articles.map((article) => (
         <ImageTextOverlay key={article.index} {...article} />
        ))}
      </div>
    </section>
  )
}
