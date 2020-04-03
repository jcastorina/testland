import addShaderCube from './addShaderCube';

var cubes = [];

export default function makeCubes() {
    var mesh = addShaderCube();
    scene.add(mesh);
    var mesh2 = addShaderCube();
    mesh2.position.x = 7;
    scene.add(mesh2);
    cubes[0] = mesh;
    cubes[1] = mesh2;
    return cubes;
}