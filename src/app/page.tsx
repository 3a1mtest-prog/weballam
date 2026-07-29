export default function Page() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-2xl flex-col justify-center gap-4 px-6">
      <h1 className="text-3xl font-semibold tracking-tight">weballam</h1>
      <p className="text-neutral-600 dark:text-neutral-400">
        Clean slate. Start building in{" "}
        <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">
          src/app/page.tsx
        </code>
        .
      </p>
    </main>
  );
}
