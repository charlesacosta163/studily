import Navbar from "@/app/_components/ui-main/navbar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex flex-col">
        <Navbar />

        <main className="flex-1">
            {children}
        </main>
      </div>
    );
  }
  