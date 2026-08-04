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

      <section className="px-6 pb-16 sm:pb-28">
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
                
                {item.speaker && (
                  <div className="mt-3">
                    <p className="text-sm font-semibold text-foreground">{item.speaker}</p>
                    <p className="text-xs text-muted">{item.role}</p>
                  </div>
                )}
                
                {item.panelists && (
                  <ul className="mt-3 space-y-2 border-l-2 border-white/10 pl-3">
                    {item.panelists.map((p, idx) => (
                      <li key={idx}>
                        <p className="text-sm font-semibold text-foreground">{p.name}</p>
                        <p className="text-xs text-muted">{p.role}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
