import BackgroundField from "@/components/BackgroundField";
import PageHeader from "@/components/PageHeader";
import VineTimeline from "@/components/VineTimeline";
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

      <section className="relative isolate px-0 pb-16 sm:pb-28">
        <VineTimeline items={schedule} />
      </section>
    </>
  );
}
