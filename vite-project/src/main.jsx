import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './assets/css/header.css'
import './assets/css/topProduct.css'
import './assets/css/featured.css'
import './assets/css/bestSelling.css'
import './assets/css/footer.css'
import './assets/css/showCase.css'
import './assets/css/product.css'
import './assets/css/about.css'
import './assets/css/team.css'
import './assets/css/prop.css'
import './assets/css/pricing.css'
import './assets/css/trial.css'
import { Provider } from 'react-redux'
import { store } from './component/redux/store.js'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

const persistor = persistStore(store)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
