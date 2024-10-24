import React from "react";
import { getAssignments } from "@/lib/data";

import { HiOutlineTrash } from "react-icons/hi2";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/_components/ui/table";

type AssignmentProps = {
  id: number;
  created_at: Date;
  assignment_name: string;
  due_date: string;
};

const AssignmentsPage = async () => {
  const assignments = await getAssignments();

  return (
    <div>
      <Table>
        <TableCaption>Your Assignments (<b>{assignments?.length}</b>)</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px] md:w-[400px]">Assignment Name</TableHead>
            <TableHead className="w-[200px]">Due Date</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assignments?.map((e: AssignmentProps) => {
            return (
              <TableRow>
                <TableCell className="font-medium">{e.assignment_name}</TableCell>
                <TableCell>{e.due_date}</TableCell>
                <TableCell className="text-lg flex justify-end"><HiOutlineTrash className="cursor-pointer"/></TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default AssignmentsPage;
