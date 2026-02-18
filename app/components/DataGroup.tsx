import Data from "./Data";

export default function DataGroup() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-7.5 w-full'>
      <Data src="/help_section_logos/members.svg" alt="Members Icon" number="2,245,341" description="Members" />
      <Data src="/help_section_logos/clubs.svg" alt="Clubs Icon" number="42,328" description="Clubs" />
      <Data src="/help_section_logos/event_booking.svg" alt="Event Booking Icon" number="828,867" description="Event Booking" />
      <Data src="/help_section_logos/payments.svg" alt="Payment Icon" number="1,926,436" description="Payments" />
    </div>
  )
}
