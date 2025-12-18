import React from 'react';
import './ProsCons.css';

const ProsCons = () => {
  return (
    <section className="proscons">
      <div className="proscons-inner">
        <h2 className="proscons-title">The Difference Expert Guidance Makes</h2>

        <div className="proscons-grid">
          <div className="pc-card">
            <h3 className="pc-heading">Without an Expert</h3>
            <div className="pc-inner pc-inner-left">
              <ul>
                <li><span className="dot dot-pink" />High risk of plan rejection due to missed GHMC or Telangana rules</li>
                <li><span className="dot dot-pink" />Repeated revisions leading to wasted time and extra costs</li>
                <li><span className="dot dot-pink" />Confusion about what is right or wrong in the plan</li>
                <li><span className="dot dot-pink" />Delays in approvals affecting overall project timelines</li>
              </ul>
            </div>
          </div>

          <div className="pc-card">
            <h3 className="pc-heading">With an Expert</h3>
            <div className="pc-inner pc-inner-right">
              <ul>
                <li><span className="dot dot-blue" />Plans checked thoroughly against all required regulations</li>
                <li><span className="dot dot-blue" />Issues identified early, avoiding rework and delays</li>
                <li><span className="dot dot-blue" />Clear guidance on exactly what needs to be changed</li>
                <li><span className="dot dot-blue" />Faster, smoother approval process with confidence</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProsCons;
