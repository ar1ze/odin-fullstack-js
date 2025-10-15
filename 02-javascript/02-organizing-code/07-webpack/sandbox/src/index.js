import { greeting } from './greeting.js';
import './styles.css';
import ar1zeImage from './ar1ze.png';

console.log(greeting);

const image = document.createElement('img');
image.src = ar1zeImage;
document.body.appendChild(image);
