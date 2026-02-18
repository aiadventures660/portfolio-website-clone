import { MessageSquare, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactDetails = [
  {
    label: "Contact No",
    value: "+91 9942193614",
    icon: Phone,
    href: "tel:+919942193614",
  },
  {
    label: "Email",
    value: "nrpgroup.pvt@gmail.com",
    icon: Mail,
    href: "mailto:nrpgroup.pvt@gmail.com",
  },
  {
    label: "Address",
    value: "Beverly Hills,Los Angeles, California, USA",
    icon: MapPin,
    href: "https://www.google.com/maps",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <MessageSquare className="w-6 h-6 text-foreground" />
        <h2 className="text-2xl font-semibold font-space-grotesk text-foreground">Contact</h2>
      </div>

      {/* Contact Heading */}
      <h3 className="text-4xl lg:text-5xl font-medium font-space-grotesk text-foreground">Let's Get in Touch!</h3>

      {/* Contact Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Contact Details */}
        <div className="lg:w-1/2 space-y-3">
          {contactDetails.map((detail, index) => (
            <a
              key={index}
              href={detail.href}
              target="_blank"
              rel="noreferrer noopener"
              className="contact-detail rounded-lg p-3 flex items-center gap-3 transition-colors"
            >
              <div className="w-6 h-6 text-[color:var(--brand)] flex-shrink-0">
                <detail.icon className="w-full h-full" />
              </div>
              <div className="flex-1">
                <p className="text-muted-foreground text-sm">{detail.label}</p>
                <p className="text-foreground font-medium">{detail.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/2">
          <form className="space-y-4">
            <Input
              placeholder="Full Name"
              className="form-input rounded-lg h-12 placeholder:text-muted-foreground focus:border-[color:var(--brand)]"
            />
            <Input
              type="email"
              placeholder="Email"
              className="form-input rounded-lg h-12 placeholder:text-muted-foreground focus:border-[color:var(--brand)]"
            />
            <Input
              type="tel"
              placeholder="Phone Number"
              className="form-input rounded-lg h-12 placeholder:text-muted-foreground focus:border-[color:var(--brand)]"
            />
            <Textarea
              placeholder="Message"
              rows={5}
              className="form-input rounded-lg placeholder:text-muted-foreground focus:border-[color:var(--brand)] resize-none"
            />
            <div className="flex justify-center">
              <Button className="btn-primary rounded-lg h-12 font-medium px-8">Send Message</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
