import { Cover } from "@/components/sections/Cover";
import { IndexSlide } from "@/components/sections/IndexSlide";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Guarantees } from "@/components/sections/Guarantees";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Closing } from "@/components/sections/Closing";
import { Divider } from "@/components/Divider";
import { SectionTitle } from "@/components/SectionTitle";

/**
 * The deck, read top to bottom: cover, contents, then the four numbered
 * sections, each announced by its own lit plate and closed by a divider.
 */
export default function Page() {
  return (
    <main>
      <Cover />
      <IndexSlide />

      <About />
      <Services />
      <Guarantees />
      <Divider />

      <SectionTitle id="projects">PROJECTS</SectionTitle>
      <Projects />

      <SectionTitle id="stack">
        TECH
        <br />
        STACK
      </SectionTitle>
      <TechStack />
      <Divider />

      <SectionTitle id="case-studies">
        CASE
        <br />
        STUDIES
      </SectionTitle>
      <CaseStudies />

      <Closing />
    </main>
  );
}
