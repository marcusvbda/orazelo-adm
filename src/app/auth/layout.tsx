export default function LayoutAuth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex bg-white">
      <div className="flex-1 flex-col justify-between h-screen flex overflow-y-auto scroll-custom">
        <div className="w-8/12 self-center bg-[url('/login-bg.svg')] bg-no-repeat bg-top">
          {children}
        </div>
        <div className="p-10 text-neutral-500 text-xs text-center md:text-left">
          © Orazelo {currentYear}
        </div>
      </div>
      <div className="hidden flex-1 h-screen md:flex items-center justify-center bg-[url('/auth-bg.svg')] bg-no-repeat bg-cover" />
    </div>
  );
}
