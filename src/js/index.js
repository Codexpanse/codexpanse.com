// CSS Imports *include in entry file only
import '../css/bootstrap.css';
import '../css/components.css';

/* Boostrap 4 Full Bundles */
// import 'bootstrap/dist/js/bootstrap.bundle'; /* Includes popper.js */
// import 'bootstrap'; /* Does not include popper. js */
// Uncomment 'popper.js' in webpack.config.js
/* Boostrap 4 Individual Components (Optional) */
// import 'bootstrap/js/dist/alert';
// import 'bootstrap/js/dist/button';
// import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/collapse';
// import 'bootstrap/js/dist/dropdown';
// import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/popover';
// import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';
// import 'bootstrap/js/dist/tooltip'; /* requires popper.js */
// import 'bootstrap/js/dist/util';


// import '@fortawesome/fontawesome-free/js/all.js';
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faTwitch, faFacebookSquare, faYoutube, faMedium, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

library.add( faTwitter, faTwitch, faFacebookSquare, faYoutube, faMedium, faCheckCircle, faGlobe, faGithub, faLinkedin, faInstagram );
dom.watch();

if (process.env.NODE_ENV === 'development') {
  require('../index.html'); /* Require so webpack watches changes to html file */
}
