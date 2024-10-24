import Sidebar from "@/app/_components/ui-dash/sidebar";
import Header from "@/app/_components/ui-dash/header";
import { Toaster } from "@/app/_components/ui/toaster"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full min-h-screen flex">
      <Sidebar />

      <main className="flex-1 flex flex-col w-full bg-gray-50">
        <Header />
        <div className="flex-1 md:p-8 p-4 self-center md:self-start w-full">{children}</div>
      </main>
      <Toaster />
    </div>
  );
}
