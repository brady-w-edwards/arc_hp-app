/**
 * v0 by Vercel.
 * @see https://v0.dev/t/zFQNtMJXd65
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "../../../components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../../../components/ui/table"
import { CartesianGrid, XAxis, Line, LineChart } from "recharts"
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "../../../components/ui/chart"
import { Avatar, AvatarImage, AvatarFallback } from "@/src/components/ui/avatar"
import { User, icons } from "lucide-react"

export default function AthleteDashboard() {
  return (
    <div className="flex flex-col h-full w-full bg-background">
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center gap-4">
          <DumbbellIcon className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-bold">Athlete Dashboard</h1>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
            Settings
          </Link>
          <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>
                <User></User>
              </AvatarFallback>
            </Avatar>
        </div>
      </header>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <Card>
          <CardHeader>
            <CardTitle>Current Training Program</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="text-sm text-muted-foreground">Workout Plan</div>
              <div className="text-lg font-medium">Strength Training</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Sets</div>
              <div className="text-lg font-medium">4</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Reps</div>
              <div className="text-lg font-medium">8-10</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Weight</div>
              <div className="text-lg font-medium">225 lbs</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <LinechartChart className="w-full aspect-[9/4]" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Nutrition & Recovery</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="text-sm text-muted-foreground">Sleep</div>
              <div className="text-lg font-medium">8 hrs</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Hydration</div>
              <div className="text-lg font-medium">3 L</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Supplements</div>
              <div className="text-lg font-medium">Whey Protein, Creatine</div>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-1 md:col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle>Upcoming Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2 text-center">
              <div className="text-xs text-muted-foreground">Sun</div>
              <div className="text-xs text-muted-foreground">Mon</div>
              <div className="text-xs text-muted-foreground">Tue</div>
              <div className="text-xs text-muted-foreground">Wed</div>
              <div className="text-xs text-muted-foreground">Thu</div>
              <div className="text-xs text-muted-foreground">Fri</div>
              <div className="text-xs text-muted-foreground">Sat</div>
              <div className="bg-muted rounded-md py-2">
                <div className="text-sm font-medium">Squat</div>
                <div className="text-xs text-muted-foreground">4 x 8-10</div>
              </div>
              <div className="bg-muted rounded-md py-2">
                <div className="text-sm font-medium">Bench Press</div>
                <div className="text-xs text-muted-foreground">4 x 8-10</div>
              </div>
              <div className="bg-muted rounded-md py-2">
                <div className="text-sm font-medium">Deadlift</div>
                <div className="text-xs text-muted-foreground">4 x 6-8</div>
              </div>
              <div className="bg-muted rounded-md py-2">
                <div className="text-sm font-medium">Overhead Press</div>
                <div className="text-xs text-muted-foreground">4 x 8-10</div>
              </div>
              <div className="bg-muted rounded-md py-2">
                <div className="text-sm font-medium">Barbell Row</div>
                <div className="text-xs text-muted-foreground">4 x 8-10</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-1 md:col-span-2 lg:col-span-2">
          <CardHeader>
            <CardTitle>Training History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Workout</TableHead>
                  <TableHead>Lift</TableHead>
                  <TableHead>Weight</TableHead>
                  <TableHead>Reps</TableHead>
                  <TableHead>PR</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>2023-06-01</TableCell>
                  <TableCell>Strength Training</TableCell>
                  <TableCell>Squat</TableCell>
                  <TableCell>225 lbs</TableCell>
                  <TableCell>10</TableCell>
                  <TableCell>
                    <CheckIcon className="w-5 h-5 text-green-500" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-05-25</TableCell>
                  <TableCell>Strength Training</TableCell>
                  <TableCell>Bench Press</TableCell>
                  <TableCell>185 lbs</TableCell>
                  <TableCell>8</TableCell>
                  <TableCell>
                    <CheckIcon className="w-5 h-5 text-green-500" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-05-18</TableCell>
                  <TableCell>Strength Training</TableCell>
                  <TableCell>Deadlift</TableCell>
                  <TableCell>315 lbs</TableCell>
                  <TableCell>6</TableCell>
                  <TableCell>
                    <CheckIcon className="w-5 h-5 text-green-500" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-05-11</TableCell>
                  <TableCell>Strength Training</TableCell>
                  <TableCell>Overhead Press</TableCell>
                  <TableCell>135 lbs</TableCell>
                  <TableCell>10</TableCell>
                  <TableCell>
                    <CheckIcon className="w-5 h-5 text-green-500" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-05-04</TableCell>
                  <TableCell>Strength Training</TableCell>
                  <TableCell>Barbell Row</TableCell>
                  <TableCell>185 lbs</TableCell>
                  <TableCell>10</TableCell>
                  <TableCell>
                    <CheckIcon className="w-5 h-5 text-green-500" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
      <footer className="flex justify-center gap-4 p-4 border-t">
        <Link
          href="#"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          View Athlete Profile
        </Link>
        <Link
          href="#"
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Export Data
        </Link>
      </footer>
    </div>
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


function DumbbellIcon(props: any) {
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
      <path d="M14.4 14.4 9.6 9.6" />
      <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" />
      <path d="m21.5 21.5-1.4-1.4" />
      <path d="M3.9 3.9 2.5 2.5" />
      <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z" />
    </svg>
  )
}


function LinechartChart(props: any) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
      >
        <LineChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Line dataKey="desktop" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
        </LineChart>
      </ChartContainer>
    </div>
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