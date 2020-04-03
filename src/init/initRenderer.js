var THREE = require('three');

var renderer = new THREE.WebGLRenderer( { antialias: true } );

export default function initRenderer() {
    
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.outputEncoding = THREE.sRGBEncoding;
    div.appendChild( renderer.domElement );
    //global.renderer = renderer;
    renderer.gammaInput = true;
    renderer.gammaOutput = true;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.renderReverseSided = false;
    return renderer;
}
