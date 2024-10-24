"use client";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/app/_components/ui/toast";
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";

const QuickAddBtn = ({name, date}: {name: string, date: string}) => {
  const { toast } = useToast();

  return (
    <Button
      className="w-full bg-black text-white py-2 rounded"
      type="submit"
      onClick={() => {
        if (!name || !date) return

        // toast({
        //   title: name,
        //   description: date,
        //   action: <ToastAction altText="Try again"><Link href='/assignments'>View</Link></ToastAction>,
        // })
        }
      }
    >
      + Add Assignment
    </Button>
  );
};

export default QuickAddBtn;
