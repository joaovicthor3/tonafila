import React from 'react'

const Rainbow = (WrappedComponent) => {
  const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
  const randomColour = colours[Math.floor(Math.random() * 5)];
  console.log(randomColour);
  const className = randomColour + '-text';

  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    )

  }

}


export default Rainbow;
