import React, { useEffect } from 'react';

const TrustAnalyticaBadge = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.trustanalytica.com/badge/reputation/yWj_SNwD6t0oAzL78SzxWnRhpmotRt8uvQZNCJ80BcJhz-pOg8Y8nVp2r_s1SdqRRoblhQ.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex justify-center items-center pb-4">
      <a href="https://trustanalytica.com/ca/ab/edmonton/best-website-designers" title="TrustAnalytica">
        <div className="trustanalytica-badge"></div>
      </a>
    </div>
  );
};

export default TrustAnalyticaBadge;
