import raycast from './tools/raycast';

global.launchVec = new THREE.Vector3();
global.grav = GRAVITY;

var i;

export default function updateState(){
    for(i in cubeMeshes){
        cubeMeshes[i].next();
    }
    if(lockedMouse){
        if(devMode){
            if(player.falling){
                grav += GRAVITY * DURATION;
                player.position.y -= grav;
                if(player.jumping){
                    player.position.y += JUMPFORCE * DURATION;
                }
            }
            if(player.position.y < -4.8){
                player.position.y = -4.8;
                player.jumping = false;
                player.falling = false;
                grav = GRAVITY;
            }
            player.rotation.y = -me.mouse.curr.x;// * Math.PI;
            player.rotation.x = -me.mouse.curr.y;// * Math.PI; 
            if(me.keyboard[16]){
                if(me.keyboard[87]){//w
                    movingCube.mesh.position.z -= DEV_CAM_SPEED;
                }
                if(me.keyboard[65]){//a
                    movingCube.mesh.position.x -= DEV_CAM_SPEED;
                }
                if(me.keyboard[83]){//s
                    movingCube.mesh.position.z += DEV_CAM_SPEED;
                }
                if(me.keyboard[68]){//d
                    movingCube.mesh.position.x += DEV_CAM_SPEED;
                }
                } else {
                if(me.keyboard[87]){//w
                    player.position.z -= DEV_CAM_SPEED * Math.sin(-player.rotation.y  + Math.PI/2);
                    player.position.x += DEV_CAM_SPEED * Math.sin(-player.rotation.y);
                }
                if(me.keyboard[65]){//a
                    player.position.z += DEV_CAM_SPEED * Math.sin(player.rotation.y);
                    player.position.x -= DEV_CAM_SPEED * Math.sin(player.rotation.y + Math.PI/2);
                }
                if(me.keyboard[83]){//s
                    player.position.z += DEV_CAM_SPEED * Math.sin(-player.rotation.y + Math.PI/2);
                    player.position.x -= DEV_CAM_SPEED * Math.sin(-player.rotation.y);
                }
                if(me.keyboard[68]){//d
                    player.position.z -= DEV_CAM_SPEED * Math.sin(player.rotation.y);
                    player.position.x += DEV_CAM_SPEED * Math.sin(player.rotation.y + Math.PI/2);
                }
            } 
        }
        raycast();
        if(intersects[0]){
            intersects[0].object.rotation.y += 0.05;
            if(me.mouse.down){
                if(!intersects[0].object.shot){
                    launchVec.subVectors(intersects[0].object.position,player.position).normalize();
                    intersects[0].object.shot = true;
                    intersects[0].object.launchVec = launchVec;
                }
            }
        }
        
        var originPoint = movingCube.mesh.position.clone();
        
        for (i in movingCube.mesh.geometry.vertices){
            var localVertex = movingCube.mesh.geometry.vertices[i].clone();
            var globalVertex = localVertex.applyMatrix4( movingCube.mesh.matrix );
            var directionVector = globalVertex.sub( movingCube.mesh.position )
        
            var ray = new THREE.Raycaster( originPoint, directionVector.clone().normalize() );
            var collisionResults = ray.intersectObjects( shitBoxes );
            if( collisionResults[0] && collisionResults[0].distance < directionVector.length()){
                console.log('hit');
            }
        }
    }
}

