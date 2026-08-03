import BackgroundField from "@/components/BackgroundField";
import PageHeader from "@/components/PageHeader";

const pillars = [
  {
    title: "Networking",
    detail:
      "A premier platform bringing IEEE and non-IEEE professionals together in one room.",
  },
  {
    title: "Insight",
    detail:
      "Talks and panels from practitioners working across cloud, AI, and emerging tech.",
  },
  {
    title: "Community",
    detail:
      "Organized by the IEEE Computer Society Kerala Chapter, for the Kerala tech community.",
  },
];

export default function AboutPage() {
  return (
    <>
      <BackgroundField />
      <PageHeader
        eyebrow="About the event"
        title="For professionals, by professionals"
        description="COLLOQUIUM is an annual event by the IEEE Computer Society Kerala Chapter, offering a unique opportunity to share insights, stay abreast of industry trends, and facilitate interactions across diverse technological domains."
      />

      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <h3 className="font-display text-lg font-bold text-accent-soft">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-muted">{p.detail}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
            A chapter of IEEE Computer Society
          </p>
          <p className="mt-4 text-muted">
            IEEE Computer Society drives progress in computer science and
            engineering by fostering collaboration among professionals worldwide.
            Through conferences, publications, and diverse programs, the society
            empowers leaders to drive innovation and make a positive global impact.
          </p>
        </div>
      </section>
    </>
  );
}
