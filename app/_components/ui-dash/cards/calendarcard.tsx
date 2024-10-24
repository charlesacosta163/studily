"use client";
import { useState } from "react";
import { Calendar } from "@/app/_components/ui/calendar";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Button } from "@/app/_components/ui/button";

const CalendarCard = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

//   console.log(date)

  return (
    <Card className="card w-full">
      <CardContent className="flex flex-col items-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md"
        />

        <Button className="w-full bg-black text-white rounded mt-4">
          Go to Calendar
        </Button>
      </CardContent>
    </Card>
  );
};

export default CalendarCard;
