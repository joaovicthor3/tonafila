import React from 'react'

const Rainbow = (WrappedComponent) = > {
  const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
  const randomColour = colours[Math.floor(Math.random() * 5)];
  const className = randomColour + '-text';
}
