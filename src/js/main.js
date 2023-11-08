/* import javascriptLogo from '../public/images/javascript.svg' assert { type: 'image' };
import viteLogo from '../public/images/vite.svg' assert { type: 'image' };
import estudante from '../public/images/estudante1.png' assert { type: 'image' }; */
import { setupCounter } from './counter.js'
//import classes from '../css/style.css'


/* import sheet from '../css/style.css' assert { type: 'css' };
document.adoptedStyleSheets = [sheet];
shadowRoot.adoptedStyleSheets = [sheet]; 

document.querySelector('.viteLogo').style.src = `${viteLogo}`
document.querySelector('.jsLogo').src = `${javascriptLogo}`
*/

 setupCounter(document.querySelector('#counter')) 
