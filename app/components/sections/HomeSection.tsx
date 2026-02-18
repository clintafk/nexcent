import HeroSection from "./HeroSection"
import ClientsSection from "./ClientsSection"
import CommunityManagementSection from "./CommunityManagementSection"
import SpendingSection from "./SpendingSection"
import BodySection from "./BodySection"


export default function HomeSection() {
  return (
    <section className="flex flex-col gap-10">
      <HeroSection />
      <ClientsSection />
      <CommunityManagementSection />
      <SpendingSection />
      <BodySection />
    </section>
  );
}
