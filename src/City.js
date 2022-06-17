import React from 'react';

export default function City({ skylineId, waterfrontId, castleId }) {
  return (
    <div className="city">
      <img src={`skyline-${skylineId}.jpeg`} />
      <img src={`waterfront-${waterfrontId}.jpeg`} />
      <img src={`castle-${castleId}.jpeg`} />
      {/* this component should take 3 props: waterfrontId, skylineId, and castleId */}
      {/* use these 3 ids in img tags load approriate images that live in the public directory */}
    </div>
  );
}
