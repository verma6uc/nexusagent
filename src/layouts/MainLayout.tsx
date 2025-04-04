
  import React from 'react'
  import { Outlet } from 'react-router-dom'
  import Navbar from '@/components/Navbar'
  import Footer from '@/components/Footer'

  const MainLayout: React.FC = () => {
    return (
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Navbar />
        {/* Added container, mx-auto, px-4, and py-8 for consistent padding and centering */}
        <main className="flex-grow container mx-auto px-4 py-8">
          <Outlet />
        </main>
        <Footer />
      </div>
    )
  }

  export default MainLayout
  