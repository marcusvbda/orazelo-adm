import Sidebar from "@/components/theme/sidebar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex w-full h-full">
      <Sidebar />
      <div className="w-full flex flex-col ml-0 md:ml-36">{children}</div>
    </main>
  );
}
