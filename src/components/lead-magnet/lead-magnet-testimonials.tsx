import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    quote:
      "The AI automation guide helped us reduce our lead processing time by 70%. The pilot program was the perfect next step for implementation.",
    author: "Sarah Johnson",
    role: "Sales Director",
    company: "TechCorp",
    initials: "SJ",
  },
  {
    quote:
      "We've seen a 3x increase in our conversion rates since implementing the strategies from the guide. The templates were a game-changer.",
    author: "Michael Chen",
    role: "CEO",
    company: "GrowthLabs",
    initials: "MC",
  },
  {
    quote:
      "The step-by-step approach made it easy to implement AI automation in our business. The pilot program provided invaluable support.",
    author: "Emily Rodriguez",
    role: "Marketing Manager",
    company: "InnovateCo",
    initials: "ER",
  },
];

export function LeadMagnetTestimonials() {
  return (
    <section className="py-12">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold">What Our Clients Say</h2>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
          Join hundreds of businesses that have transformed their processes with
          our AI automation solutions.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="p-6">
            <div className="mb-4 flex items-center gap-4">
              <Avatar>
                <AvatarFallback>{testimonial.initials}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{testimonial.author}</h3>
                <p className="text-muted-foreground text-sm">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
            <p className="text-muted-foreground italic">
              "{testimonial.quote}"
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
