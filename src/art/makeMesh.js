import makePolyGeo from './makePolyGeo';
import makeShaderMaterial from './makeShaderMaterial';

export default class gameObj {
    constructor( color, pos, name ){
        this.mesh = new THREE.Mesh( makePolyGeo(), makeShaderMaterial( color.a , color.b ));
        this.mesh.shot = false;
        this.mesh.startingHeight = pos.y;
        this.mesh.startingPos = pos;
        this.mesh.position.set(pos.x,pos.y,pos.z);
        this.mesh.me = this.me = name;
        this.mesh.launchVec = null;
        this.mesh.duration = null;
        this.mesh.weight = 15;
        this.mesh.next = () => {
            if(this.mesh.shot){
                this.mesh.position.add(this.mesh.launchVec);
                this.mesh.duration += DURATION;
                this.mesh.position.y -= this.mesh.duration * GRAVITY * this.mesh.weight;
                if(this.mesh.position.y < this.mesh.startingHeight){
                    this.mesh.position.set(this.mesh.startingPos.x,this.mesh.startingPos.y,this.mesh.startingPos.z);
                    this.mesh.shot = false;
                    this.mesh.duration = 0;
                }
            }
        }
    }
}