/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tYZy6YPqm5D
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function HeroCard() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-r from-primary to-primary/80">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary-foreground">
            Unlock Your Athletic Potential
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80">
            Streamline your programming, boost productivity, and drive adaptations.
          </p>
          <div>
            <Link
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              prefetch={false}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}