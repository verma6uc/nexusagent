
  import React from \'react\'
  import { Routes, Route } from \'react-router-dom\'
  import MainLayout from \'./layouts/MainLayout\'
  import HomePage from \'./pages/HomePage\' // Ensure HomePage is correctly imported

  // Import other Page components when they are created
  // import CapabilitiesHub from \'./pages/CapabilitiesHub/CapabilitiesHub\';
  // import ExperienceNexus from \'./pages/ExperienceNexus/ExperienceNexus\';
  // import IntelligenceCenter from \'./pages/IntelligenceCenter/IntelligenceCenter\';
  // import SuccessStories from \'./pages/SuccessStories/SuccessStories\';

  // Placeholder component for pages not yet created
  function PlaceholderPage({ title }: { title: string }) {
    return &lt;div className="text-center py-10"&gt;Placeholder for {title} Page&lt;/div&gt;
  }

  function App() {
    return (
      &lt;Routes&gt;
        {/* MainLayout wraps pages with common structure (header, footer) */}
        &lt;Route path="/" element={&lt;MainLayout /&gt;}&gt;
          {/* The index route renders HomePage at the root URL ("/") */}
          &lt;Route index element={&lt;HomePage /&gt;} /&gt;

          {/* Other placeholder routes */}
          &lt;Route path="capabilities" element={&lt;PlaceholderPage title="Capabilities Hub" /&gt;} /&gt;
          &lt;Route path="experience" element={&lt;PlaceholderPage title="Experience Nexus" /&gt;} /&gt;
          &lt;Route path="intelligence" element={&lt;PlaceholderPage title="Intelligence Center" /&gt;} /&gt;
          &lt;Route path="success-stories" element={&lt;PlaceholderPage title="Success Stories" /&gt;} /&gt;

          {/* Add other routes nested within MainLayout as needed */}
          {/* Example placeholder routes for footer links */}
          &lt;Route path="privacy-policy" element={&lt;PlaceholderPage title="Privacy Policy" /&gt;} /&gt;
          &lt;Route path="terms-of-service" element={&lt;PlaceholderPage title="Terms of Service" /&gt;} /&gt;
        &lt;/Route&gt;
      &lt;/Routes&gt;
    )
  }

  export default App
  