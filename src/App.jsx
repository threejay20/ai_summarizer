// Import the "Hero" and "Demo" components from their respective files
import Hero from './components/Hero';
import Demo from './components/Demo';

// Import CSS styles from the "App.css" file
import './App.css';

// Define the main application component called "App"
const App = () => {
  return (
    // Create the main content container
    <main>
      {/* Create a section with a gradient background */}
      <div className="main">
        <div className="gradient" />
      </div>

      {/* Create the main content area */}
      <div className="app">
        {/* Include the "Hero" component for the application's header */}
        <Hero />
        
        {/* Include the "Demo" component for the main application functionality */}
        <Demo />
      </div>
    </main>
  )
}

// Export the "App" component as the default export
export default App;
