import BackgroundField from "@/components/BackgroundField";
import PageHeader from "@/components/PageHeader";
import { Mail } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

export default function ContactPage() {
  return (
    <>
      <BackgroundField />
      <PageHeader
        eyebrow="Get in touch"
        title="Contact us"
        description="Questions about Colloquium'26 — sponsorship, speaking, or general queries? Reach out."
      />

      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
            <h3 className="font-display text-lg font-bold">Reach out directly</h3>
            <div className="mt-6 space-y-4 text-sm">
              <a href="mailto:cs@ieeekerala.org" className="flex items-center gap-3 text-muted hover:text-foreground">
                <Mail size={16} /> cs@ieeekerala.org
              </a>
              <a href="#" className="flex items-center gap-3 text-muted hover:text-foreground">
                <InstagramIcon size={16} /> @ieeecsks
              </a>
              <a href="#" className="flex items-center gap-3 text-muted hover:text-foreground">
                <LinkedinIcon size={16} /> IEEE CS Kerala Chapter
              </a>
            </div>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-widest text-muted">
              cs.ieeekerala.org
            </p>
          </div>

          <form className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
            <div className="space-y-4">
              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm outline-none focus:border-accent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm outline-none focus:border-accent"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm outline-none focus:border-accent"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
