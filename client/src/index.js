import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './components/Layout/Layout';
import Home from './screens/home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <Home />
    </Layout>
  </React.StrictMode>
);