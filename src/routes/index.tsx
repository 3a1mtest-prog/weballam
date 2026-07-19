import { createFileRoute } from "@tanstack/react-router";
import { SiteEffects } from "../components/site/SiteEffects";
import { Hero, Nav, Playground, Profile, Reels } from "../components/site/sections";

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
        <Reels />
        <Playground />
      </main>
    </div>
  );
}
