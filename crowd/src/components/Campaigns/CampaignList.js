import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CampaignList.css'; // Import the CSS

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/campaigns/')
      .then((response) => {
        console.log(response.data);
        setCampaigns(response.data);
      })
      .catch((error) => {
        console.error('Error fetching campaigns:', error);
        setError('Failed to fetch campaigns');
      });
  }, []);

  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="campaign-list-container">
      <h1>Campaigns</h1>
      <div className="campaign-card-container">
        {campaigns.map((campaign) => (
          <div className="campaign-card" key={campaign.camp_id}>
            <h2 className="campaign-title">{campaign.title}</h2>
            <p className="campaign-cause">{campaign.cause}</p>
            <p className="campaign-details">
              <strong>Raised:</strong> ${campaign.raised_amount} / ${campaign.target_amount}
            </p>
            <p className="campaign-dates">
              <strong>Start:</strong> {new Date(campaign.start_date).toLocaleDateString()} &nbsp;|&nbsp; 
              <strong> End:</strong> {new Date(campaign.end_date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignList;
