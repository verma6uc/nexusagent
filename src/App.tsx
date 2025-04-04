
  import React from 'react'
  import { Routes, Route } from 'react-router-dom'
  import MainLayout from './layouts/MainLayout'
  import HomePage from './pages/HomePage'
  // Import other Page components when they are created
  // import CapabilitiesHub from './pages/CapabilitiesHub/CapabilitiesHub';
  // import ExperienceNexus from './pages/ExperienceNexus/ExperienceNexus';
  // import IntelligenceCenter from './pages/IntelligenceCenter/IntelligenceCenter';
  // import SuccessStories from './pages/SuccessStories/SuccessStories';

  function PlaceholderPage({ title }: { title: string }) {
    return <div className="text-center py-10">Placeholder for {title} Page</div>
  }

  function App() {
    return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Use the actual HomePage component instead of placeholder */}
          <Route index element={<HomePage />} />
          <Route path="capabilities" element={<PlaceholderPage title="Capabilities Hub" />} />
          <Route path="experience" element={<PlaceholderPage title="Experience Nexus" />} />
          <Route path="intelligence" element={<PlaceholderPage title="Intelligence Center" />} />
          <Route path="success-stories" element={<PlaceholderPage title="Success Stories" />} />
          {/* Add other routes as needed */}
        </Route>
      </Routes>
    )
  }

  export default App
  