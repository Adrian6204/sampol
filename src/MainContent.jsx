import React from 'react';

const MainContent = () => {
  return (
    <main style={{ color: 'white', textAlign: 'center', padding: '50px', background: 'linear-gradient(to right, #333, #444)' }}>
      <h1>Welcome.</h1>
      <input type="text" placeholder="Search..." style={{ padding: '10px', width: '300px' }} />
      <button style={{ padding: '10px', width: '150px', marginLeft: '10px' }}>Free Trial</button>
      <button style={{ padding: '10px', width: '100px', marginLeft: '10px' }}>See More</button>
      <p>Here is some text about the product. Lorem ipsum dolor sit amet...</p>
    </main>
  );
};

export default MainContent;
