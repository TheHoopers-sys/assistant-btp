export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 py-16 text-center sm:px-8">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          ASSISTANT BTP
        </h1>
        <p className="mt-4 max-w-md text-base leading-7 text-muted sm:text-lg">
          L&apos;assistant quotidien des indépendants du BTP.
        </p>
        <a
          href="#commencer"
          className="mt-8 inline-flex h-11 items-center justify-center rounded-md bg-accent px-6 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
        >
          Commencer
        </a>
      </main>
    </div>
  );
}
