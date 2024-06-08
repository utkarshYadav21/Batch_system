import React from 'react';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h2>Make The <span className="bg-blur-red"></span><span className="bg-blur-yellow"></span> Best Financial Decisions</h2>
        <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
        <div className="hero-btn-div">
          <button className="btn">Get Started →</button>
          <div className="watch-now"><img src="../../public/play_icon.png" alt="Play Icon" />Watch Now</div>
        </div>
        <div className="ribbon">
          <img className="a" src="../../public/a.png" alt="Ribbon A" />
          <div className="ribbon-top">
            <div className="ribbon-top-left">
              <img src="../../public/hero-logo1.png" alt="Hero Logo 1" />
              <div className="ribbon-text">
                <div>Achievements</div>
                <div>Best Finance App on PlayStore</div>
              </div>
            </div>
            <hr />
            <div className="ribbon-top-right">
              <img src="../../public/hero-logo2.png" alt="Hero Logo 2" />
              <div className="ribbon-text">
                <div>Finance</div>
                <div>Most Popular Accounting App</div>
              </div>
            </div>
          </div>
          <div className="ribbon-mid">
            <p>Make The Best Financial Decisions</p>
          </div>
          <div className="ribbon-bottom">
            <img src="../../public/star-1.png" alt="Star" />
            <div className="ribbon-bottom-text">
              <div>Uifry Premium</div>
              <div>Free Trial</div>
            </div>
          </div>
        </div>
      </div>
      <div className="img-container">
        <span className="ellipse-container">
          <span className="ellipse"></span>
          <span className="ellipse"></span>
          <span className="ellipse"></span>
        </span>
        <div className="img-bottom">
          <img src="../../public/iPhone-13-layer-1.png" alt="iPhone 1" />
        </div>
        <div className="img-mid">
          <img src="../../public/iPhone-13-layer-2.png" alt="iPhone 2" />
        </div>
        <div className="img-top">
          <img src="../../public/iPhone-13-layer-1.png" alt="iPhone 3" />
        </div>
        <span className="bg-blur-yellow"></span>
        <span className="bg-blur-red"></span>
      </div>
    </div>
  );
};

export default Hero;
