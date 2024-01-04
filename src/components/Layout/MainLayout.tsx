type MainLayoutProps = {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps): JSX.Element {
  return (
    <main id="main" className="h-screen flex overflow-hidden bg-red-50">
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="flex-1 relative overflow-y-auto focus:outline-none">
          {children}
        </div>
      </div>
    </main>
  )
}
