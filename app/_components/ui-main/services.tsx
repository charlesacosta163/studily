import React from "react";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
} from "../ui/card";

import { IoMdBook } from "react-icons/io";

let featuresArr = [
  {
    icon: <IoMdBook />,
    title: "Smart Reminders",
    description:
      "Never miss a deadline again with our intelligent reminder system.",
    content:
      "Get notified about upcoming assignments and tests based on your personal schedule and workload.",
  },
  {
    icon: <IoMdBook />,
    title: "Smart Reminders",
    description:
      "Never miss a deadline again with our intelligent reminder system.",
    content:
      "Get notified about upcoming assignments and tests based on your personal schedule and workload.",
  },
  {
    icon: <IoMdBook />,
    title: "Smart Reminders",
    description:
      "Never miss a deadline again with our intelligent reminder system.",
    content:
      "Get notified about upcoming assignments and tests based on your personal schedule and workload.",
  },
  {
    icon: <IoMdBook />,
    title: "Smart Reminders",
    description:
      "Never miss a deadline again with our intelligent reminder system.",
    content:
      "Get notified about upcoming assignments and tests based on your personal schedule and workload.",
      
  },
];

const Services = () => {
  return (
    <section className="section flex flex-col items-center gap-8">
      <div className="text-center max-w-[600px] w-full">
        <h2 className="h2">A better way to manage your homework</h2>
        <p className="p">
          Studily provides all the tools you need to stay on top of your
          assignments and improve your academic performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[800px]">
        {featuresArr.map((feature, index) => (
          <Card key={index} className="bg-blue-500 text-white rounded-xl hover:bg-[#0fa7f3] duration-200 group">
            <CardHeader>
              <CardTitle className="text-blue-100 flex items-center gap-2">
                <span className="h-10 w-10 flex justify-center items-center bg-blue-600 rounded-md text-white text-2xl group-hover:bg-blue-500">
                  {feature.icon}
                </span>
                <span>{feature.title}</span>
              </CardTitle>
              <CardDescription className="text-gray-50">
                {feature.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {feature.content}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
