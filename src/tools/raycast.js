export default function raycast(){
    raycaster.setFromCamera( vmouse, camera );
   // for(var i = 0; i < global.cubes.length; i++ ){
        intersects = raycaster.intersectObjects(scene.children);
        //console.log(intersects);
    //}
}