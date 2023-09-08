import React from "react";

export const HeroBanner: React.FC = () => {

  return (
    <div className="hero-banner hero-banner--pink-yellow">
      <h1 className="hero-banner__headline">Deliver videos with Vowsuite</h1>
      <p className="hero-banner__description">
        It's the <strong>best</strong> for delivering videos.
      </p>
      <a
        id="code-sample-link"
        target="_blank"
        rel="noopener noreferrer"
        href="/"
        className="button button--secondary"
      >
        Check something out →
      </a>
    </div>
  );
};
