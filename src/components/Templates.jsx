import React from 'react';


const Templates = (props) => {
  return (
    <div>
      <img
        src={`/images/Word-template-${props.count}.jpg`} // Reference the images using a relative path
        height='380px'
        width='250px'
        alt={`Resume Template ${props.count}`}
      />
    </div>
  );
}

export default Templates;
