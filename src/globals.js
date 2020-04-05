global.THREE = require('three')

global.camera = new THREE.PerspectiveCamera( 68, window.innerWidth / window.innerHeight, 0.1, 50000 );
camera.rotation.reorder("YXZ");

global.scene = new THREE.Scene();
global.textureLoader = new THREE.TextureLoader();

global.div = document.createElement( 'div' );
div.setAttribute( "id", "container");
document.body.appendChild( div );

global.raycaster = new THREE.Raycaster();
global.vmouse = new THREE.Vector2();

global.player = new THREE.Object3D();
player.name = "player";
player.rotation.reorder("YXZ");

scene.add(player);

global.FPS = 60;
global.FRAME = 1 / FPS;
global.DEV_CAM_SPEED = 0.1;

global.GRAVITY = 0.05;
global.JUMPFORCE = 7;

player.jumping = false;

global.intersects = null;
global.lockedMouse = false;
global.devMode = true;

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
