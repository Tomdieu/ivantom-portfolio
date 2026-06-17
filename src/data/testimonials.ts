export type TestimonialItem = {
  id: string;
  name: string;
  role: string;
  company: string;
  quoteKey: string;
  avatarInitials: string;
};

export const testimonialsData: TestimonialItem[] = [
  {
    id: "testimonial-1",
    name: "Sarah K.",
    role: "CTO",
    company: "Tech Startup",
    quoteKey: "testimonials.items.sarah",
    avatarInitials: "SK",
  },
  {
    id: "testimonial-2",
    name: "Marc L.",
    role: "Product Manager",
    company: "Digital Agency",
    quoteKey: "testimonials.items.marc",
    avatarInitials: "ML",
  },
  {
    id: "testimonial-3",
    name: "Jean P.",
    role: "Founder",
    company: "HealthTech",
    quoteKey: "testimonials.items.jean",
    avatarInitials: "JP",
  },
];
