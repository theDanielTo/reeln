import React from 'react';
import SubHeader from '../components/sub-header';

export default function Home(props) {
  return (
    <div className="home-page">
      <div className="hero-banner flex-center">
        <img src="images/hero-banner.jpg" alt="Hero Banner" />
        <i className="fab fa-resolving" />
      </div>
      <SubHeader text="WEATHER CONDITIONS"/>
      {/* GET API FOR WEATHER CONDITIONS HERE */}
      <h2>Featured Video</h2>
      <iframe src="https://www.youtube.com/embed/9mhd4myg15E" title="YouTube video player" frameBorder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  );
}
