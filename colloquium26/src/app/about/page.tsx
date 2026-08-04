import BackgroundField from "@/components/BackgroundField";
import PageHeader from "@/components/PageHeader";

export default function AboutPage() {
  return (
    <>
      <BackgroundField />
      <PageHeader
        eyebrow="About the event"
        title="COLLOQUIUM'26"
        description="The Future is Agentic. COLLOQUIUM'26 explores the next chapter of Artificial Intelligence through the lens of Agentic AI. Bringing together industry experts, researchers, and professionals, the event focuses on autonomous AI systems, human-AI collaboration, AI security, responsible innovation, and intelligent workflows. With expert talks, panel discussions, networking, and a hands-on workshop, COLLOQUIUM'26 offers a platform to learn, exchange ideas, and explore how Agentic AI is shaping the future of technology."
      />

      <section className="px-6 pb-16 sm:pb-28">
        <div className="mx-auto max-w-3xl space-y-12 text-muted">
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground">Why Attend?</h3>
            <ul className="mt-4 list-disc pl-5 space-y-2">
              <li>Gain practical insights into the latest developments in Agentic AI.</li>
              <li>Learn directly from experienced industry professionals.</li>
              <li>Expand your professional network with experts and peers.</li>
              <li>Explore emerging trends shaping the future of AI.</li>
              <li>Be part of conversations that inspire innovation and collaboration.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold text-foreground">About COLLOQUIUM</h3>
            <p className="mt-4">
              COLLOQUIUM is the flagship professional initiative of the Graduate Student Activities Committee of the IEEE Computer Society Kerala Chapter, created to bridge the gap between industry and emerging technologies. Every edition focuses on a technology shaping tomorrow, bringing together experts and professionals to exchange ideas, inspire innovation, and encourage meaningful collaboration.
            </p>
          </div>
          
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground">COLLOQUIUM&apos;25</h3>
            <p className="mt-4">
              COLLOQUIUM&apos;25 explored the evolving world of User Experience (UX), bringing together industry professionals and technology enthusiasts to discuss the principles behind designing intuitive, accessible, and impactful digital experiences. Through expert sessions and engaging discussions, the event highlighted how thoughtful design and innovation shape the way people interact with technology.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center mt-12">
            <h3 className="font-display text-lg font-bold text-foreground">About IEEE</h3>
            <p className="mt-4">
              IEEE is the world&apos;s largest technical professional organization dedicated to advancing technology for humanity. Through its global community of engineers, researchers, and innovators, IEEE promotes technical excellence, collaboration, and lifelong learning across diverse fields of engineering and technology.
            </p>
            <h3 className="font-display text-lg font-bold text-foreground mt-8">About CSKS</h3>
            <p className="mt-4">
              The IEEE Computer Society Kerala Chapter, established in 1985, is one of the world&apos;s largest Computer Society Chapters, with 48 Student Branch Chapters and over 4,060 members. For four decades, it has advanced computing through technical initiatives, flagship events, and a dedicated volunteer community, earning prestigious recognitions from both the IEEE Computer Society and the IEEE Kerala Section. Today, the chapter continues to bring together students, professionals, and researchers through initiatives that promote learning, collaboration, and technical excellence.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
