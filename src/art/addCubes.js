import makeShaderCube from './makeShaderCube';

var cubes = [];

export default function addCubes() {
    var mesh = makeShaderCube();
    mesh.position.z = -5;
    scene.add(mesh);
    var mesh2 = makeShaderCube();
    mesh2.position.z = -5;
    mesh2.position.x = 7;
    scene.add(mesh2);
    cubes[0] = mesh;
    cubes[1] = mesh2;
    return cubes;
}