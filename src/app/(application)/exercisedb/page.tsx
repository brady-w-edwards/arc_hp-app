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


export default function ExerciseDatabase() {
  return (
    <>
    <Button>Add Exercise</Button>
    <Card>
      <CardHeader>
        <CardTitle>Exercises</CardTitle>
        <CardDescription>Complete list of exercises to be used in the programming section</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          exercise 1
          exercise 2
          exercise 3 
        </p>
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
    </>
  )
}