/**
 * v0 by Vercel.
 * @see https://v0.dev/t/g8iINInikUD
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/src/components/ui/button"

export default function PriceCard() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4 py-12">
      <div className="bg-background rounded-lg shadow-lg overflow-hidden">
        <div className="bg-primary text-primary-foreground py-4 px-6 text-center">
          <h3 className="text-2xl font-bold">Starter</h3>
        </div>
        <div className="py-8 px-6 text-center">
          <p className="text-4xl font-bold">$9</p>
          <p className="text-muted-foreground text-sm">per month</p>
        </div>
        <div className="border-t border-muted px-6 py-4 grid gap-3">
          <div className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5 text-primary" />
            <span>5 GB storage</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5 text-primary" />
            <span>1 user</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5 text-primary" />
            <span>Basic support</span>
          </div>
        </div>
        <div className="px-6 py-4">
          <Button className="w-full">Get Started</Button>
        </div>
      </div>
      <div className="bg-background rounded-lg shadow-lg overflow-hidden">
        <div className="bg-primary text-primary-foreground py-4 px-6 text-center">
          <h3 className="text-2xl font-bold">Pro</h3>
        </div>
        <div className="py-8 px-6 text-center">
          <p className="text-4xl font-bold">$19</p>
          <p className="text-muted-foreground text-sm">per month</p>
        </div>
        <div className="border-t border-muted px-6 py-4 grid gap-3">
          <div className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5 text-primary" />
            <span>50 GB storage</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5 text-primary" />
            <span>5 users</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5 text-primary" />
            <span>Priority support</span>
          </div>
        </div>
        <div className="px-6 py-4">
          <Button className="w-full">Get Started</Button>
        </div>
      </div>
      <div className="bg-background rounded-lg shadow-lg overflow-hidden">
        <div className="bg-primary text-primary-foreground py-4 px-6 text-center">
          <h3 className="text-2xl font-bold">Enterprise</h3>
        </div>
        <div className="py-8 px-6 text-center">
          <p className="text-4xl font-bold">$49</p>
          <p className="text-muted-foreground text-sm">per month</p>
        </div>
        <div className="border-t border-muted px-6 py-4 grid gap-3">
          <div className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5 text-primary" />
            <span>Unlimited storage</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5 text-primary" />
            <span>Unlimited users</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5 text-primary" />
            <span>Dedicated support</span>
          </div>
        </div>
        <div className="px-6 py-4">
          <Button className="w-full">Get Started</Button>
        </div>
      </div>
    </section>
  )
}

function CheckIcon(props: any) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function XIcon(props: any) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}