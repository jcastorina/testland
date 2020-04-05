import shaderCube from './shaderCube';
import gameObj from './makeMesh';

var cubes = [];
var color1 = {
    a: 0xE9B2E1,
    b: 0x09B2E1,
}

var color2 = {
    a: 0xACB6E5,
    b: 0x74ebd5
}

var pos1 = { x: 7, y: 0, z:-5 };
var pos2 = { x: 0, y: 0, z:-5 };
var pos3 = { x:-7, y: 0, z:-5 };

export default function addCubes() {
    var mesh1 = new shaderCube(color2,pos1,"mesh1");
    var mesh2 = new shaderCube(color2,pos2,"mesh2");
    var mesh3 = new gameObj(color1,pos3,"mesh3");

    cubes[0] = mesh1.mesh;
    cubes[1] = mesh2.mesh;
    cubes[2] = mesh3.mesh;

    scene.add(mesh1.mesh);
    scene.add(mesh2.mesh);
    scene.add(mesh3.mesh);
    //scene.add(cubes);
 
    views.game.objectList[0] = mesh1;
    views.game.objectList[1] = mesh2;
    views.game.objectList[2] = mesh3;

    return cubes;
}