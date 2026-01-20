import Image from "next/image";
import Data from "./Data";

const dataGroupContent = [
  { src: "/help/members.svg", alt: "Members Icon", number: "2,245,341", description: "Members" },
  { src: "/help/clubs.svg", alt: "Clubs Icon", number: "42,328", description: "Clubs" },
  { src: "/help/event_booking.svg", alt: "Event Booking Icon", number: "828,867", description: "Event Booking" },
  { src: "/help/payments.svg", alt: "Payment Icon", number: "1,926,436", description: "Payments" },
]

export default function DataGroup() {
  return (
    <div className='flex flex-col gap-10'>
      <div className="flex justify-end gap-7.5">
        <Data src="/help_section_logos/members.svg" alt="Members Icon" number="2,245,341" description="Members" />
        <Data src="/help_section_logos/clubs.svg" alt="Clubs Icon" number="42,328" description="Clubs" />
      </div>
      <div className="flex gap-7.5">
        <Data src="/help_section_logos/event_booking.svg" alt="Event Booking Icon" number="828,867" description="Event Booking" />
        <Data src="/help_section_logos/payments.svg" alt="Payment Icon" number="1,926,436" description="Payments" />
      </div>
    </div>
  )
}
