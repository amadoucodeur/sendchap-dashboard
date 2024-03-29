import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[var(--bg)] py-8 px-12 gap-6 flex flex-col">
      <Header />
      <section>{children}</section>
    </div>
  );
}
