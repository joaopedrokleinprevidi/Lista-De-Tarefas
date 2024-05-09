import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import store from './redux/store.ts'

import { GlobalStyle } from './styles/globalStyle.ts'

import App from './App.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
