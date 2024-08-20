import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex w-full h-full">
      <Sidebar />
      <div className="w-full flex flex-col ml-0 md:ml-36">
        <Navbar />
        <div className="relative top-[-100px] overflow-y-auto px-8 md:px-20 py-8">
          {children}
        </div>
      </div>
    </main>
  );
}
