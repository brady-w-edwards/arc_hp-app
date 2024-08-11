/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8HNOJBXHRYP
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/src/components/ui/input"
import { Button } from "@/src/components/ui/button"
import Link from "next/link"

export default function AboutComponent() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6 flex flex-col items-center text-center gap-4">
          <MountainIcon className="h-12 w-12" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Acme Inc.</h1>
          <p className="max-w-[700px] text-lg md:text-xl">
            Acme Inc. is a leading provider of innovative software solutions that empower businesses to thrive in the
            digital age.
          </p>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold mb-4">About Us</h2>
              <p className="text-muted-foreground">
                Acme Inc. was founded in 2010 with the mission of providing innovative software solutions to businesses
                of all sizes. Over the years, we have grown to become a leading provider in the industry, known for our
                commitment to quality, customer satisfaction, and continuous innovation.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Team</h2>
              <p className="text-muted-foreground">
                At the heart of Acme Inc. is our talented and dedicated team of software engineers, designers, and
                business professionals. We pride ourselves on fostering a collaborative and inclusive work environment
                that encourages creativity and innovation.
              </p>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20 bg-muted">
          <div className="container px-4 md:px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
              <p className="text-muted-foreground">
                At Acme Inc., we believe in a collaborative and customer-centric approach to software development. We
                work closely with our clients to understand their unique needs and challenges, and then develop tailored
                solutions that drive tangible business results.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Expertise</h2>
              <p className="text-muted-foreground">
                Our team of experts has deep experience in a wide range of software technologies and industries. From
                web development and mobile apps to cloud computing and data analytics, we have the skills and knowledge
                to tackle any challenge our clients face.
              </p>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
              <div>
                <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                <p className="text-muted-foreground mb-4">
                  Stay up to date with the latest news and updates from Acme Inc.
                </p>
                <form className="flex gap-2">
                  <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                  <Button type="submit">Sign Up</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted p-6 md:p-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link href="#" prefetch={false}>
              About Us
            </Link>
            <Link href="#" prefetch={false}>
              Our Team
            </Link>
            <Link href="#" prefetch={false}>
              Careers
            </Link>
            <Link href="#" prefetch={false}>
              News
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Products</h3>
            <Link href="#" prefetch={false}>
              Men
            </Link>
            <Link href="#" prefetch={false}>
              Women
            </Link>
            <Link href="#" prefetch={false}>
              Kids
            </Link>
            <Link href="#" prefetch={false}>
              Accessories
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#" prefetch={false}>
              Blog
            </Link>
            <Link href="#" prefetch={false}>
              Community
            </Link>
            <Link href="#" prefetch={false}>
              Support
            </Link>
            <Link href="#" prefetch={false}>
              FAQs
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" prefetch={false}>
              Cookie Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link href="#" prefetch={false}>
              Support
            </Link>
            <Link href="#" prefetch={false}>
              Sales
            </Link>
            <Link href="#" prefetch={false}>
              Press
            </Link>
            <Link href="#" prefetch={false}>
              Partnerships
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}