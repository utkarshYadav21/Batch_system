import React from 'react';

const AdvantagesSection = () => {
  return (
    <div className="advantages-section">
      <div className="advantages info-section">
        <div className="headings">
          <div className="h4">ADVANTAGES</div>
          <div className="h2">Why Choose Uifry</div>
        </div>
        <div className="features-list">
          <div className="features-list-item">
            <img src="../../public/notif.png" alt="Notification" />
            <li>Clever Notifications</li>
          </div>
          <p>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
        </div>
      </div>
      <div className="img-container">
        <span className="bg-blur-red"></span>
        <img src="../../public/features-1.png" alt="Features" />
      </div>
    </div>
  );
};

export default AdvantagesSection;
