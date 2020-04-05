import makeShaderMaterial from './makeShaderMaterial';

export default class shaderCube {
    constructor(color, pos, name){
        let geometry = new THREE.BoxGeometry(1,1,1);
        this.mesh = new THREE.Mesh(geometry, makeShaderMaterial(color.a,color.b));
        this.shot = false;
        this.startingHeight = pos.y;
        this.startingPos = pos;
        this.mesh.position.set(pos.x,pos.y,pos.z);
        this.mesh.me = this.me = name;
    }
}
