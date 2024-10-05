"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function Page() {
  return (
    <section>
      <h1 className="h1">Hello John!</h1>

      <div className="flex flex-col md:flex-row gap-4 md:flex-wrap mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Quick Add</CardTitle>
            <CardDescription>
              Set the date for your assignments!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Assignment Name
                </label>
                <Input
                  type="text"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter assignment name"
                />
              </div>
              <div className="mb-4 self-start">
                <label className="block text-sm font-medium mb-1">
                  Due Date
                </label>
                <Input
                  type="date"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <Button
                className="w-full bg-black text-white py-2 rounded"
              >
                + Add Assignment
              </Button>
            </form>
            
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
