import Description from "@/components/Description";
import Hero from "@/components/Hero";
import Marque from "@/components/Marque";
import Testimonials from "@/components/Testimonials";
import WorkwithUs from "@/components/WorkwithUs";

export default function Home() {
  return (
    <div className="bg-[lightgrey]">
      <Hero />
      <Marque />
      <Description />
      <Testimonials />
      <WorkwithUs />
    </div>
  );
}
