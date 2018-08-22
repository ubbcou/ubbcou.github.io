import React from 'react';
import ReactDOM from 'react-dom';
import LalaTiNaPage from './views/LalaTiNa';
import './app.css'
const App = () => (
  <LalaTiNaPage />
)

if(document.getElementById('root')) {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
}