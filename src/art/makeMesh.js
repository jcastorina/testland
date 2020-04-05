import makePolyGeo from './makePolyGeo';
import makeShaderMaterial from './makeShaderMaterial';

export default class gameObj {
    constructor( color, pos, name ){
        this.mesh = new THREE.Mesh( makePolyGeo(), makeShaderMaterial( color.a , color.b ));
        this.mesh.shot = false;
        this.startingHeight = pos.y;
        this.startingPos = pos;
        this.mesh.position.set(pos.x,pos.y,pos.z);
        this.mesh.me = this.me = name;
    }
    next (launchVec) {
        if(this.mesh.shot){
            this.mesh.position.add(launchVec);
            if(this.mesh.position.y < this.startingHeight){
                this.mesh.position.set(this.startingPos.x,this.startingPos.y,this.startingPos.z);
                this.mesh.shot = false;
            }
        }
    }
}