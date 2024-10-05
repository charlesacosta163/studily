import Sidebar from "@/components/ui-dash/sidebar";
import Header from "@/components/ui-dash/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full min-h-screen flex">
      <Sidebar />

      <main className="flex-1 flex flex-col w-full">
        <Header />
        <div className="flex-1 bg-gray-50 p-8">{children}</div>
      </main>
    </div>
  );
}
