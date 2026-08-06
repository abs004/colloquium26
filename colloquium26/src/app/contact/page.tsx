import BackgroundField from "@/components/BackgroundField";
import PageHeader from "@/components/PageHeader";
import { Phone, Mail } from "lucide-react";
import Image from "next/image";
import { contacts } from "@/lib/data";

export default function ContactPage() {
  return (
    <>
      <BackgroundField />
      <PageHeader
        eyebrow="Get in touch"
        title="Contact us"
        description="Questions about Colloquium'26 — sponsorship, speaking, or general queries? Reach out."
      />

      <section className="px-6 pb-20 sm:pb-32">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
          {contacts.map((contact, i) => (
            <div
              key={i}
              className="group flex w-full max-w-sm flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div className="flex items-center gap-5">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-white/15 bg-white/5 ring-4 ring-white/5 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={contact.image}
                    alt={contact.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold tracking-wide text-foreground">
                    {contact.name}
                  </h3>
                  <p className="text-sm font-medium text-accent-soft">{contact.position}</p>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 text-xs font-medium text-foreground transition-colors hover:bg-white/10"
                >
                  <Mail size={14} className="text-muted" />
                  Email
                </a>
                <a
                  href={`tel:${contact.phone}`}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent/10 px-4 py-2.5 text-xs font-medium text-accent-soft transition-colors hover:bg-accent hover:text-white"
                >
                  <Phone size={14} />
                  Call
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
