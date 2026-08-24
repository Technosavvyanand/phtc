import { ArrowRight, BookOpen, ExternalLink } from "lucide-react"

export function MABSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl border bg-muted/40 px-6 py-12 sm:px-10 lg:px-14">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium">
                <BookOpen className="h-4 w-4 text-primary" />
                Our Academic Support Platform
              </div>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Looking for assignment and academic support?
              </h2>

              <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
                Visit My Assignment Buddies, our dedicated academic support
                platform for students looking for assistance with assignments,
                dissertations, research work, editing, proofreading, and other
                academic requirements.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://myassignmentbuddies.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Visit My Assignment Buddies
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="https://myassignmentbuddies.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border bg-background px-6 py-3 text-sm font-semibold transition-colors hover:bg-muted"
                >
                  myassignmentbuddies.com
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="hidden lg:flex h-28 w-28 items-center justify-center rounded-2xl border bg-background shadow-sm">
              <BookOpen className="h-12 w-12 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}