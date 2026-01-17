import FeatureCard from "../FeatureCard"

export default function CommunityManagementSection() {
  const featureCards = [
    { 
      src: "/community_management_logos/member_organization.svg", 
      alt: "Membership Organization Logo", 
      width: 65, 
      height: 56, 
      title: "Membership Organization", 
      description: "Our membership management software provides full automation of membership renewals and payments" 
    },
    { 
      src: "/community_management_logos/national_associations.svg", 
      alt: "National Associations Logo", 
      width: 65, 
      height: 56, 
      title: "National Associations", 
      description: "Our membership management software provides full automation of membership renewals and payments" 
    },
    { 
      src: "/community_management_logos/clubs_and_groups.svg", 
      alt: "Clubs and Groups Logo", 
      width: 65, 
      height: 56, 
      title: "Clubs and Groups", 
      description: "Our membership management software provides full automation of membership renewals and payments" 
    },
  ]
  return (
    <section className="pl-36 pr-36 bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col text-center gap-2">
          <h2 className="font-semibold text-4xl text-[#4D4D4D] max-w-135.5">Manage your community in a single system</h2> 
          <p className="font-normal text-base text-[#717171]">Who is Nexcent suitable for?</p>
        </div>
        <div className="flex">
          {featureCards.map(({ src, alt, width, height, title, description }) => (
              <FeatureCard 
                key={title}
                src={src}
                alt={alt}
                width={width}
                height={height}
                title={title}
                description={description}
              />
          ))}
        </div>
      </div>
    </section>
  )
}
