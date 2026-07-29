import Image from "next/image";
import { projectGroups, type Project } from "@/config/portfolio";
import { Divider } from "@/components/Divider";

function Tile({ project }: { project: Project }) {
  const body = (
    <>
      <div className="relative aspect-[4/5] w-full">
        {project.image ? (
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(min-width: 640px) 30vw, 85vw"
            className="object-cover"
          />
        ) : (
          <div
            aria-hidden
            className="flex h-full w-full items-center justify-center bg-[radial-gradient(75%_65%_at_50%_35%,rgba(168,85,247,0.55)_0%,rgba(30,7,74,0.9)_55%,#050109_100%)]"
          >
            <span className="px-4 text-center font-display text-2xl font-black leading-tight tracking-tight text-white/90 sm:text-3xl">
              {project.name}
            </span>
          </div>
        )}
      </div>

      <div className="border-t border-silver/20 bg-black/55 p-4">
        <p className="font-display text-sm font-bold tracking-wide text-white">
          {project.name}
        </p>
        <p className="mt-0.5 text-[0.7rem] tracking-[0.14em] text-violet-bright">
          {project.tag}
        </p>
        <p className="mt-2 text-xs leading-relaxed text-silver/70">
          {project.summary}
        </p>
      </div>
    </>
  );

  return (
    <li className="frame">
      {project.href ? (
        <a
          href={project.href}
          className="block transition hover:brightness-110"
          target="_blank"
          rel="noreferrer"
        >
          {body}
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      ) : (
        body
      )}
    </li>
  );
}

/**
 * The work grids — three tiles per row, one row per client, with the deck's
 * divider bar closing each group.
 */
export function Projects() {
  return (
    <div className="relative overflow-hidden bg-ink">
      <div className="glow-violet pointer-events-none absolute inset-0" />

      <div className="relative">
        {projectGroups.map((group) => (
          <section key={group.client} className="pt-14 sm:pt-16">
            <div className="mx-auto w-full max-w-7xl px-6">
              <h3 className="mb-6 font-display text-xs font-bold tracking-[0.35em] text-silver/60">
                {group.client}
              </h3>
              <ul className="grid gap-5 sm:grid-cols-3 sm:gap-6">
                {group.projects.map((project) => (
                  <Tile key={project.name} project={project} />
                ))}
              </ul>
            </div>
            <Divider />
          </section>
        ))}
      </div>
    </div>
  );
}
