// Import React and ReactDOM for rendering the React application
import React from 'react'
import ReactDOM from 'react-dom/client'

// Import the main "App" component from './App.jsx'
import App from './App.jsx'

// Import the "Provider" component from 'react-redux' to provide Redux store to the app
import { Provider } from 'react-redux'

// Import the Redux store created in './services/store'
import { store } from './services/store';

// Use ReactDOM.createRoot() to render the React app into the 'root' element
ReactDOM.createRoot(document.getElementById('root')).render(
  // Wrap the app in a <React.StrictMode> for development mode checks
  <React.StrictMode>
    {/* Provide the Redux store to the entire app using the "Provider" component */}
    <Provider store={store}>
      {/* Include the "App" component as the root component of the application */}
      <App />
    </Provider>
  </React.StrictMode>,
)
