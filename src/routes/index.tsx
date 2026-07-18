import { createFileRoute } from "@tanstack/react-router";
import { SiteEffects } from "../components/site/SiteEffects";
import { Hero, Nav, Playground, Profile } from "../components/site/sections";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="site">
      <SiteEffects />
      <Nav />
      <main>
        <Hero />
        <Profile />
        <Playground />
      </main>
    </div>
  );
}
