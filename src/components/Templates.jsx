import React, { useState, useCallback } from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import {useNavigate} from 'react-router-dom'

const StyledImage = styled('img')({
  position: 'relative',
  'z-index':'50px',
  '&:hover': {
    cursor: 'pointer',
    opacity: '0.5',
  },
});
const Templates = ({ index, count }) => {
  const navigate = useNavigate();
  const [isButtonVisible, setButtonVisible] = useState(false);
  const handleButtonClick = useCallback(() => {
    navigate('info');
  }, [navigate]);
  return (
    <div
      onMouseEnter={() => setButtonVisible(true)}
      onMouseLeave={() => setButtonVisible(false)}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <StyledImage
        src={`/images/Word-template-${count}.jpg`}
        height='400em'
        width='250em'
        alt={`Resume Template ${count}`}
      />
      {isButtonVisible && (
        <Button
          variant="contained"
          color="primary"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            '&:hover':{
              opacity:'0.2'
            },
            'width':'75%'
          }}
          onClick={handleButtonClick}
        >
          Use Template
        </Button>
      )}
    </div>
  );
}

export default Templates;
