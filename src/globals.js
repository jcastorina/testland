global.THREE = require('three')

global.camera = new THREE.PerspectiveCamera( 68, window.innerWidth / window.innerHeight, 0.1, 50000 );
camera.rotation.reorder("YXZ");

global.scene = new THREE.Scene();

global.div = document.createElement( 'div' );
div.setAttribute( "id", "container");
document.body.appendChild( div );

global.raycaster = new THREE.Raycaster();
global.vmouse = new THREE.Vector2();

global.DEV_CAM_SPEED = 0.1;

global.intersects = null;
global.locked_mouse = false;

global.me = {
    keyboard:[],
    mouse:{
        down: false,
        rc  : false,
        curr: {
            x : 0,
            y : 0,
        },
        past: {
            x : 0,
            y : 0,
        },
        last: {
            x : 0,
            y : 0,
        },
    },
};

global.views = {
    game: {
        scene: 0,
        camera: 0,
        object_list: [],
        object_dict: [],
    },
    loading: {
        scene: 0,
        camera: 0,
        objects: [],
    },
};
