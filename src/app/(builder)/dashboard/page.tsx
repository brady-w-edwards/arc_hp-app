/**
 * v0 by Vercel.
 * @see https://v0.dev/t/t2KSW36vZnY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "../../../components/ui/navigation-menu"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../../components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../../../components/ui/table"
import { Button } from "../../../components/ui/button"
import { CartesianGrid, XAxis, Line, LineChart } from "recharts"
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "../../../components/ui/chart"
import { Avatar, AvatarImage, AvatarFallback } from "@/src/components/ui/avatar"
import { User, icons } from "lucide-react"


export default function CoachDashboard() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>
                <User></User>
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-lg font-bold">John Doe</h1>
              <p className="text-sm text-muted-foreground">Strength Coach</p>
            </div>
          </div>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                prefetch={false}
              >
                Dashboard
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                prefetch={false}
              >
                Athletes
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                prefetch={false}
              >
                Programs
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                prefetch={false}
              >
                Settings
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
      <main className="flex-1 px-4 py-8 sm:px-6 md:py-10 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="grid gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Athlete Progress</CardTitle>
                  <CardDescription>Track progress over time.</CardDescription>
                </CardHeader>
                <CardContent>
                  <LinechartChart className="aspect-[4/3]" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Workout History</CardTitle>
                  <CardDescription>Review workout history.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Workout</TableHead>
                        <TableHead>Duration</TableHead>
                        <TableHead>Intensity</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>2023-06-01</TableCell>
                        <TableCell>Squat</TableCell>
                        <TableCell>60 min</TableCell>
                        <TableCell>High</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2023-05-30</TableCell>
                        <TableCell>Bench Press</TableCell>
                        <TableCell>45 min</TableCell>
                        <TableCell>Moderate</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2023-05-28</TableCell>
                        <TableCell>Deadlift</TableCell>
                        <TableCell>75 min</TableCell>
                        <TableCell>High</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2023-05-25</TableCell>
                        <TableCell>Overhead Press</TableCell>
                        <TableCell>30 min</TableCell>
                        <TableCell>Moderate</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2023-05-23</TableCell>
                        <TableCell>Squat</TableCell>
                        <TableCell>60 min</TableCell>
                        <TableCell>High</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Personal Records</CardTitle>
                  <CardDescription>View personal records.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium">Squat</h3>
                        <p className="text-muted-foreground">Current Record: 315 lbs</p>
                      </div>
                      <div className="text-2xl font-bold">315 lbs</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium">Bench Press</h3>
                        <p className="text-muted-foreground">Current Record: 225 lbs</p>
                      </div>
                      <div className="text-2xl font-bold">225 lbs</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium">Deadlift</h3>
                        <p className="text-muted-foreground">Current Record: 405 lbs</p>
                      </div>
                      <div className="text-2xl font-bold">405 lbs</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium">Overhead Press</h3>
                        <p className="text-muted-foreground">Current Record: 135 lbs</p>
                      </div>
                      <div className="text-2xl font-bold">135 lbs</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="grid gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Workouts</CardTitle>
                <CardDescription>View upcoming workouts.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium">Squat</h3>
                      <p className="text-muted-foreground">Date: June 5, 2023</p>
                    </div>
                    <Button size="sm">View</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium">Bench Press</h3>
                      <p className="text-muted-foreground">Date: June 7, 2023</p>
                    </div>
                    <Button size="sm">View</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium">Deadlift</h3>
                      <p className="text-muted-foreground">Date: June 10, 2023</p>
                    </div>
                    <Button size="sm">View</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium">Overhead Press</h3>
                      <p className="text-muted-foreground">Date: June 12, 2023</p>
                    </div>
                    <Button size="sm">View</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Athlete Notes</CardTitle>
                <CardDescription>Review your notes and observations about your athlete.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div>
                    <h3 className="text-lg font-medium">Mobility Issues</h3>
                    <p className="text-muted-foreground">
                      Athlete has been struggling with tight hips and ankles. Recommend additional mobility work.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Nutrition Concerns</h3>
                    <p className="text-muted-foreground">
                      Athlete has been inconsistent with their nutrition plan. Need to have a discussion about the
                      importance of proper nutrition for their goals.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Sleep Habits</h3>
                    <p className="text-muted-foreground">
                      Athlete has been reporting poor sleep quality. Recommend adjusting their sleep routine and
                      environment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
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