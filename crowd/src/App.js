import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CampaignList from './components/Campaigns/CampaignList';
import CampaignForm from './components/Campaigns/CampaignForm';

function App() {
  return (
    <Router>
      <div>
        <h1>FastAPI Campaign Management</h1>
        <Routes>
          <Route path="/" element={<CampaignList />} />
          <Route path="/create" element={<CampaignForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
