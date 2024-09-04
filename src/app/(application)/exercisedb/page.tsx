import React from "react";
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/src/components/ui/pagination"
import { Button } from "@/src/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table"
import {
  PlusCircle
} from "lucide-react"



export default function ExerciseDatabase() {
  return (
    <div className="p-4">
    <Button size="sm" className="right-10 h-8 gap-1">
      <PlusCircle className="h-3.5 w-3.5" />
      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
        Add Exercise
      </span>
    </Button>
    <Card>
      <CardHeader>
        <CardTitle>Exercises</CardTitle>
        <CardDescription>List and classification of exercises</CardDescription>
      </CardHeader>
      <CardContent>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-56">Name</TableHead>
            <TableHead className="w-32">Type</TableHead>
            <TableHead className="w-10">Difficulty</TableHead>
            <TableHead className="w-10">Where Used</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Barbell Back Squat</TableCell>
            <TableCell>Lower</TableCell>
            <TableCell>Beginner/Intermediate</TableCell>
            <TableCell className="">1</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      </CardContent>
      <CardFooter>
        
      </CardFooter>
    </Card>
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
    </div>
  )
}