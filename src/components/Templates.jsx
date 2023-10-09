import React from 'react'

const Templates = (props) => {
    // console.log(props.count);
  return (
    <div>
          <img src={`./../../public/Word-template-${props.count}.jpg`} height='80px' width='50px' alt={`Resume Template ${props.count}`} />
    </div>
  )
}

export default Templates
