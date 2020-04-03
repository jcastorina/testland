import GLTFLoader from 'three-gltf-loader';
export default function loadGLTF() {
    var loader = new GLTFLoader();    
    loader.load(
        'test.gltf',
            function( gltf ) {
            //gltf.scene.children[0].position.y = -3.5;
            scene.add( gltf.scene.children[0] );
            gltf.animations;
            gltf.scenes;
            gltf.cameras;
            gltf.asset;
        },
        function ( xhr ) {
            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded');
            if((xhr.loaded/xhr.total) === 1){
                   }
        },
        function ( error ) {
            console.log( 'An error occurred with the loader');
        },
    );
   
}
