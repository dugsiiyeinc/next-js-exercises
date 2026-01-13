
export default function DashboardLayout({
  children,
}: {children: React.ReactNode}) {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard Layout</h1>
      </header>
      <main>{children}</main>
    </div>
  )
}
