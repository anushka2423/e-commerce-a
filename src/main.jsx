import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import './index.css'
import App from './App.jsx'
import { store, persistor } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PersistGate persistor={persistor}>
    <Provider store={store}>
    <Router>
      <App />
    </Router>
    </Provider>
    </PersistGate>
  </StrictMode>,
)
