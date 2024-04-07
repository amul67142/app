import React, { useState } from 'react';
import '../blob.css'; 

function Blob() {
  const [blobState] = useState(0); // State for animation

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setBlobState((prev) => (prev + 1) % 5); // Cycle through animation states (0-4)
//     }, 10000); 
//     return () => clearInterval(intervalId);
//   }, []);

  const blobStyles = [
    { top: '0', right: 'auto', left: '0', bottom: 'auto' }, // Top Left
    { top: '0', right: '0', bottom: 'auto', left: 'auto' }, // Top Right
     {top: 'auto', right: '0', bottom: '0', left: 'auto' }, // Bottom Right
    { top: 'auto', right: 'auto', bottom: '0', left: '0' }, // Bottom Left
    { top: '0', right: 'auto', left: '0', bottom: 'auto' }, // Back to Top Left (hidden by next state)
  ];

  const blob1Style = { ...blobStyles[blobState],  background: '#772BF2', willChange: 'top, right'  };
  const blob2Style = { ...blobStyles[(blobState + 2) % 5],  background: '#FF00B8', willChange: 'top, right'  };

  return (
    <div className=''>
      <div className="blob blob1" style={blob1Style}></div>
      <div className="blob blob2" style={blob2Style}></div>
    </div>
  );
}

export default Blob;
