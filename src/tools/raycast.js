import addCubes from "../art/addCubes";

export default function raycast(){
    raycaster.setFromCamera( vmouse, camera );
    for(var i = 0; i < global.cubes.length; i++ ){
        intersects = raycaster.intersectObject(cubes[i].mesh);
    }
}