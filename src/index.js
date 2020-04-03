import './globals.js';
import _ from 'lodash';
import './style/style.css';
import doArt from './art/doArt';
import animate from './init/animate';
import init from './init/init';

init();
doArt();
animate();    

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module');
        document.body.removeChild(element);
        element = component(); //re-render "component" to update click handler
        document.body.appendChild(element);
    })
}