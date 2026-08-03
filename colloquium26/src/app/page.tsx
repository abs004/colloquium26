import BackgroundField from "@/components/BackgroundField";
import Hero from "@/components/Hero";
import Venue from "@/components/Venue";
import Speakers from "@/components/Speakers";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <>
      <BackgroundField />
      <Hero />
      <Venue />
      <Speakers />
      <Sponsors />
    </>
  );
}
