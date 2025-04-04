
  import React from 'react'
  import { Routes, Route } from 'react-router-dom'
  import MainLayout from './layouts/MainLayout'
  import HomePage from './pages/HomePage' // Ensure HomePage is correctly imported

  // Import other Page components when they are created
  // import CapabilitiesHub from './pages/CapabilitiesHub/CapabilitiesHub';
  // import ExperienceNexus from './pages/ExperienceNexus/ExperienceNexus';
  // import IntelligenceCenter from './pages/IntelligenceCenter/IntelligenceCenter';
  // import SuccessStories from './pages/SuccessStories/SuccessStories';

  // Placeholder component for pages not yet created
  function PlaceholderPage({ title }: { title: string }) {
    return <div className="text-center py-10">Placeholder for {title} Page</div>
  }

  function App() {
    return (
      <Routes>
        {/* MainLayout wraps pages with common structure (header, footer) */}
        <Route path="/" element={<MainLayout />}>
          {/* The index route renders HomePage at the root URL ("/") */}
          <Route index element={<HomePage />} />

          {/* Other placeholder routes */}
          <Route path="capabilities" element={<PlaceholderPage title="Capabilities Hub" />} />
          <Route path="experience" element={<PlaceholderPage title="Experience Nexus" />} />
          <Route path="intelligence" element={<PlaceholderPage title="Intelligence Center" />} />
          <Route path="success-stories" element={<PlaceholderPage title="Success Stories" />} />

          {/* Add other routes nested within MainLayout as needed */}
          {/* Example placeholder routes for footer links */}
          <Route path="privacy-policy" element={<PlaceholderPage title="Privacy Policy" />} />
          <Route path="terms-of-service" element={<PlaceholderPage title="Terms of Service" />} />
        </Route>
      </Routes>
    )
  }

  export default App
  