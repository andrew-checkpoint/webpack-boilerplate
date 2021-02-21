import blueSquare from "./assets/blue_square.svg";

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = ['Hello', 'webpack', '2'].join(' ');
    
    let image = new Image();
    image.src = blueSquare;

    element.appendChild(image);
    return element;
  }
  
  export default component;