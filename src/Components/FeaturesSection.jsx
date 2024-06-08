import React from 'react';

const FeaturesSection = () => {
  return (
    <div className="features-section">
      <div className="img-container">
        <span className="bg-blur-red"></span>
        <img src="../../public/features-1.png" alt="Features" />
      </div>
      <div className="info-section">
        <div className="headings">
          <div className="h4">FEATURES</div>
          <div className="h2">Uifry Premium</div>
        </div>
        <div className="features-list">
          <div className="features-list-item">
            <img src="../../public/star-05.png" alt="Star" />
            <li>Budgeting Intervals</li>
          </div>
          <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
          <div className="features-list-item">
            <img src="../../public/cube-02.png" alt="Cube" />
            <li>Budgeting Intervals</li>
          </div>
          <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
          <div className="features-list-item">
            <img src="../../public/cube-04.png" alt="Cube" />
            <li>Budgeting Intervals</li>
          </div>
          <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
