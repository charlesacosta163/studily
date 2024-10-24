import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_components/ui/accordion";

const Questions = () => {
  return (
    <section className="section bg-blue-100 flex items-center justify-center">
      <div className="max-w-[800px] w-full">
        <h2 className="h2 mb-4">Frequently asked questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className= 'text-left'>
              How does HomeworkHub help students stay organized?
            </AccordionTrigger>
            <AccordionContent>
              HomeworkHub provides a centralized platform for students to track
              all their assignments, set reminders for due dates, and visualize
              their progress. This helps students prioritize their work and
              manage their time more effectively.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className= 'text-left'>
              Can teachers use HomeworkHub to manage their classes?
            </AccordionTrigger>
            <AccordionContent>
              Yes, teachers can use HomeworkHub to create and assign homework,
              track student progress, and communicate with students about their
              assignments. The School plan includes a teacher dashboard with
              these features.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className= 'text-left'>
              Is HomeworkHub available on mobile devices?
            </AccordionTrigger>
            <AccordionContent>
              Yes, HomeworkHub is available as a web application that works on
              all devices, including smartphones and tablets. We also have
              native mobile apps for iOS and Android for a seamless mobile
              experience.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className= 'text-left'>
              How secure is my data on HomeworkHub?
            </AccordionTrigger>
            <AccordionContent>
              We take data security very seriously. All data is encrypted in
              transit and at rest, and we follow best practices for data
              protection. We never share or sell user data to third parties.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Questions;
