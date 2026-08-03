import BackgroundField from "@/components/BackgroundField";
import PageHeader from "@/components/PageHeader";
import { schedule } from "@/lib/data";

export default function SchedulePage() {
  return (
    <>
      <BackgroundField />
      <PageHeader
        eyebrow="Day of the event"
        title="Schedule"
        description="A rough shape of the day — final timings will be confirmed closer to the event."
      />

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-2xl">
          <ol className="relative border-l border-white/10 pl-8">
            {schedule.map((item, i) => (
              <li key={i} className="mb-10 last:mb-0">
                <span className="absolute -left-[7px] flex h-3.5 w-3.5 items-center justify-center rounded-full bg-accent ring-4 ring-background" />
                <p className="font-mono text-[11px] uppercase tracking-widest text-accent-soft">
                  {item.time}
                </p>
                <h3 className="font-display mt-1.5 text-xl font-bold">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
